{"version":3,"file":"script.min.js","sources":["script.js"],"names":["BX","crmPaySys","formId","orderProps","orderFields","paymentFields","userProps","userFields","requisiteFields","bankDetailFields","companyFields","userColumnFields","contactFields","simpleMode","template","init","params","key","hasOwnProperty","this","formObj","crmPSActionFile","reloadPreview","bindInputsChange","getTemplatePreview","frame","parentNode","style","opacity","form","data","formData","ajax","prepareForm","action","sessid","bitrix_sessid","method","dataType","url","onsuccess","delegate","result","TEMPLATE","onfailure","debug","tabs","inputs","findChildren","nextElementSibling","tag","i","bind","switchMode","switcher","crmPSPropType","showItems","showNoneSimpleRows","innerHTML","message","hideItems","hideNoneSimpleRows","getPrivateKey","pay_system_id","value","ERROR","alert","crmPSPersonType","persTypeSelector","onSelect","getId","opFNames","getOrderPropsFNames","replaceOrderPropsSelectors","retNames","l","elements","length","test","name","push","replace","persTypeId","actionFileId","actionName","indexOf","Object","assign","insertOptions","aTabs","bindEvents","onSelectFunc","selObj","typeSelector","replaceValueField","fieldName","setUserProps","setOrderFields","setPaymentFields","setOrderProps","setRequisiteFields","setBankDetailFields","setCompanyFields","setContactFields","setUserColumnsFields","setOtherProps","showSelectorField","props","clone","k","rebuildSelect","select","items","opt","optIndex","el","j","setSelected","bMultiple","bGroup","curGroup","Array","getAttribute","lastChild","removeChild","document","createElement","label","util","htmlspecialchars","appendChild","selected","selectedIndex","showInputField","bHide","bShow","display","oItems","oldVal","options","property","option","text","add","ex","parents","remove","marginBottom","insertBefore","create","parent","findParent","className","id","entity","substring","tab","hideSelected","findChildByClassName","ShowTab","SelectTab","tab_id","on","sel","getElementById","HoverTab","tab_right","div","cnt","hidden","arFields","arFieldsList","arSavedFields","typeValuesTmpl","fileValuesTmpl","selectValuesTmpl","userColValuesTmpl","userPropsListTmpl","checkboxValuesTmpl","hiddenFieldList","groups","actFileSelector","getAjaxFields","actionFile","insertFields","setFieldsList","person_type","NAME","GROUP_LIST","FIELDS_BY_GROUP","FIELDS_LIST","psMode","PS_MODE_LIST","attrs","tr","children","insertAfter","base","href","window","location","contentDocument","open","close","head","body","frameDoc","contentWindow","findChild","height","onload","saveFields","fName","TYPE","fieldPreview","SRC","HEIGHT","WIDTH","value1","index","VALUE1","OPTIONS","checked","value2","VALUE2","restoreFields","type","setAttribute","fieldId","actId","arFieldsByGroups","removeFields","lastTab","groupId","td","onclick","onmouseover","onmouseout","table","cellspacing","nextSibling","container","fieldInGroup","wrapper","row","makeRow","makeEmptyRow","valueField","VALUE","value1Field","colspan","arField","fieldValue","title","DESCR","valueHtml","tmp","containers","findChildrenByClassName","PopupMenu","destroy","list","actListObj","displayedElements","parentElement","substr","propsTable","flag","element","childElementCount","addUserColumn","propId","propName","columns","columnName","SORT","GROUP"],"mappings":"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"}