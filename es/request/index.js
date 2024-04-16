import Service from './service';
import { message } from 'antd';
var defaultAxiosConfig = {
  baseURL: '/admin',
  timeout: 50000,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache'
  }
};
var axiosConfig = JSON.parse(JSON.stringify(defaultAxiosConfig));
// 公共的
export var publicApi = new Service(Object.assign(axiosConfig, {
  baseURL: "/api/v1",
  timeout: 60000
}));
export var boss = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/boss/admin',
  timeout: 60000
}));
export var user = new Service(Object.assign(axiosConfig, {
  baseURL: "/api/v1/user",
  timeout: 60000
}));
export var company = new Service(Object.assign(axiosConfig, {
  baseURL: "/api/v1/company",
  timeout: 60000
}));
export var weixinWork = new Service(Object.assign(axiosConfig, {
  baseURL: "/api/v1/wxwork",
  timeout: 60000
}));
export var taskAllot = new Service(Object.assign(axiosConfig, {
  baseURL: "/api/v1/task-allot",
  timeout: 60000
}));
export var material = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/material/admin',
  timeout: 60000
}));
export var opinion = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/view/admin',
  timeout: 60000
}));
export var view = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/view',
  timeout: 60000
}));
export var customer = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/customer',
  timeout: 60000
}));
export var opinionManage = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/opinion-manage',
  timeout: 60000
}));
export var bossAdmin = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/boss/admin',
  timeout: 60000
}));
//企业端
export var adminManage = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/boss/admin/manage',
  timeout: 60000
}));
export var opinionAdmin = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/boss/admin/opinion',
  timeout: 60000
}));
export var companyOpinion = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/boss/admin/company/opinion',
  timeout: 60000
}));
export var estate = new Service(Object.assign(axiosConfig, {
  baseURL: "/api/v1/estate",
  timeout: 10000
}));
export var opinionTag = new Service(Object.assign(axiosConfig, {
  baseURL: '/api/v1/boss/admin/opinion/tag',
  timeout: 60000
}));
export var createAtargetDown = function createAtargetDown(res, other) {
  if (res.headers['content-type'].indexOf('application/json') !== -1) {
    var reader = new FileReader();
    reader.readAsText(res.data, 'utf-8');
    reader.addEventListener('loadend', function () {
      var result = JSON.parse((reader.result || '').toString());
      message.error(result.message || '导出失败', 1.5);
      (other === null || other === void 0 ? void 0 : other.successCb) && other.successCb();
    });
  } else {
    var fileName = res.headers['content-disposition'] && res.headers['content-disposition'].split('=')[1];
    if (other === null || other === void 0 ? void 0 : other.fileName) fileName = other === null || other === void 0 ? void 0 : other.fileName;
    var contentType = res.headers['content-type'];
    var blob = new Blob([res.data], {
      type: contentType
    });
    var link = document.createElement('a');
    var href = window.URL.createObjectURL(blob); // 创建下载的链接
    link.href = href;
    if (contentType === 'application/octet-stream; charset=utf-8') {
      link.download = decodeURI(escape(fileName)); // 下载后文件名
    } else {
      link.download = decodeURI(fileName); // 下载后文件名
    }

    document.body.appendChild(link);
    link.click(); // 点击下载
    document.body.removeChild(link); // 下载完成移除元素
    window.URL.revokeObjectURL(href); // 释放掉blob对象
    (other === null || other === void 0 ? void 0 : other.successCb) && other.successCb();
  }
};
// 下载文件
export var downFile = function downFile(res, other) {
  return new Promise(function (resolve, reject) {
    if (!res) {
      (other === null || other === void 0 ? void 0 : other.errorCb) && other.errorCb();
      message.error('未知错误', 1.5);
      reject('未知错误');
    }
    createAtargetDown(res, other);
    resolve();
  });
};