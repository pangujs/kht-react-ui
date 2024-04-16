import Request from '../../../http/index';
// 地址省接口
export var getAdministrativeProvince = function getAdministrativeProvince(data) {
  return Request.get("/api/v1/basic/administrativeArea/getAdministrativeProvince?".concat(data));
};
// 地址接口
export var getAdministrativeCity = function getAdministrativeCity(data) {
  return Request.get("/api/v1/basic/administrativeArea/getAdministrativeCity?".concat(data));
};
// 地址接口
export var getAdministrativeDistrict = function getAdministrativeDistrict(data) {
  return Request.get("/api/v1/basic/administrativeArea/getAdministrativeDistrict?".concat(data));
};