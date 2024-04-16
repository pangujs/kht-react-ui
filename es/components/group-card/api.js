import { publicApi } from '../../request';
// 群信息
export var groupGet = function groupGet(params) {
  return publicApi.post({
    url: '/opinion-manage/admin/chatInfo/group/get',
    data: params
  });
};
// 群成员信息
export var getMemberCustomer = function getMemberCustomer(params) {
  return publicApi.post({
    url: '/opinion-manage/admin/chatInfo/group/getMemberCustomer',
    data: params
  });
};