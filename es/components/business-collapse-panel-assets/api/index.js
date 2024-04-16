import Request from '../../../http';
import { objToQuery } from '../../../utils';
//分期列表
export var AreaPhasegetList = function AreaPhasegetList(pageId, data) {
  return Request.post("/api/v1/estate/communityAreaPhase/getList?".concat(pageId), data);
};
export var getCommunityAreaBuilding = function getCommunityAreaBuilding(data, url) {
  var query = objToQuery(data);
  return Request.post("".concat(url || '/api/v1/estate/communityAreaBuilding/getLeftTree').concat(query), data);
};