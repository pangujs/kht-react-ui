import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { ConfigProvider, Modal } from 'antd';
import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ProTable } from '@ant-design/pro-components';
import { useTableCommon } from '../../../hooks/useTableCommon';
import "./index.css";
import { getCustomerTagsListForId } from '../../../http/api';
export default function TagsModalTable(props) {
  var _props$modalProps, _props$modalProps2;
  var _useTableCommon = useTableCommon({
      isUIResponse: true,
      scrollYLimit: 11,
      rowKey: 'id'
    }),
    baseProps = _useTableCommon.baseProps;
  // const [tableData, setTableData] = useState<TableDataType[]>([]);
  var columns = [{
    title: '标签',
    dataIndex: 'tagName',
    ellipsis: true
  }, {
    title: '标签组',
    dataIndex: 'tagGroupName',
    ellipsis: true
  }, {
    title: '标签分类',
    dataIndex: 'tagGroupCategoryName',
    ellipsis: true
  }, {
    title: '打标签人',
    dataIndex: 'employeeName',
    ellipsis: true
  }, {
    title: '打标签时间',
    dataIndex: 'createDate',
    ellipsis: true
  }];
  var HeaderTitle = function HeaderTitle() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, ' ', props.currentTableItem.name, " ", /*#__PURE__*/React.createElement("span", null, "(", props.currentTableItem.useTagInfoList.length, ")"), ' ');
  };
  var tableDataRequest = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getCustomerTagsListForId({
              page: {
                currentPage: values.current,
                pageSize: values.pageSize
              },
              customerId: props.currentTableItem.id
            });
          case 2:
            result = _context.sent;
            return _context.abrupt("return", {
              success: true,
              data: result.response.dataList || [],
              total: result.response.totalCount || 0
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function tableDataRequest(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  // useEffect(() => {
  //   if (props.currentTableItem) {
  //     setTableData(
  //       props.currentTableItem.useTagInfoList?.map((item: any, index: number) => ({
  //         ...item,
  //         id: index.toString(),
  //       })),
  //     );
  //   }
  // }, [props.currentTableItem]);
  return /*#__PURE__*/React.createElement(Modal, _objectSpread(_objectSpread({}, props.modalProps), {}, {
    className: "custom-modal-sty",
    maskClosable: ((_props$modalProps = props.modalProps) === null || _props$modalProps === void 0 ? void 0 : _props$modalProps.maskClosable) || false,
    title: '标签',
    width: ((_props$modalProps2 = props.modalProps) === null || _props$modalProps2 === void 0 ? void 0 : _props$modalProps2.width) || '60%',
    getContainer: document.getElementById('root') || document.body,
    footer: false,
    onCancel: props.cancel
  }), /*#__PURE__*/React.createElement(HeaderTitle, null), /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(ProTable, _objectSpread(_objectSpread({}, baseProps), {}, {
    columns: columns,
    tableClassName: "reset-table-sty-modal",
    request: tableDataRequest,
    size: "small",
    search: false,
    pagination: {
      simple: true,
      defaultPageSize: 10,
      hideOnSinglePage: true,
      showTotal: false
    }
  }))));
}