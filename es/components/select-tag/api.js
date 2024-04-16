import { publicApi } from '../../request';
// 根据类型获取字典信息
export var dictionaryGetByType = function dictionaryGetByType() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return publicApi.get({
    url: '/basic/dictionary/getByType',
    params: data
  });
};
// 查询客户标签列表
export var tagCustomerList = function tagCustomerList(data) {
  return publicApi.post({
    url: '/tag/tag/customer/list',
    data: data
  });
};