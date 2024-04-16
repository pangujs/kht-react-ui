import { Request } from '../../../http';
import { objToQuery } from '../../../utils';
import { Local } from '../../../utils/storage';
//自定义请求头传参
var residentHouse = new Request({
  headers: {
    'h-company-code': Local.get('crop-id')
  }
});
// 中台 - 住户/业主/家属/租户家属
export var getResidentHousePageTypeList = function getResidentHousePageTypeList(data, query) {
  return residentHouse.post('/api/v1/estate/residentHouse/pageTypeList' + objToQuery(query), data);
};
// 获取最近的项目
export var getRecentProject = function getRecentProject() {
  return residentHouse.get('/api/v1/estate/community/getRecentData');
};