<?php
namespace Bitrix\Crm\Timeline;

use Bitrix\Crm\Timeline\TimelineType;
use Bitrix\Main;
use Bitrix\Main\Type\Date;
use Bitrix\Main\Type\DateTime;
use Bitrix\Main\Entity\Query;

use Bitrix\Crm\Timeline\Entity\TimelineTable;
use Bitrix\Crm\Timeline\Entity\TimelineBindingTable;

class TimelineEntry
{
	public static function getByID($ID)
	{
		$dbResult = TimelineTable::getList(array('filter' => array('=ID' => $ID), 'limit' => 1));
		$fields = $dbResult->fetch();
		return is_array($fields) ? $fields : null;
	}

	public static function isAssociatedEntityExist($entityTypeID, $entityID)
	{
		$query = new Query(TimelineTable::getEntity());
		$query->addFilter('=ASSOCIATED_ENTITY_ID', $entityID);
		$query->addFilter('=ASSOCIATED_ENTITY_TYPE_ID', $entityTypeID);
		$query->addSelect('ID');
		$query->setLimit(1);

		$dbResult = $query->exec();
		return is_array($dbResult->fetch());
	}
	public static function synchronizeAssociatedEntityBindings($entityTypeID, $entityID, array $bindings)
	{
		if(!is_int($entityTypeID))
		{
			$entityTypeID = (int)$entityTypeID;
		}
		if($entityTypeID <= 0)
		{
			throw new Main\ArgumentException('Entity Type ID must be greater than zero.', 'entityTypeID');
		}

		if(!is_int($entityID))
		{
			$entityID = (int)$entityID;
		}
		if($entityID <= 0)
		{
			throw new Main\ArgumentException('Entity ID must be greater than zero.', 'entityID');
		}

		$query = new Query(TimelineTable::getEntity());
		$query->addFilter('=ASSOCIATED_ENTITY_ID', $entityID);
		$query->addFilter('=ASSOCIATED_ENTITY_TYPE_ID', $entityTypeID);
		$query->addSelect('ID');
		$dbResult = $query->exec();

		$entryIDs = array();
		while($entry = $dbResult->fetch())
		{
			$entryIDs[] = (int)$entry['ID'];
		}

		if(empty($entryIDs))
		{
			return;
		}

		$originalBindings = array();
		$query = new Query(TimelineBindingTable::getEntity());
		$query->addFilter('=OWNER_ID', $entryIDs[0]);
		$query->addSelect('ENTITY_TYPE_ID');
		$query->addSelect('ENTITY_ID');

		$dbResult = $query->exec();
		while($binding = $dbResult->fetch())
		{
			$originalBindings[] = $binding;
		}

		$added = array();
		$removed = array();

		self::prepareBindingChanges($originalBindings, $bindings, $added, $removed);

		foreach($entryIDs as $entryID)
		{
			foreach($removed as $binding)
			{
				TimelineBindingTable::delete(
					array(
						'OWNER_ID' => $entryID,
						'ENTITY_TYPE_ID' => $binding['ENTITY_TYPE_ID'],
						'ENTITY_ID' => $binding['ENTITY_ID']
					)
				);
			}

			foreach($added as $binding)
			{
				TimelineBindingTable::upsert(
					array(
						'OWNER_ID' => $entryID,
						'ENTITY_TYPE_ID' => $binding['ENTITY_TYPE_ID'],
						'ENTITY_ID' => $binding['ENTITY_ID']
					)
				);
			}
		}
	}
	public static function deleteByOwner($entityTypeID, $entityID)
	{
		if(!is_int($entityTypeID))
		{
			$entityTypeID = (int)$entityTypeID;
		}

		if($entityTypeID <= 0)
		{
			throw new Main\ArgumentException('Entity Type ID must be greater than zero.', 'entityTypeID');
		}

		if(!is_int($entityID))
		{
			$entityID = (int)$entityID;
		}

		if($entityID <= 0)
		{
			throw new Main\ArgumentException('Entity ID must be greater than zero.', 'entityID');
		}

		$connection = Main\Application::getConnection();

		//region Delete by entity bindings
		$ownerMap = array();
		$dbResult = $connection->query(
			"SELECT OWNER_ID FROM b_crm_timeline_bind WHERE ENTITY_TYPE_ID = {$entityTypeID} AND ENTITY_ID = {$entityID}"
		);
		while($fields = $dbResult->fetch())
		{
			$ownerMap[$fields['OWNER_ID']] = true;
		}

		$connection->queryExecute(
			"DELETE FROM b_crm_timeline_bind WHERE ENTITY_TYPE_ID = {$entityTypeID} AND ENTITY_ID = {$entityID}"
		);

		$sliceSize = 200;
		$ownerIDs = array_keys($ownerMap);
		while(!empty($ownerIDs))
		{
			$conditionSql = implode(',', array_splice($ownerIDs, 0, $sliceSize));
			if($conditionSql === '')
			{
				break;
			}

			$dbResult = $connection->query("SELECT OWNER_ID FROM b_crm_timeline_bind WHERE OWNER_ID IN ({$conditionSql})");
			while($fields = $dbResult->fetch())
			{
				unset($ownerMap[$fields['OWNER_ID']]);
			}
		}

		$ownerIDs = array_keys($ownerMap);
		while(!empty($ownerIDs))
		{
			$conditionSql = implode(',', array_splice($ownerIDs, 0, $sliceSize));
			if($conditionSql === '')
			{
				break;
			}
			$connection->queryExecute("DELETE FROM b_crm_timeline WHERE ID IN ($conditionSql)");
		}
		//endregion

		//region Delete by entity associations
		$connection->queryExecute(
			"DELETE b.* FROM b_crm_timeline_bind b INNER JOIN b_crm_timeline t ON b.OWNER_ID = t.ID AND t.ASSOCIATED_ENTITY_TYPE_ID = {$entityTypeID} AND t.ASSOCIATED_ENTITY_ID = {$entityID}"
		);
		$connection->queryExecute(
			"DELETE FROM b_crm_timeline WHERE ASSOCIATED_ENTITY_TYPE_ID = {$entityTypeID} AND ASSOCIATED_ENTITY_ID = {$entityID}"
		);
		//endregion
	}
	public static function deleteByAssociatedEntity($entityTypeID, $entityID)
	{
		$query = new Query(TimelineTable::getEntity());
		$query->addFilter('=ASSOCIATED_ENTITY_TYPE_ID', $entityTypeID);
		$query->addFilter('=ASSOCIATED_ENTITY_ID', $entityID);
		$query->addSelect('ID');

		$dbResult = $query->exec();
		while($entry = $dbResult->fetch())
		{
			$ID = (int)$entry['ID'];
			static::delete($ID);
		}
	}
	public static function delete($ID)
	{
		if(!is_int($ID))
		{
			$ID = (int)$ID;
		}

		if($ID <= 0)
		{
			throw new Main\ArgumentException('Entity ID must be greater than zero.', 'ID');
		}
		TimelineBindingTable::deleteByOwner($ID);
		TimelineTable::delete($ID);
	}
	public static function prepareEntityPushTag($entityTypeID, $entityID)
	{
		$ownerTypeName = \CCrmOwnerType::ResolveName($entityTypeID);
		return $entityID > 0 ? "CRM_TIMELINE_{$ownerTypeName}_{$entityID}" : "CRM_TIMELINE_{$ownerTypeName}";
	}

