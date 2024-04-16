import Request from '../../../http/index';
//导入模板下载
export var getImportTemplate = function getImportTemplate(type) {
  return Request.get("/api/v1/estate/importTemplate/get?type=".concat(type));
};
//导入文件
export var importOrganization = function importOrganization(type, data) {
  return Request.post("/api/v1/estate/importData/importOrganization?type=".concat(type), data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-cache'
    }
  });
};
//查询上传结果
export var importOrganizationResult = function importOrganizationResult(data) {
  return Request.get("/api/v1/estate/importData/importOrganizationResult?batchNo=".concat(data));
};
//下载
export var exportResult = function exportResult(data) {
  return Request.get("/api/v1/estate/importData/exportResult?batchNo=".concat(data), {
    responseType: 'blob'
  });
};
//导出
export var getExport = function getExport(url, data) {
  return Request.post(url, data);
};
//获取离线导出列表
export var getExportList = function getExportList(data) {
  var currentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return Request.post("/api/v1/estate/exportLog/getList?currentPage=".concat(currentPage, "&pageSize=").concat(pageSize), data);
};
//查询单条记录
export var getExportInfo = function getExportInfo(id) {
  return Request.get("/api/v1/estate/exportLog/get?id=".concat(id));
};