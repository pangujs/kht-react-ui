import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import KhtBusinessHouseholder from '../index';
export default function Demo() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1]; //组件业务类型
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    selectProject = _useState6[0],
    setSelectProject = _useState6[1]; //已选的项目{name:string,id:string}
  var _useState7 = useState('select'),
    _useState8 = _slicedToArray(_useState7, 2),
    handleType = _useState8[0],
    setHandleType = _useState8[1]; //组件操作类型：select:选择组件（包含已选组件），readOnly：查看组件
  var _useState9 = useState('multiple'),
    _useState10 = _slicedToArray(_useState9, 2),
    projectType = _useState10[0],
    setProjectType = _useState10[1]; //项目选择类型（多、单）
  var changeShow = function changeShow(type, projectTypeVal, handleTypeVal) {
    setType(type);
    setProjectType(projectTypeVal);
    setHandleType(handleTypeVal);
    setOpen(true);
    setSelectProject({
      name: '翔栩御景城',
      id: '4ad0116621e1433296414291e853fb61'
    });
  };
  //抽屉提交事件
  var onSubmit = function onSubmit(_ref) {
    var ids = _ref.ids,
      selectedRows = _ref.selectedRows,
      selectProject = _ref.selectProject,
      searchType = _ref.searchType;
    console.log('%c Line:17 🍫 ids', 'color:#4fff4B', ids);
    console.log('%c Line:17 🌮 selectedRows', 'color:#fca650', selectedRows);
    console.log('%c Line:17 🌮 selectProject', 'color:#fca650', selectProject);
    console.log('%c Line:17 🥐 searchType', 'color:#b03734', searchType);
  };
  useEffect(function () {}, [handleType]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('tenant', 'multiple', 'select');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u9009\u62E9\u4F4F\u6237"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('proprietor', 'multiple', 'select');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u9009\u62E9\u4E1A\u4E3B"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('family', 'multiple', 'select');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u9009\u62E9\u5BB6\u5C5E"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('tenantFamily', 'multiple', 'select');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u9009\u62E9\u79DF\u6237\u5BB6\u5C5E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('tenant', 'single', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u5355\u4E2A\u9879\u76EE\u67E5\u770B\u4F4F\u6237"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('proprietor', 'single', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u5355\u4E2A\u9879\u76EE\u67E5\u770B\u4E1A\u4E3B"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('family', 'single', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u5355\u4E2A\u9879\u76EE\u67E5\u770B\u5BB6\u5C5E"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('tenantFamily', 'single', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u5355\u4E2A\u9879\u76EE\u67E5\u770B\u79DF\u6237\u5BB6\u5C5E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('tenant', 'multiple', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u591A\u4E2A\u9879\u76EE\u67E5\u770B\u4F4F\u6237"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('proprietor', 'multiple', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u591A\u4E2A\u9879\u76EE\u67E5\u770B\u4E1A\u4E3B"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('family', 'multiple', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u591A\u4E2A\u9879\u76EE\u67E5\u770B\u5BB6\u5C5E"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return changeShow('tenantFamily', 'multiple', 'readOnly');
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u591A\u4E2A\u9879\u76EE\u67E5\u770B\u79DF\u6237\u5BB6\u5C5E")), /*#__PURE__*/React.createElement(KhtBusinessHouseholder, {
    type: type,
    handleType: handleType,
    projectType: projectType,
    close: function close() {
      return setOpen(false);
    },
    open: open,
    selectedRowKeys: ['2f4edc06345e4842aed271f083b324e3'],
    selectProject: selectProject,
    onSubmit: onSubmit
  }));
}