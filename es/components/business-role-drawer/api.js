import Request from '../../http';
/** 角色-大类 */
export var getLeftRoleByRoleType = function getLeftRoleByRoleType(data) {
  // return Request.get('/api/v1/user/role/getLeftRoleByRoleType', {data});
  // let query = objToQuery(data)
  return Request.get('/api/v1/user/businessRole/getAllRoleClassificationList', {
    data: data
  });
};
/** 角色-小类 */
export var getLeftRoleList = function getLeftRoleList(data) {
  // let query = objToQuery(data)
  return Request.get('/api/v1/user/businessRole/getRoleList', {
    data: data
  });
};