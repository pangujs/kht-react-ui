import { publicApi } from '../../request';
// 分页查询聚合标签组分类
export var tagCategoryPage = function tagCategoryPage(data) {
  return publicApi.post({
    url: '/tag/tag/category/page',
    data: data
  });
};