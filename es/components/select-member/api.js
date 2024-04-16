import { publicApi, user } from '../../request';
//中台端======获取部门
export var getOrganization = function getOrganization(data) {
  return publicApi.post({
    url: "/estate/residentManager/getLeftTree",
    data: data
  });
};
//中台端======获取成员
export var getMemberPageList = function getMemberPageList(params) {
  return publicApi.get({
    url: "/user/employee/getAllEmployeePageListByDepartmentCode",
    params: params
  });
};
//选择成员 - 分页
export var getMemberCompList = function getMemberCompList(params, data) {
  return user.post({
    url: '/components/employee/getAllEmployeePageListByDepartmentCode',
    params: params,
    data: data
  });
};
//选择成员 - 不分页
export var getAllMemberCompList = function getAllMemberCompList(data) {
  return user.post({
    url: '/components/employee/getAllEmployeeListByDepartmentCode',
    data: data
  });
};