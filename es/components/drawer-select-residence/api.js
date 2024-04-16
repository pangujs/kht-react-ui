import { estate } from '../../request';
//中台端======获取项目数据
export var getResidentTreeData = function getResidentTreeData(data) {
  return estate.post({
    url: "/components/residentManager/getLeftTree",
    data: data
  });
};