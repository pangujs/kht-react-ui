import { estate } from '../../request';
//中台端======获取项目数据
export var getParkTreeData = function getParkTreeData(data) {
  return estate.post({
    url: "/components/carPlace/getCarPlaceList",
    data: data
  });
};