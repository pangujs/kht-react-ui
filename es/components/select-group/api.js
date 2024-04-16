import { publicApi } from '../../request';
// 群分类
export var getGroupClassifyList = function getGroupClassifyList(data) {
  return publicApi.post({
    url: '/opinion-manage/opinion/classify/group/findPage',
    data: data
  });
};
//群列表
export var getGroupList = function getGroupList(data) {
  return publicApi.post({
    url: '/opinion-manage/opinion/chat/group/findPageList',
    data: data
  });
};