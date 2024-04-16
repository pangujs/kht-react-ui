import Request from '../../../http/index';
// 上传图片
export var uploadStreanFile = function uploadStreanFile(data) {
  return Request.post('/api/v1/file/upload/stream', data);
};