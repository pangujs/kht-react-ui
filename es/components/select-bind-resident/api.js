import { publicApi } from '../../request';
// 查询新增绑定住户列表
export var getAddBindList = function getAddBindList(data, params) {
  return publicApi.post({
    url: '/estate/components/residentManager/list',
    data: data,
    params: params
  });
};
//查询新增绑定车位住户列表
export var getAddBindCarPlaceList = function getAddBindCarPlaceList(data, params) {
  return publicApi.post({
    url: '/estate/components/carPlaceResident/getList',
    data: data,
    params: params
  });
};
// 住户绑定资产
export var bindCustomer = function bindCustomer(data) {
  return publicApi.post({
    url: '/customer/customer/bind',
    data: data
  });
};
// 客户 解绑 资产
export var unBindCustomer = function unBindCustomer(data) {
  return publicApi.post({
    url: '/customer/customer/unBind',
    data: data
  });
};
//查询已绑定住户
export var getBindResidentList = function getBindResidentList(data, params) {
  return publicApi.post({
    url: '/customer/components/customer/getCustomerBindResidentByCustomerId',
    data: data,
    params: params
  });
};
//客户绑定车位
export var bindCustomerCarPlace = function bindCustomerCarPlace(data) {
  return publicApi.post({
    url: '/customer/components/customer/bindCarPlace',
    data: data
  });
};
//客户解绑车位
export var unBindCustomerCarPlace = function unBindCustomerCarPlace(data) {
  return publicApi.post({
    url: '/customer/components/customer/unBindCarPlace',
    data: data
  });
};