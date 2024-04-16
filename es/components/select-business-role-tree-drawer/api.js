import { user } from '../../request';
export var getLeftRoleList = function getLeftRoleList(params) {
  return user.post({
    url: "/role/getLeftRoleList",
    params: params
  });
};
export var getLeftRoleByRoleType = function getLeftRoleByRoleType(params) {
  return user.get({
    url: "/role/getLeftRoleByRoleType",
    params: params
  });
};
export var getSearchLeftRoleList = function getSearchLeftRoleList(params) {
  return user.post({
    url: "/role/getLeftRoleListByName",
    params: params
  });
};