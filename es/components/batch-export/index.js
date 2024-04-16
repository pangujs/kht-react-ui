import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Progress, message, Modal, Table, Upload, ConfigProvider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import KhtIcons from '../kht-icons';
import { useModalVisible } from '../../hooks';
import zhCN from 'antd/es/locale/zh_CN';
import { getExportInfo, importOrganization, importOrganizationResult, exportResult, getExport, getExportList } from './api/index';
import { ProTable } from '@ant-design/pro-components';
import { downFile } from '../../hooks/utils';
var statusObj = {
  processing: '导出中',
  success: '导出成功',
  fail: '导出失败'
};
export default function BatchImport(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    title = props.title,
    onClose = props.onClose,
    type = props.type,
    url = props.url,
    _props$exportParams = props.exportParams,
    exportParams = _props$exportParams === void 0 ? {} : _props$exportParams,
    typeText = props.typeText,
    _props$isNeedEdit = props.isNeedEdit,
    isNeedEdit = _props$isNeedEdit === void 0 ? false : _props$isNeedEdit,
    uploadType = props.uploadType;
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
  // 导出部分
  // 设置状态
  var _useState17 = useState(0),
    _useState18 = _slicedToArray(_useState17, 2),
    exportStatus = _useState18[0],
    setExportStatus = _useState18[1];
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    exportUrl = _useState20[0],
    setExportUrl = _useState20[1];
  var _useState21 = useState(''),
    _useState22 = _slicedToArray(_useState21, 2),
    exportId = _useState22[0],
    setExportId = _useState22[1];
  var _useState23 = useState(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalCount = _useState24[0],
    setTotalCount = _useState24[1];
  var _useState25 = useState([]),
    _useState26 = _slicedToArray(_useState25, 2),
    dataSourceExport = _useState26[0],
    setDataSourceExport = _useState26[1];
  var timerId = useRef(null);
  var _useState27 = useState(0),
    _useState28 = _slicedToArray(_useState27, 2),
    exportPercent = _useState28[0],
    setExportPercent = _useState28[1];
  var _useModalVisible3 = useModalVisible(),
    exportVisible = _useModalVisible3.visible,
    changeStatusExportRecord = _useModalVisible3.changeStatus;
  var actionRef = useRef();
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
    //-------------------
    setExportStatus(0);
    setExportUrl('');
    setExportId('');
    setTotalCount(0);
    setDataSourceExport([]);
    setExportPercent(0);
    pollingCount.current = 0;
    if (timer.current) {
      clearInterval(timer.current);
      clearInterval(timerId.current);
      timer.current = null;
      timerId.current = null;
    }
  };
  //关闭弹窗
  var handleClose = function handleClose() {
    onClose();
  };
  //点击导出
  var handleExport = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setExportStatus(1);
            getExport(url, exportParams).then(function (res) {
              if (res.success) {
                setExportId(res.response);
              } else {
                message.info(res.message);
                setExportStatus(3);
              }
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleExport() {
      return _ref.apply(this, arguments);
    };
  }();
  // 查询单条数据
  var getExportInfostatus = function getExportInfostatus(id) {
    if (exportPercent <= 90) {
      //假的进度条
      setExportPercent(function (count) {
        return count + 8;
      });
    }
    getExportInfo(id).then(function (res) {
      if (res.success) {
        var _res$response = res.response,
          status = _res$response.status,
          _url = _res$response.url;
        if (status == 'processing') {
          setExportStatus(1);
        } else if (status == 'success') {
          setExportStatus(2);
          setExportUrl(_url);
          clearInterval(timerId.current);
          timerId.current = null;
          getExportListInfo();
        } else if (status == 'fail') {
          setExportStatus(3);
          clearInterval(timerId.current);
          timerId.current = null;
          getExportListInfo();
        }
      }
    });
  };
  // 获取列表
  var getExportListInfo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _res$response4, _res$response5;
      var currentPage,
        pageSize,
        res,
        _res$response2,
        _res$response3,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
            pageSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 3;
            _context2.next = 4;
            return getExportList({
              exportType: type,
              isMine: 0
            }, currentPage, pageSize);
          case 4:
            res = _context2.sent;
            if (res.success && pageSize == 3) {
              //初始化
              setDataSourceExport(((_res$response2 = res.response) === null || _res$response2 === void 0 ? void 0 : _res$response2.dataList) || []);
              setTotalCount(((_res$response3 = res.response) === null || _res$response3 === void 0 ? void 0 : _res$response3.totalCount) || 0);
            }
            return _context2.abrupt("return", {
              data: ((_res$response4 = res.response) === null || _res$response4 === void 0 ? void 0 : _res$response4.dataList) || [],
              total: ((_res$response5 = res.response) === null || _res$response5 === void 0 ? void 0 : _res$response5.totalCount) || 0,
              success: true
            });
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getExportListInfo() {
      return _ref2.apply(this, arguments);
    };
  }();
  //   下载模板
  var download = function download() {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = exportUrl;
    a.click();
    document.body.removeChild(a);
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
    importOrganization(uploadType || type, data).then(function (res) {
      if (!res.success) {
        message.error(res.message);
        setLoading(false);
        return;
      }
      setBatchNo(res.response);
    });
  };
  // 下载错误日志
  var downloadFailRecord = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return exportResult(batchNo);
          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return downFile(res);
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function downloadFailRecord() {
      return _ref3.apply(this, arguments);
    };
  }();
  // 查询导入情况
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
      var _res$response6 = res === null || res === void 0 ? void 0 : res.response,
        status = _res$response6.status,
        dataList = _res$response6.dataList,
        successCount = _res$response6.successCount,
        failCount = _res$response6.failCount,
        totalCount = _res$response6.totalCount;
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
    }, 800);
  };
  // 轮询上传结果
  var pollingId = function pollingId(id) {
    timerId.current = setInterval(function () {
      getExportInfostatus(id);
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
  //上传完文件后，后端返回的标记，根据标记去轮询查上传进度
  useEffect(function () {
    if (exportId) {
      clearInterval(timerId.current);
      timerId.current = null;
      getExportInfostatus(exportId);
      pollingId(exportId);
    }
  }, [exportId]);
  useEffect(function () {
    if (open) {
      getExportListInfo();
    } else {
      init();
    }
  }, [open]);
  useEffect(function () {
    return function () {
      clearInterval(timer.current);
      clearInterval(timerId.current);
      setLoading(false);
    };
  }, []);
  var exportStatusContent = function exportStatusContent() {
    switch (exportStatus) {
      case 1:
        return /*#__PURE__*/React.createElement("div", {
          className: "pending"
        }, /*#__PURE__*/React.createElement("span", null, "\u5BFC\u51FA\u4E2D"), /*#__PURE__*/React.createElement(Progress, {
          style: {
            flex: 1
          },
          showInfo: false,
          percent: exportPercent
        }));
      case 2:
        return /*#__PURE__*/React.createElement("div", {
          className: "success"
        }, /*#__PURE__*/React.createElement("div", {
          className: "icon-name"
        }, /*#__PURE__*/React.createElement(KhtIcons, {
          style: {
            fontSize: 15,
            color: '#22AC38'
          },
          type: "icon-chenggong"
        }), /*#__PURE__*/React.createElement("span", null, "\u5BFC\u51FA\u6210\u529F")), /*#__PURE__*/React.createElement("div", {
          className: "download",
          onClick: download
        }, "\u4E0B\u8F7D"));
      case 3:
        return /*#__PURE__*/React.createElement("div", {
          className: "fail"
        }, /*#__PURE__*/React.createElement("div", {
          className: "icon-name"
        }, /*#__PURE__*/React.createElement(KhtIcons, {
          style: {
            fontSize: 15,
            color: '#FF9F00'
          },
          type: "icon-shibai"
        }), /*#__PURE__*/React.createElement("span", null, "\u5BFC\u51FA\u5931\u8D25")));
      default:
        break;
    }
  };
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
  var columnsExport = [{
    title: '导出时间',
    dataIndex: 'updateDate',
    key: 'updateDate',
    width: 180,
    ellipsis: true
  }, {
    title: '导出类型',
    dataIndex: 'exportType',
    key: 'exportType',
    render: function render() {
      return /*#__PURE__*/React.createElement("span", null, typeText);
    }
    // valueEnum: {
    //   organization: { text: '机构', key: 'organization' },
    //   community: { text: '项目', key: 'community' },
    //   phase: { text: '分期', key: 'phase' },
    //   building: { text: '楼栋', key: 'building' },
    //   unit: { text: '单元', key: 'unit' },
    //   floor: { text: '楼层', key: 'floor' },
    //   house: { text: '房间', key: 'house' },
    //   space: { text: '空间', key: 'space' },
    //   residentList: { text: '住宅用户', key: 'residentList' }
    // }
  }, {
    title: '导出人',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '导出状态',
    dataIndex: 'status',
    key: 'status',
    render: function render(val, record) {
      var _ref4 = record || {},
        status = _ref4.status;
      var text = status in statusObj ? statusObj[status] : status;
      var color = 'yellow';
      if (status == 'success') {
        color = 'green';
      } else if (status == 'fail') {
        color = 'red';
      } else {
        color = 'yellow';
      }
      return /*#__PURE__*/React.createElement("span", {
        className: color
      }, text);
    }
  }, {
    title: '操作',
    dataIndex: 'edit',
    key: 'edit',
    width: 100,
    render: function render(val, record) {
      var status = record.status,
        url = record.url;
      return status == 'success' ? /*#__PURE__*/React.createElement("a", {
        href: url
      }, "\u4E0B\u8F7D") : null;
    }
  }];
  var uploadEditFile = function uploadEditFile() {
    if (!isNeedEdit) {
      return /*#__PURE__*/React.createElement("div", {
        className: "batch-import-upload-blank"
      });
    }
    if (!file) {
      return /*#__PURE__*/React.createElement("div", {
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
      }, "\u4E0A\u4F20\u6587\u4EF6")));
    } else {
      return /*#__PURE__*/React.createElement("div", {
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
      }, loading ? '导入中' : '导入'));
    }
  };
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
  }, /*#__PURE__*/React.createElement("span", null, "\u5BFC\u51FA\u9009\u4E2D\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
    onClick: handleExport
  }, exportStatus == 1 ? '导出中' : exportStatus == 2 || exportStatus == 3 ? '再次导出' : '导出')), exportStatus != 0 ? /*#__PURE__*/React.createElement("div", {
    className: "batch-import-header-status"
  }, exportStatusContent()) : null, uploadEditFile(), dataSourceExport.length ? /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-table-title"
  }, /*#__PURE__*/React.createElement("div", null, "\u79BB\u7EBF\u5BFC\u51FA\u8BB0\u5F55"), totalCount > 2 ? /*#__PURE__*/React.createElement("span", {
    onClick: changeStatusExportRecord
  }, "\u67E5\u770B\u66F4\u591A") : null), /*#__PURE__*/React.createElement(Table, {
    columns: columnsExport,
    size: 'small',
    dataSource: dataSourceExport,
    pagination: false,
    locale: {
      emptyText: '无数据'
    }
  })) : null)), /*#__PURE__*/React.createElement(Modal, {
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
    scroll: {
      y: 410
    },
    dataSource: dataSource,
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
  }))))), /*#__PURE__*/React.createElement(Modal, {
    open: exportVisible,
    title: /*#__PURE__*/React.createElement("div", {
      className: "batch-import-modal-title"
    }, "\u79BB\u7EBF\u5BFC\u51FA\u8BB0\u5F55"),
    width: 720,
    destroyOnClose: true,
    footer: false,
    maskClosable: false,
    getContainer: document.getElementById('root'),
    onCancel: changeStatusExportRecord,
    className: "batch-import-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "batch-import-record-container-table"
  }, /*#__PURE__*/React.createElement(ConfigProvider, {
    locale: zhCN
  }, /*#__PURE__*/React.createElement(ProTable, {
    columns: columnsExport,
    actionRef: actionRef,
    search: false,
    options: false,
    rowKey: "id",
    scroll: {
      y: 410
    },
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      defaultPageSize: 10,
      defaultCurrent: 1,
      pageSizeOptions: [10, 20, 50, 100],
      showTotal: function showTotal(total) {
        return "\u5171 ".concat(total, " \u6761");
      }
    },
    request: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(params) {
        var currentPage, _pageSize;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              currentPage = params.current;
              _pageSize = params.pageSize;
              return _context4.abrupt("return", getExportListInfo(currentPage, _pageSize));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }))))));
}