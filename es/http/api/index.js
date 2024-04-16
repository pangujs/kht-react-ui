import { objToQuery } from '../../utils';
import Request from '../index';
/*********** 资产相关接口 ************** */
// 中台 - 获取机构或资产
export var getInstitutionalAssetsTree = function getInstitutionalAssetsTree(data) {
  return Request.post('/api/v1/estate/residentManager/getLeftTree', data);
};
// 中台 - 获取房号下的业户
export var getInstitutionalAssetsExtResidentData = function getInstitutionalAssetsExtResidentData(data) {
  return Request.post('/api/v1/estate/residentManager/getLeftTreeExtResident', data);
};
// 超管 - 获取机构或资产
export var getAdminInstitutionalAssetsTree = function getAdminInstitutionalAssetsTree(data) {
  return Request.post('/api/v1/boss/admin/tagWxWorkSettingCompany/getLeftTree', data);
};
// 超管 - 获取房号下的业户
export var getAdminInstitutionalAssetsExtResidentData = function getAdminInstitutionalAssetsExtResidentData(data) {
  return Request.post('/api/v1/boss/admin/tagWxWorkSettingCompany/getLeftTreeExtResident', data);
};
// 中台 - 获取机构或资产
export var getInstitutionalAssetsFullName = function getInstitutionalAssetsFullName(data) {
  return Request.get('/api/v1/estate/common/getFullName', {
    data: data
  });
};
/*********** 组织架构相关接口 ************** */
/** 中台 - 获取 部门 */
export var getDeptUserTree = function getDeptUserTree(data) {
  return Request.get('/api/v1/user/dept/list', {
    data: data
  });
};
/** 中台 获取 部门下的人员 ( 已过滤 )*/
export var getDeptUserData = function getDeptUserData(data) {
  return Request.get('/api/v1/user/employee/getEmployeeListByDeptCode', {
    data: data
  });
};
// /** 中台 - 获取 部门下的人员( 未过滤 ) */
// export const getDeptFilterUserData = (data: Record<string, unknown>) => {
//   return Request.get('/api/v1/user/employee/getEmployeeListByDeptCodeFilterHasAccount', { data });
// };
/** 超管 - 获取 部门 */
export var getAdminDeptUserTree = function getAdminDeptUserTree(data) {
  return Request.get('/api/v1/boss/admin/tagWxWorkSettingCompany/dept/list', {
    data: data
  });
};
/** 超管 - 获取 部门下的人员( 未过滤 ) */
export var getAdminDeptFilterUserData = function getAdminDeptFilterUserData(data) {
  return Request.get('/api/v1/boss/admin/tagWxWorkSettingCompany/getEmployeeListByDeptCode', {
    data: data
  });
};
/** 超管 - 获取 部门 boss无公司编号*/
export var getAdminDeptUserTreeBoss = function getAdminDeptUserTreeBoss(data) {
  return Request.get('/api/v1/boss/admin/dept/list', {
    data: data
  });
};
/** 超管 - 获取 部门下的人员( 未过滤 ) boss无公司编号*/
export var getAdminDeptFilterUserDataBoss = function getAdminDeptFilterUserDataBoss(data) {
  return Request.get('/api/v1/boss/admin/employee/getEmployeeListByDeptCode', {
    data: data
  });
};
/** 中台 - 模糊搜索 部门 */
export var getDeptUserByFuzzyName = function getDeptUserByFuzzyName(data) {
  return Request.get('/api/v1/user/dept/listByFuzzyName', {
    data: data
  });
};
/** 中台 - 模糊搜索 人员 */
export var getDeptUserEmployeeListByFuzzyName = function getDeptUserEmployeeListByFuzzyName(data) {
  return Request.get('/api/v1/user/employee/getEmployeeListByFuzzyName', {
    data: data
  });
};
/** 超管 - 模糊搜索 部门 */
export var getAdminDeptUserByFuzzyName = function getAdminDeptUserByFuzzyName(data) {
  return Request.get('/api/v1/boss/admin/tagWxWorkSettingCompany/dept/listByFuzzyName', {
    data: data
  });
};
/** 超管 - 模糊搜索 人员 */
export var getAdminDeptUserEmployeeListByFuzzyName = function getAdminDeptUserEmployeeListByFuzzyName(data) {
  return Request.get('/api/v1/boss/admin/tagWxWorkSettingCompany/getEmployeeListByFuzzyName', {
    data: data
  });
};
/** 超管 - 模糊搜索 部门 boss无公司编号*/
export var getAdminDeptUserByFuzzyNameBoss = function getAdminDeptUserByFuzzyNameBoss(data) {
  return Request.get('/api/v1/boss/admin/dept/listByFuzzyName', {
    data: data
  });
};
/** 超管 - 模糊搜索 人员 boss无公司编号*/
export var getAdminDeptUserEmployeeListByFuzzyNameBoss = function getAdminDeptUserEmployeeListByFuzzyNameBoss(data) {
  return Request.get('/api/v1/boss/admin/employee/getEmployeeListByFuzzyName', {
    data: data
  });
};
/*********** 角色相关接口 ************** */
/** 角色-大类 */
export var getLeftRoleByRoleType = function getLeftRoleByRoleType(data) {
  // return Request.get('/api/v1/user/role/getLeftRoleByRoleType', {data});
  // let query = objToQuery(data)
  return Request.get('/api/v1/user/businessRole/getAllRoleClassificationList', {
    data: data
  });
};
/** 角色-小类 */
export var getLeftRoleList = function getLeftRoleList(data) {
  // let query = objToQuery(data)
  return Request.get('/api/v1/user/businessRole/getRoleList', {
    data: data
  });
};
/**************************  选择客户相关接口 *********************** */
/** 获取客户列表 */
export var getCustomerWxWorkList = function getCustomerWxWorkList(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/customer/customer/getCustomerWxWorkList' + query, data);
};
/** 全选时，获取所有的客户id */
export var getCustomerWxWorkIdList = function getCustomerWxWorkIdList(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/customer/customer/getCustomerWxWorkIdList' + query, data);
};
/** 根据客户 id 取已打标签 */
export var getCustomerTagsListForId = function getCustomerTagsListForId(data) {
  return Request.post('/api/v1/tag/admin/tag/user/page', data);
};
/** 获取标签数据 */
export var getCustomerTagsList = function getCustomerTagsList(data) {
  return Request.post('/api/v1/tag/tag/user/findTagChannelTree', data);
};
/**************************  选择群相关接口 *********************** */
/** 获取客户列表 */
export var getGroupListApi = function getGroupListApi(data) {
  return Request.post('/api/v1/opinion-manage/opinion/chat/group/findGroupInfoPage', data);
};
export var getGroupAllIdsApi = function getGroupAllIdsApi(data) {
  return Request.post('/api/v1/opinion-manage/opinion/chat/group/findGroupInfoIds', data);
};
export var getGroupTagTreeApi = function getGroupTagTreeApi(data) {
  return Request.post('/api/v1/opinion-manage/chat/group/tag/findGroupTagList', data);
};
/** 全选时，获取所有的客户id */
export var getGroupIdListApi = function getGroupIdListApi(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/customer/customer/getCustomerWxWorkIdList' + query, data);
};
/**************************  业主列表 *********************** */
export var getresidentManager = function getresidentManager(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/estate/residentManager/list' + query, data);
};
// 老版本 企业住户接口- 后续新增了统计数据,后续基本不会用这个接口去选择企业住户
export var getCompanyUserList = function getCompanyUserList(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/estate/residentManager/listCompany' + query, data);
};
// 企业住户接口 新版本-区分了个人和企业,去除了统计数据
export var getCompanyUserListV2 = function getCompanyUserListV2(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/estate/residentManager/listCompanySearch' + query, data);
};
/** 自定义接口地址*/
export var getCustomerUrlData = function getCustomerUrlData(url, data) {
  return Request.post(url, data);
};
// 企业住户详情
export var residentManagerGet = function residentManagerGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.get('/api/v1/estate/residentManager/getResidenDetailById', {
    data: data
  });
};
// 业主详情接口
export var residentProprietorGet = function residentProprietorGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentProprietor/get', data);
};
// 家属详情接口
export var residentFamilyGet = function residentFamilyGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentFamily/get', data);
};
// 租户详情接口
export var residentTenantGet = function residentTenantGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentTenant/get', data);
};
// 租户家属详情接口
export var residentTenantFamilyGet = function residentTenantFamilyGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentTenantFamily/get', data);
};
// 车位业主详情接口
export var residentFamily1Get = function residentFamily1Get() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentFamily/get', data);
};
// 产权人详情接口
export var houseOwnershipGet = function houseOwnershipGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/houseOwnership/get', data);
};
// 承租人详情接口
export var residentFamily3Get = function residentFamily3Get() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentFamily/get', data);
};
// 保姆详情接口
export var residentFamily4Get = function residentFamily4Get() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentFamily/get', data);
};
// 家庭详情接口
export var familyGet = function familyGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/family/getByResidentHouseId', data);
};
// 房间详情接口
export var houseGet = function houseGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.get('/api/v1/estate/house/getById', {
    data: data
  });
};
// 空间详情接口
export var spaceGet = function spaceGet(_ref) {
  var id = _ref.id;
  return Request.get("/api/v1/estate/space/detail/".concat(id));
};
// 字典表
export var dictionaryGet = function dictionaryGet() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/basic/admin/dictionary/getAll', data);
};
// 根据类型获取字典信息
export var dictionaryGetByType = function dictionaryGetByType() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.get('/api/v1/basic/dictionary/getByType', {
    data: data
  });
};
// 新增用户
export var residentManagerAdd = function residentManagerAdd() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/residentManager/add', data);
};
// 新增业主
export var residentProprietorAdd = function residentProprietorAdd() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentProprietor/add', data);
};
// 新增租户
export var residentTenantAdd = function residentTenantAdd() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentTenant/add', data);
};
// 编辑租户
export var residentTenantUpdate = function residentTenantUpdate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentTenant/update', data);
};
// 新增家属
export var residentFamilyAdd = function residentFamilyAdd() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentFamily/add', data);
};
// 编辑家属
export var residentFamilyUpdate = function residentFamilyUpdate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentFamily/update', data);
};
// 新增租户家属
export var residentTenantFamilyAdd = function residentTenantFamilyAdd() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentTenantFamily/add', data);
};
// 编辑租户家属
export var residentTenantFamilyUpdate = function residentTenantFamilyUpdate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Request.post('/api/v1/estate/admin/residentTenantFamily/update', data);
};
// 列表-物业公司
export var propertyManagementList = function propertyManagementList(data) {
  return Request.post('/api/v1/estate/admin/communityPropertyManagement/list', data);
};
// 列表-承租人
export var getHouseTenantInfoListUser = function getHouseTenantInfoListUser(data) {
  return Request.post('/api/v1/estate/admin/houseTenantInfo/listUser', data);
};
// 新增物业公司
export var propertyManagementAdd = function propertyManagementAdd(data) {
  return Request.post('/api/v1/estate/admin/communityPropertyManagement/add', data);
};
// 获取物业公司
export var propertyManagementGet = function propertyManagementGet(data) {
  return Request.post('/api/v1/estate/admin/communityPropertyManagement/get', data);
};
// 更新物业公司
export var propertyManagementUpdate = function propertyManagementUpdate(data) {
  return Request.post('/api/v1/estate/admin/communityPropertyManagement/update', data);
};
// 人员卡片信息
export var getAccountInfoById = function getAccountInfoById(_ref2) {
  var id = _ref2.id,
    type = _ref2.type;
  return Request.get('/api/v1/user/common/user/cardInfo', {
    data: {
      id: id,
      type: type
    }
  });
};
// 分页查询聚合标签组分类
export var tagCategoryPage = function tagCategoryPage(data) {
  return Request.post('/api/v1/tag/tag/category/page', data);
};
// 查询客户标签列表
export var tagCustomerList = function tagCustomerList(data) {
  return Request.post('/api/v1/tag/tag/customer/list', data);
};
// 根据部门查询人员列表
export var pagelistByDeptAndName = function pagelistByDeptAndName(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/user/employee/pageListByDeptAndName' + query, data);
};
// 客户列表--按分类查询
export var moduleCheckPageList = function moduleCheckPageList(data) {
  var page = {
    currentPage: data.currentPage,
    pageSize: data.pageSize
  };
  var query = objToQuery(page);
  delete data.currentPage;
  delete data.pageSize;
  return Request.post('/api/v1/customer/customerInfo/moduleCheckPageList' + query, data);
};