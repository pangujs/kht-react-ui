import Request from '../../http';
import { objToQuery } from '../../utils';
//中台端======获取机构列表
export var getOrganization = function getOrganization(params, data) {
  return Request.post("/api/v1/estate/community/getLeftTree".concat(objToQuery(params)), data);
};
//超管端====获取机构列表
export var getAdminOrganizationList = function getAdminOrganizationList(params, data) {
  return Request.post("/api/v1/boss/admin/estate/community/getLeftTree".concat(objToQuery(params)), data);
};