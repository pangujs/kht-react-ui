import { publicApi } from '../../request';
//获取预测标签
export var getSpecialTagList = function getSpecialTagList(data) {
  return publicApi.post({
    url: "/tag/admin/components/tagSpecialJg/list",
    data: data
  });
};