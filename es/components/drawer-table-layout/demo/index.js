import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button } from 'antd';
import React, { useEffect, useState, useRef } from 'react';
import KhtDrawerTableLayout from '../index';
import KhtDrawerTable from '../../drawer-table';
import { PlusOutlined } from '@ant-design/icons';
export default function Demo(props) {
  var _props$selectType = props.selectType,
    selectType = _props$selectType === void 0 ? 'checkbox' : _props$selectType;
  var initTableRef = useRef();
  var selectedTableRef = useRef();
  var drawerTableLayoutRef = useRef();
  var _useState = useState('0'),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1]; //弹框显示隐藏状态
  var _useState3 = useState('2'),
    _useState4 = _slicedToArray(_useState3, 2),
    searchType = _useState4[0],
    setSearchType = _useState4[1]; //1：全选查询类型， 2：选中查询类型
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedRowKeys = _useState6[0],
    setSelectedRowKeys = _useState6[1]; //已选数据集合
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    cancelSelectedRowKeys = _useState8[0],
    setCancelSelectedRowKeys = _useState8[1]; //全选时的取消选中数据集合
  var _useState9 = useState('select'),
    _useState10 = _slicedToArray(_useState9, 2),
    handleType = _useState10[0],
    setHandleType = _useState10[1]; //组件操作类型
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectTableRowKeys = _useState12[0],
    setSelectTableRowKeys = _useState12[1]; //当前页数据
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    tableDataList = _useState14[0],
    setTableData = _useState14[1]; //当前页数据
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    selectTableDataList = _useState16[0],
    setSelectTableData = _useState16[1]; //当前页数据
  var _useState17 = useState([{
      name: 'add',
      label: '添加',
      valueType: 'button',
      icon: /*#__PURE__*/React.createElement(PlusOutlined, null),
      width: 108
    }, {
      name: 'project',
      width: 100,
      open: false
    }, {
      name: 'project2',
      width: 100,
      options: [{
        label: '崇文花园2',
        value: 'chongwen'
      }]
    }, {
      name: 'project3',
      width: 100,
      options: [{
        label: '崇文花园3',
        value: 'chongwen'
      }]
    }, {
      name: 'project4',
      width: 100,
      options: [{
        label: '崇文花园4',
        value: 'chongwen'
      }]
    }]),
    _useState18 = _slicedToArray(_useState17, 1),
    searchOptions = _useState18[0];
  var columns = [{
    title: '项目1',
    dataIndex: 'name',
    ellipsis: true
  }, {
    title: '项目1',
    dataIndex: 'name',
    ellipsis: true
  }, {
    title: '所属机构',
    dataIndex: 'organization',
    width: 160,
    ellipsis: true
  }];
  //选择组件的数据请求
  var requestInitTable = function requestInitTable(_ref) {
    var _drawerTableLayoutRef;
    var currentPage = _ref.current,
      pageSize = _ref.pageSize;
    var paramsData = _objectSpread({
      currentPage: currentPage,
      pageSize: pageSize
    }, (_drawerTableLayoutRef = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef === void 0 ? void 0 : _drawerTableLayoutRef.getTableFormFieldsValue());
    console.log('%c Line:84 🍪requestInitTable---- paramsData', 'color:#7f2b82', paramsData);
    searchType === '1' && setSelectedRowKeys(tableDataList.map(function (c) {
      return c.id;
    }));
    return Promise.resolve({
      data: tableDataList,
      success: true
    });
  };
  //已选组件的数据请求
  var requestSelectedTable = function requestSelectedTable(_ref2) {
    var _drawerTableLayoutRef2;
    var currentPage = _ref2.current,
      pageSize = _ref2.pageSize;
    var paramsData = _objectSpread({
      currentPage: currentPage,
      pageSize: pageSize
    }, (_drawerTableLayoutRef2 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef2 === void 0 ? void 0 : _drawerTableLayoutRef2.getSelectedTableFormFieldsValue());
    console.log('%c Line:84 🍪requestSelectedTable--------- paramsData', 'color:#7f2b82', paramsData, new Date());
    var selectTableDatalist = [];
    tableDataList.forEach(function (c) {
      if (selectedRowKeys.includes(c.id)) {
        selectTableDatalist.push(c);
      }
    });
    console.log('%c Line:129 🥤 selectTableDatalist', 'color:#465975', new Date());
    setSelectTableData(selectTableDatalist);
    return Promise.resolve({
      data: selectTableDatalist,
      success: true
    });
  };
  //打开抽屉
  var showDrawer = function showDrawer(type) {
    setOpen(type);
    setHandleType(type === '3' ? 'readOnly' : 'select');
  };
  //关闭抽屉
  var onClose = function onClose() {
    setOpen('0');
    setSearchType('2');
    console.log('%c Line:140 🥃---关闭-----color:#ffdd4d');
  };
  //抽屉提交事件
  var onSubmit = function onSubmit(data, searchType) {
    console.log('%c Line:48 🍢 searchType', 'color:#b03734', searchType);
    console.log('%c Line:44 🥃 onSubmit-------data', 'color:#ffdd4d', data);
    console.log('%c Line:44 🥃 onSubmit----cancelSelectedRowKeys---data', 'color:#ffdd4d', cancelSelectedRowKeys);
  };
  //条件搜索值回调
  var onSearch = function onSearch(data, type, name) {
    var _selectedTableRef$cur, _initTableRef$current;
    console.log('%c Line:141 🥕 name', 'color:#f5ce50', name);
    console.log('%c Line:150 🥥 data', 'color:#4fff4B', data);
    type === 'selected' ? (_selectedTableRef$cur = selectedTableRef.current) === null || _selectedTableRef$cur === void 0 ? void 0 : _selectedTableRef$cur.reload() : (_initTableRef$current = initTableRef.current) === null || _initTableRef$current === void 0 ? void 0 : _initTableRef$current.reload();
  };
  //搜索条件选项点击事件
  var onOptionClick = function onOptionClick(e, name, type) {
    var _drawerTableLayoutRef3, _drawerTableLayoutRef5;
    console.log('%c Line:133 🥝 type', 'color:#4fff4B', type);
    console.log('%c Line:104 🥑 e', 'color:#3f7cff', e);
    console.log('%c Line:104 🌮 name', 'color:#b03734', drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : drawerTableLayoutRef.current);
    //手动设置搜索条件值(实际业务选择业务确定后执行下面的方式改表单字段值即可)
    name == 'project' && type == 'init' && (drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef3 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef3 === void 0 ? void 0 : _drawerTableLayoutRef3.setTableFormFieldsValue(_defineProperty({}, name, 'start')));
    name == 'project' && type == 'selected' && (drawerTableLayoutRef === null || drawerTableLayoutRef === void 0 ? void 0 : (_drawerTableLayoutRef5 = drawerTableLayoutRef.current) === null || _drawerTableLayoutRef5 === void 0 ? void 0 : _drawerTableLayoutRef5.setSelectedTableFormFieldsValue(_defineProperty({}, name, 'start22')));
  };
  //表格勾选事件
  var selectHandleChange = function selectHandleChange(val, type) {
    console.log('%c Line:103 🥔 type', 'color:#4fff4B', type);
    if (type === 'init') {
      setSelectedRowKeys(val);
      //清空选中时重置全选类型为选中类型
      val.length === 0 && setSearchType('2');
    } else {
      setSelectTableRowKeys(val);
    }
  };
  //抽屉全选事件
  var onCheckAllChange = function onCheckAllChange(checked) {
    console.log('%c Line:76 🌭 checked', 'color:#fca650', checked);
    setCancelSelectedRowKeys([]); //不管是全选还是取消全选都重置取消选中的集合
    setSelectedRowKeys(checked ? tableDataList.map(function (c) {
      return c.id;
    }) : []);
    setSearchType(checked ? '1' : '2');
  };
  //离开已选组件回调
  var closeSelectedComponent = function closeSelectedComponent() {
    console.log('%c Line:77 🍷--已选组件关闭了-   color:#7f2b82');
  };
  //打开已选组件回调
  var openSelectedComponent = function openSelectedComponent() {
    var _selectedTableRef$cur2;
    console.log('%c Line:77 🍷--已选组件已打开了-   color:#7f2b82');
    (_selectedTableRef$cur2 = selectedTableRef.current) === null || _selectedTableRef$cur2 === void 0 ? void 0 : _selectedTableRef$cur2.reload();
  };
  //已选移除事件
  var onRemoveSelected = function onRemoveSelected(type, data) {
    console.log('%c Line:67 🌶 data', 'color:#b03734', data);
    console.log('%c Line:64 onRemoveSelected--- type', 'color:#b03734', type);
  };
  //模拟表格数据
  useEffect(function () {
    var list = [];
    for (var i = 0; i < 20; i += 1) {
      list.push({
        name: "".concat(i, "AppName\u9879\u76EE\u58EB\u5927\u592B\u58EB\u5927\u592B\u7531\u4E8E"),
        organization: "".concat(i, "\u5BA2\u6237\u901A\u79D1\u6280\u4F18\u5148\u516C\u53F8"),
        id: (Math.floor(Math.random() * 2000) + 'jjk' + i * 23 + 'llk').toString()
      });
    }
    setTableData(list);
  }, []);
  //搜索条件
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return showDrawer('1');
    },
    style: {
      marginRight: '20px'
    }
  }, "\u9009\u62E9\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return showDrawer('2');
    }
  }, "\u67E5\u770B\u7EC4\u4EF6")), open === '1' && /*#__PURE__*/React.createElement(KhtDrawerTableLayout, {
    ref: drawerTableLayoutRef,
    drawerProps: {
      width: 720,
      title: '选项目',
      onClose: onClose,
      open: open === '1'
    },
    selectedDrawerProps: {
      width: 720,
      title: '已选项目'
    },
    onCheckAllChange: onCheckAllChange,
    searchType: searchType,
    selectType: selectType,
    handleType: handleType,
    onSubmit: onSubmit,
    onRemoveSelected: onRemoveSelected,
    closeSelectedComponent: closeSelectedComponent,
    openSelectedComponent: openSelectedComponent,
    drawerTableLayoutTitle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 15
      }
    }, "\u9879\u76EE\uFF1A", '崇文花园 ,'), /*#__PURE__*/React.createElement("span", null, "\u4E1A\u4E3B\u6570\uFF1A", 7)),
    initTableOptions: {
      selectedRowKeys: selectedRowKeys,
      // checkedAllText: '(最多可以设置9个常用应用)',
      tableDataTotal: tableDataList.length,
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchName',
        searchOptions: searchOptions
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
        onRow: function onRow(record) {
          return {
            onChange: function onChange(_ref3) {
              var target = _ref3.target;
              var checked = target.checked;
              if (searchType === '1') {
                var list = [];
                var flag = cancelSelectedRowKeys.some(function (c) {
                  return c === record.id;
                });
                if (checked) {
                  var _list;
                  //勾选时删除取消选中,过滤掉选中的数据
                  console.log('%c Line:207 🍏 cancelSelectedRowKeys', 'color:#ed9ec7', cancelSelectedRowKeys);
                  list = _toConsumableArray(cancelSelectedRowKeys);
                  (_list = list) === null || _list === void 0 ? void 0 : _list.map(function (c, index) {
                    if (c === record.id) {
                      list.splice(index, 1);
                    }
                  });
                  console.log('%c Line:207 🍻 list', 'color:#465975', list);
                } else if (!flag) {
                  //不存在已取消勾选中时
                  list = [].concat(_toConsumableArray(cancelSelectedRowKeys), [record.id]);
                }
                console.log('%c Line:210 🍓 list', 'color:#42b983', list);
                setCancelSelectedRowKeys(list);
              }
            } // 点击行
          };
        },

        actionRef: initTableRef,
        rowKey: "id",
        columns: columns,
        selectAllButtonState: true,
        rowSelection: {
          type: selectType,
          fixed: selectType === 'checkbox' && tableDataList.length > 0,
          defaultSelectedRowKeys: selectedRowKeys,
          selectedRowKeys: selectedRowKeys,
          onChange: function onChange(e) {
            return selectHandleChange(e, 'init');
          }
        },
        request: requestInitTable
      })
    },
    selectedTableOptions: {
      selectedRowKeys: selectTableRowKeys,
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchName',
        searchOptions: searchOptions
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
        actionRef: selectedTableRef,
        rowKey: "id",
        columns: columns,
        rowSelection: {
          type: selectType,
          fixed: selectType === 'checkbox' && selectTableDataList.length > 0,
          onChange: function onChange(e) {
            return selectHandleChange(e, 'selected');
          }
        },
        request: requestSelectedTable
      })
    }
  }), open === '2' && /*#__PURE__*/React.createElement(KhtDrawerTableLayout, {
    ref: drawerTableLayoutRef,
    drawerProps: {
      width: 720,
      title: '查看项目',
      onClose: onClose,
      open: open === '2'
    },
    handleType: "readOnly",
    drawerTableLayoutTitle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 15
      }
    }, "\u9879\u76EE\uFF1A", '崇文花园 ,'), /*#__PURE__*/React.createElement("span", null, "\u4E1A\u4E3B\u6570\uFF1A", 7)),
    initTableOptions: {
      searchFormOptions: {
        onSearch: onSearch,
        onOptionClick: onOptionClick,
        searchInputName: 'searchName',
        searchOptions: searchOptions
      },
      tableNode: /*#__PURE__*/React.createElement(KhtDrawerTable, {
        actionRef: initTableRef,
        rowKey: "id",
        columns: columns,
        request: requestInitTable
      })
    }
  }));
}