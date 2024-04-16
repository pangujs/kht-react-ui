import { user, customer, publicApi } from '../../request';
// 人员卡片信息
export var getAccountInfoById = function getAccountInfoById(params) {
  return user.get({
    url: '/common/user/cardInfo',
    params: params
  });
};
//查看群
export var getGroupList = function getGroupList(params) {
  return publicApi.get({
    url: '/opinion-manage/opinion/chat/group/findChatGroupInfo',
    params: params
  });
};
//获取客户添加人
export var getCustomerOwnerList = function getCustomerOwnerList(data, params) {
  return customer.post({
    url: "/components/customer/getCustomerWxworkFollowRecordByCustomerId",
    data: data,
    params: params
  });
};
//查询客户资料根据ID - 人物头像处(新)
export var getNewCustomerWxWorkDetailsById = function getNewCustomerWxWorkDetailsById(id) {
  return customer.get({
    url: '/components/customer/getCustomerWxWorkDetailsById',
    params: {
      customerId: id
    }
  });
};
export var getCustomerRemarkHistoryListById = function getCustomerRemarkHistoryListById(id) {
  return customer.get({
    url: '/components/customer/getCustomerRemarkHistoryListById',
    params: {
      customerId: id
    }
  });
};
export var getCustomerDescriptionHistoryListById = function getCustomerDescriptionHistoryListById(id) {
  return customer.get({
    url: '/components/customer/getCustomerDescriptionHistoryListById',
    params: {
      customerId: id
    }
  });
};
// 客户绑定资产详情
export var getCustomerDetailById = function getCustomerDetailById(id) {
  return customer.get({
    url: '/customer/getCustomerDetailById',
    params: {
      customerId: id
    }
  });
};
// 客户绑定历史电话
export var getCustomerHistoryPhone = function getCustomerHistoryPhone(customerId) {
  return customer.get({
    url: '/components/customer/getCustomerTelephoneHistoryListById',
    params: {
      customerId: customerId
    }
  });
};