	protected static function prepareBindingChanges(array $origin, array $current, array &$added, array &$removed)
	{
		$originMap = array();
		foreach($origin as $binding)
		{
			$entityTypeID = isset($binding['ENTITY_TYPE_ID']) ? (int)$binding['ENTITY_TYPE_ID'] : 0;
			$entityID = isset($binding['ENTITY_ID']) ? (int)$binding['ENTITY_ID'] : 0;
			if($entityTypeID <= 0 || $entityID <= 0)
			{
				continue;
			}

			$originMap["{$entityTypeID}:{$entityID}"] = $binding;
		}

		$currentMap = array();
		foreach($current as $binding)
		{
			$entityTypeID = isset($binding['ENTITY_TYPE_ID']) ? (int)$binding['ENTITY_TYPE_ID'] : 0;
			$entityID = isset($binding['ENTITY_ID']) ? (int)$binding['ENTITY_ID'] : 0;
			if($entityTypeID <= 0 || $entityID <= 0)
			{
				continue;
			}

			$currentMap["{$entityTypeID}:{$entityID}"] = $binding;
		}

		$originKeys = array_keys($originMap);
		$currentKeys = array_keys($currentMap);

		$removed = array();
		foreach(array_diff($originKeys, $currentKeys) as $key)
		{
			$removed[] = $originMap[$key];
		}

		$added = array();
		foreach(array_diff($currentKeys, $originKeys) as $key)
		{
			$added[] = $currentMap[$key];
		}
	}
	protected static function registerBindings($entryID, array $bindings)
	{
		foreach($bindings as $binding)
		{
			$entityID = isset($binding['ENTITY_ID']) ? (int)$binding['ENTITY_ID'] : 0;
			$entityTypeID = isset($binding['ENTITY_TYPE_ID']) ? (int)$binding['ENTITY_TYPE_ID'] : \CCrmOwnerType::Undefined;

			if($entityID > 0 && \CCrmOwnerType::IsDefined($entityTypeID))
			{
				TimelineBindingTable::upsert(
					array(
						'ENTITY_TYPE_ID' => $entityTypeID,
						'ENTITY_ID' => $entityID,
						'OWNER_ID' => $entryID
					)
				);
			}
		}
	}
	public static function shift($ID, DateTime $time)
	{
		Entity\TimelineTable::update($ID, array('CREATED' => $time));
	}
}