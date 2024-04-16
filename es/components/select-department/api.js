import { user } from '../../request';
//中台端======获取项目数据
export var getDepartmentData = function getDepartmentData(params) {
  return user.get({
    url: "/components/dept/list",
    params: params
  });
};