import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _ from 'lodash';
//存储当前条件下的全选
export var useTableSelect = function useTableSelect(_ref) {
  var initSelectedRowKeys = _ref.initSelectedRowKeys,
    setInitSelectedRowKeys = _ref.setInitSelectedRowKeys,
    allSelectTableRowKeys = _ref.allSelectTableRowKeys,
    setAllSelectTableRowKeys = _ref.setAllSelectTableRowKeys;
  //获取指定key的全选数组
  var getCurrentAllSelectKeys = function getCurrentAllSelectKeys(key) {
    var result = typeof allSelectTableRowKeys[key] !== 'undefined' ? JSON.parse(JSON.stringify(allSelectTableRowKeys[key])) : [];
    return result;
  };
  //获取已全选的数据集合
  var getSelectRowKeys = function getSelectRowKeys(allSelectTableKeys) {
    var result = [];
    if (Object.keys(allSelectTableKeys).length > 0) {
      Object.keys(allSelectTableKeys).forEach(function (k) {
        result = result.concat(allSelectTableKeys[k] || []);
      });
    }
    return _toConsumableArray(new Set(result));
  };
  //删除已全选的数据集合中指定的值
  var deleteAllSelectRowKeys = function deleteAllSelectRowKeys(data) {
    var allSelectTableRowKeysData = JSON.parse(JSON.stringify(allSelectTableRowKeys));
    if (Object.keys(allSelectTableRowKeysData).length > 0) {
      Object.keys(allSelectTableRowKeysData).forEach(function (k) {
        if (allSelectTableRowKeysData[k].length > 0) {
          //取消已选
          allSelectTableRowKeysData[k] = Object.prototype.toString.call(data) === '[object Array]' ? _.difference(allSelectTableRowKeysData[k], data) : allSelectTableRowKeysData[k].filter(function (c) {
            return c !== data;
          });
        }
      });
    }
    //更新全选
    setAllSelectTableRowKeys(allSelectTableRowKeysData);
  };
  //单个取消已选
  var cancelSingleSelectKey = function cancelSingleSelectKey(rowKeyData) {
    //取消已选中当前的选项
    var initSelectedRowKeysData = (initSelectedRowKeys || []).filter(function (c) {
      return c !== rowKeyData;
    });
    setInitSelectedRowKeys(initSelectedRowKeysData);
    deleteAllSelectRowKeys(rowKeyData);
  };
  //单个的选中
  var selectSingleKey = function selectSingleKey(rowKeyData) {
    var list = [].concat(_toConsumableArray(initSelectedRowKeys), [rowKeyData]);
    setInitSelectedRowKeys(_toConsumableArray(new Set(list)));
  };
  //设置全选的数据
  var setAllSelectRowKeys = function setAllSelectRowKeys(data) {
    var searchData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var current = {}; //当前全选数据
    var search = {}; //条件
    Object.keys(searchData).forEach(function (k) {
      if (!['page', 'pageSize', 'currentPage'].includes(k)) {
        //过滤掉分页参数，
        search[k] = searchData[k];
      }
    });
    //设置当前全选动作数据之前，缓存上一次的值
    var previousAllSelectKeys = getCurrentAllSelectKeys(JSON.stringify(search));
    console.log('%c Line:83 🍋 previous', 'color:#ffdd4d', previousAllSelectKeys);
    //设置当前全选动作的数据结果
    current[JSON.stringify(search)] = data;
    var selectKeys = getSelectRowKeys(_objectSpread(_objectSpread({}, allSelectTableRowKeys), current));
    if (data.length === 0) {
      //当前全选是空时，删除已选中当前条件的全选数据
      var list = [].concat(_toConsumableArray(initSelectedRowKeys), _toConsumableArray(selectKeys));
      var result = _.difference(list, previousAllSelectKeys);
      setInitSelectedRowKeys(_toConsumableArray(new Set(result)));
    } else {
      //同步已选集合
      console.log('%c Line:85 🍕 selectKeys', 'color:#f5ce50', selectKeys);
      var _list = [].concat(_toConsumableArray(initSelectedRowKeys), _toConsumableArray(selectKeys));
      setInitSelectedRowKeys(_toConsumableArray(new Set(_list)));
    }
    setAllSelectTableRowKeys(_objectSpread(_objectSpread({}, allSelectTableRowKeys), current));
  };
  /**
   * 更新表格的已选数据总集合、已存储的数据更新（当前页的、全选的）
   * @param initSelectedKeys =>initSelectedRowKeys 已选的总集合
   * @param initTableCurrentKeys =>initTableCurrentSelectedKeys 当前页的已选
   * @param currentPageKeys =>initTableCurrentPageKeys 当前页的数据
   */
  var setInitTableSelectedKeysData = function setInitTableSelectedKeysData() {
    var initSelectedKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var initTableCurrentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var currentPageKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    //当前状态非全选状态
    //当前页已选数据有就合并去重，没有就在1、已选集合中剔除当前页的数据，2、全选集合中剔除
    console.log('%c Line:88 🥝 initTableCurrentKeys', 'color:#b03734', initTableCurrentKeys);
    if (initTableCurrentKeys.length > 0) {
      var selectKeys = new Set([].concat(_toConsumableArray(initSelectedKeys), _toConsumableArray(initTableCurrentKeys)));
      setInitSelectedRowKeys(_toConsumableArray(selectKeys));
    } else {
      //取消选中： 去掉与当前页数据的交集
      var totalSelectKeys = _toConsumableArray(new Set(initSelectedKeys));
      //与上一次的当前页进行对比取交集
      var sameKeys = _.intersection(totalSelectKeys, _toConsumableArray(new Set(currentPageKeys)));
      console.log('%c Line:140 🍡onChange=========== selectedRowKeys======= currentPageKeys', 'color:#ea7e5c', currentPageKeys);
      //与交集对比取差集即是删除当前已选的数据
      var _selectKeys = _.difference(totalSelectKeys, sameKeys);
      console.log('%c Line:139 🍅 selectKeys', 'color:#b03734', _selectKeys);
      setInitSelectedRowKeys(_toConsumableArray(_selectKeys));
      deleteAllSelectRowKeys(currentPageKeys);
    }
  };
  return {
    setAllSelectRowKeys: setAllSelectRowKeys,
    cancelSingleSelectKey: cancelSingleSelectKey,
    setInitTableSelectedKeysData: setInitTableSelectedKeysData
  };
};