import { user } from '../../request';
//中台端======获取员工数据
export var getEmployeeData = function getEmployeeData(params, data) {
  return user.post({
    url: "/components/employee/getAllEmployeePageListByDepartmentCode",
    params: params,
    data: data
  });
};
export var getAllEmployeeData = function getAllEmployeeData(params, data) {
  return user.post({
    url: "/components/employee/getAllEmployeeListByDepartmentCode",
    params: params,
    data: data
  });
};