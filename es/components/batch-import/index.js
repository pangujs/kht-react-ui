import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Progress, message, Modal, Table, Upload, ConfigProvider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import KhtIcons from '../kht-icons';
import { useModalVisible } from '../../hooks';
import zhCN from 'antd/es/locale/zh_CN';
import { getImportTemplate, importOrganization, importOrganizationResult, exportResult } from './api/index';
import { downFile } from '../../hooks/utils';
export default function BatchImport(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    title = props.title,
    onClose = props.onClose,
    type = props.type;
  var _useModalVisible = useModalVisible(),
    visible = _useModalVisible.visible,
    changeStatus = _useModalVisible.changeStatus;
  var _useModalVisible2 = useModalVisible(),
    recordVisible = _useModalVisible2.visible,
    changeStatusRecord = _useModalVisible2.changeStatus;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    batchNo = _useState2[0],
    setBatchNo = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    file = _useState4[0],
    setFile = _useState4[1];
  var timer = useRef(null);
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    percent = _useState6[0],
    setPercent = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isSuccess = _useState8[0],
    setIsSuccess = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    successCount = _useState10[0],
    setSuccessCount = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    dataSource = _useState12[0],
    setDataSource = _useState12[1];
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    failCount = _useState14[0],
    setFailCount = _useState14[1];
  //是否是上传中
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  // 轮询次数
  var pollingCount = useRef(0);
  var init = function init() {
    setBatchNo('');
    setFile(null);
    setPercent(0);
    setSuccessCount(0);
    setFailCount(0);
    setIsSuccess(false);
    setDataSource([]);
    setLoading(false);
    pollingCount.current = 0;
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      setLoading(false);
    }
  };
  //关闭弹窗
  var handleClose = function handleClose() {
    onClose();
  };
  //   下载模板
  var downloadTemp = function downloadTemp() {
    getImportTemplate(type).then(function (res) {
      var url = res.response.url;
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url;
      a.click();
      document.body.removeChild(a);
    });
  };
  // upload组件监听文件变化
  var changeFile = function changeFile(fileObj) {
    visible && changeStatus(); //再次上传去掉第二个弹窗
    var _fileObj$file = fileObj.file,
      name = _fileObj$file.name,
      originFileObj = _fileObj$file.originFileObj;
    // 1.校验文件类型
    var fileType = name === null || name === void 0 ? void 0 : name.split('.').pop();
    if (!['xls', 'xlsx'].includes(fileType)) {
      message.error('文件类型有误');
      return;
    }
    console.log(fileObj, 'fileObj');
    setFile(originFileObj);
  };
  // 上传文件
  var uploadFile = function uploadFile() {
    if (loading) return;
    setLoading(true);
    if (!file || (file === null || file === void 0 ? void 0 : file.length) == 0) return;
    var data = new FormData();
    data.append('file', file);
    importOrganization(type, data).then(function (res) {
      if (!res.success) {
        message.error(res.message);
        setLoading(false);
        return;
      }
      setBatchNo(res.response);
    });
  };
  var downloadFailRecord = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return exportResult(batchNo);
          case 2:
            res = _context.sent;
            _context.next = 5;
            return downFile(res);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function downloadFailRecord() {
      return _ref.apply(this, arguments);
    };
  }();
  var getimportOrganizationResult = function getimportOrganizationResult(batchNo) {
    if (percent <= 90) {
      //假的进度条
      setPercent(function (count) {
        return count + 5;
      });
    }
    if (pollingCount.current === 50) {
      // 轮询50次之后 改成2秒一次轮询，这样就1分钟之内不会产生60次请求
      clearInterval(timer.current);
      timer.current = setInterval(function () {
        getimportOrganizationResult(batchNo);
      }, 2000);
    }
    importOrganizationResult(batchNo).then(function (res) {
      console.log(res, 'res');
      pollingCount.current++;
      // status == 0 代表还要继续查
      // eslint-disable-next-line no-unsafe-optional-chaining
      var _res$response = res === null || res === void 0 ? void 0 : res.response,
        status = _res$response.status,
        dataList = _res$response.dataList,
        successCount = _res$response.successCount,
        failCount = _res$response.failCount,
        totalCount = _res$response.totalCount;
      //   processing:0:处理中,
      //  success:1：成功,
      //  partSuccess:2：部分成功
      //  failure:3：失败
      // setPercent(Math.ceil(((failCount + successCount) / totalCount) * 100));
      if (status != 0) {
        if (status == 1) {
          setIsSuccess(true);
          setSuccessCount(successCount);
          changeStatus();
          props.onSuccess && props.onSuccess();
        } else {
          setIsSuccess(false);
          setDataSource(dataList);
          setFailCount(failCount);
          changeStatus();
        }
        if ([1, 2].includes(status)) {
          //上传成功后的回调
          // sucessCb()
        }
        setLoading(false);
        setPercent(0);
        //清除
        clearInterval(timer.current);
      }
    });
  };
  // 轮询上传结果
  var polling = function polling(batchNo) {
    timer.current = setInterval(function () {
      getimportOrganizationResult(batchNo);
    }, 1000);
  };
  //上传完文件后，后端返回的标记，根据标记去轮询查上传进度
  useEffect(function () {
    if (batchNo) {
      clearInterval(timer.current);
      timer.current = null;
      getimportOrganizationResult(batchNo);
      polling(batchNo);
    }
  }, [batchNo]);
  useEffect(function () {
    return function () {
      clearInterval(timer.current);
      setLoading(false);
    };
  }, []);
  useEffect(function () {
    if (!open) {
      init();
    }
  }, [open]);
  var columns = [{
    title: '行数',
    dataIndex: 'row'
  },
  // {
  //   title: '姓名',
  //   dataIndex: 'name',
  // },
  // {
  //   title: '部门',
  //   dataIndex: 'name',
  // },
  // {
  //   title: '手机号',
  //   dataIndex: 'name',
  // },
  {
    title: '错误详情',
    dataIndex: 'msg',
    render: function render(_, record) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#FF4444'
        }
      }, record.msg || '');
    }
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, {
    open: open,
    title: /*#__PURE__*/React.createElement("div", {
      className: "batch-import-modal-title"
    }, title),
    width: 720,
    destroyOnClose: true,
    footer: false,
    maskClosable: false,
    getContainer: document.getElementById('root'),
    onCancel: handleClose,
    className: "batch-import-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-header"
  }, /*#__PURE__*/React.createElement("span", null, "\u8BF7\u4E0B\u8F7D", title, "\u6A21\u7248\uFF0C\u6309\u683C\u5F0F\u4FEE\u6539\u540E\u5BFC\u5165"), /*#__PURE__*/React.createElement("div", {
    onClick: downloadTemp
  }, "\u4E0B\u8F7D\u6A21\u677F")), !file ? /*#__PURE__*/React.createElement("div", {
    className: "batch-import-upload"
  }, /*#__PURE__*/React.createElement(KhtIcons, {
    style: {
      fontSize: 54,
      marginBottom: '21px'
    },
    type: "icon-shangchuan"
  }), /*#__PURE__*/React.createElement("span", {
    className: "upload-span"
  }, "\u4E0A\u4F20\u586B\u597D\u7684\u6587\u4EF6"), /*#__PURE__*/React.createElement("span", {
    className: "upload-span"
  }, "\u4EC5\u652F\u6301xls\u3001xlsx\u683C\u5F0F\u6587\u4EF6"), /*#__PURE__*/React.createElement(Upload, {
    customRequest: function customRequest() {},
    showUploadList: false,
    accept: ".xls,.xlsx",
    onChange: function onChange(fileObj) {
      changeFile(fileObj);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "upload-btn"
  }, "\u4E0A\u4F20\u6587\u4EF6"))) : /*#__PURE__*/React.createElement("div", {
    className: "batch-import-uploading"
  }, /*#__PURE__*/React.createElement(KhtIcons, {
    style: {
      fontSize: 54,
      marginBottom: '21px'
    },
    type: "icon-excel"
  }), /*#__PURE__*/React.createElement("span", {
    className: "upload-span"
  }, (file === null || file === void 0 ? void 0 : file.name) || ''), /*#__PURE__*/React.createElement(Upload, {
    customRequest: function customRequest() {},
    showUploadList: false,
    accept: ".xls,.xlsx",
    onChange: function onChange(fileObj) {
      changeFile(fileObj);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "upload-btn"
  }, "\u91CD\u65B0\u4E0A\u4F20")), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    style: {
      marginTop: '10px'
    },
    showInfo: false,
    percent: percent
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "upload-btn-import",
    onClick: uploadFile
  }, loading ? '导入中' : '导入')))), /*#__PURE__*/React.createElement(Modal, {
    open: visible,
    title: false,
    width: 720,
    destroyOnClose: true,
    footer: false,
    maskClosable: false,
    getContainer: document.getElementById('root'),
    onCancel: changeStatus,
    className: "batch-import-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-info"
  }, isSuccess ? /*#__PURE__*/React.createElement(KhtIcons, {
    style: {
      color: '#52C41A',
      fontSize: '60px'
    },
    type: "icon-chenggong"
  }) : /*#__PURE__*/React.createElement(KhtIcons, {
    style: {
      color: '#FF9F00',
      fontSize: '60px'
    },
    type: "icon-shibai"
  }), /*#__PURE__*/React.createElement("span", {
    className: "batch-import-record-hit"
  }, isSuccess ? '导入成功' : '导入失败'), isSuccess ? /*#__PURE__*/React.createElement("span", {
    className: "batch-import-record-mess"
  }, "\u5BFC\u5165\u6210\u529F ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FF4444'
    }
  }, successCount), "\u6761 \u8BB0\u5F55") : /*#__PURE__*/React.createElement("span", {
    className: "batch-import-record-mess"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FF4444'
    }
  }, failCount), "\u6761 \u9519\u8BEF\u8BB0\u5F55\uFF0C\u8BF7\u4FEE\u6539\u540E\u91CD\u65B0\u4E0A\u4F20"), !isSuccess ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Upload, {
    customRequest: function customRequest() {},
    showUploadList: false,
    accept: ".xls,.xlsx",
    onChange: function onChange(fileObj) {
      changeFile(fileObj);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-btn"
  }, "\u518D\u6B21\u4E0A\u4F20")), /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-dbtn",
    onClick: downloadFailRecord
  }, "\u4E0B\u8F7D\u5931\u8D25\u8BB0\u5F55")) : null), !isSuccess ? /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-table-title"
  }, /*#__PURE__*/React.createElement("div", null, "\u5BFC\u5165\u5931\u8D25\u8BB0\u5F55"), dataSource.length > 2 ? /*#__PURE__*/React.createElement("span", {
    onClick: changeStatusRecord
  }, "\u67E5\u770B\u66F4\u591A") : null), /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    size: 'small',
    dataSource: dataSource.slice(0, 2),
    pagination: false,
    locale: {
      emptyText: '无数据'
    }
  })) : null)), /*#__PURE__*/React.createElement(Modal, {
    open: recordVisible,
    title: /*#__PURE__*/React.createElement("div", {
      className: "batch-import-modal-title"
    }, "\u5BFC\u5165\u5931\u8D25\u8BB0\u5F55"),
    width: 720,
    destroyOnClose: true,
    footer: false,
    maskClosable: false,
    getContainer: document.getElementById('root'),
    onCancel: changeStatusRecord,
    className: "batch-import-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-container-table"
  }, /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    size: 'small',
    dataSource: dataSource,
    scroll: {
      y: 410
    },
    pagination: {
      total: failCount,
      pageSizeOptions: [10, 20, 50, 100],
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: function showTotal(total) {
        return "\u5171 ".concat(total, " \u6761");
      }
    },
    locale: {
      emptyText: '无数据'
    }
  }))))));
}