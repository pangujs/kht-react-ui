import Request from '../../http';
import { objToQuery } from '../../utils';
//中台端======获取项目数据
export var getProjectTableData = function getProjectTableData(params, data) {
  return Request.post("/api/v1/estate/community/getList".concat(objToQuery(params)), data);
};
//中台端======获取部门
export var getOrganization = function getOrganization(data) {
  return Request.post("/api/v1/estate/residentManager/getLeftTree", data);
};
//超管端=====获取项目数据
export var getAdminProjectTableData = function getAdminProjectTableData(params, data) {
  return Request.post("/api/v1/boss/admin/company/community/getList".concat(objToQuery(params)), data);
};
//超管端====获取部门
export var getAdminOrganization = function getAdminOrganization(data) {
  return Request.post("/api/v1/boss/admin/company/department/getLeftTree", data);
};
//省市区
export var getAdministrativeProvince = function getAdministrativeProvince(data) {
  return Request.get("/api/v1/basic/administrativeArea/getAdministrativeProvince", data);
};
//省市区
export var getAdministrativeCity = function getAdministrativeCity(params) {
  return Request.get("/api/v1/basic/administrativeArea/getAdministrativeCity".concat(objToQuery(params)));
};
//省市区
export var getAdministrativeDistrict = function getAdministrativeDistrict(params) {
  return Request.get("/api/v1/basic/administrativeArea/getAdministrativeDistrict".concat(objToQuery(params)));
};