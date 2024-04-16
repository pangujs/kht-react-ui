import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Button } from 'antd';
import SelectMember from '../index';
import { Local } from '../../../utils/storage';
export default function Demo() {
  var CROP_ID = 'crop-id';
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState('customer'),
    _useState4 = _slicedToArray(_useState3, 2),
    useSystem = _useState4[0],
    setUseSystem = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    companyCode = _useState6[0],
    setCompanyCode = _useState6[1];
  var _useState7 = useState('radio'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectType = _useState8[0],
    setSelectType = _useState8[1];
  var _useState9 = useState(['0cedce1887f3483eab667d5f50c0db30', '0e5ed7046d484f2185c1ca0fcb93e752', '13260d8faeef4b0a8d581d7cf5165b3a', '1401b89839bc4873815ed78a5c51e621', '1a40ff6af2c34e67bcae01ad83f39eef', '1c7c88cc9f774108aa1431855ac06bc3', '1dac2d146f2647d287e4c11a2a304227', '1e26dff16f20453e942f21115631da0b', '2137d638a45b4abf860f22e9bd8541d0', '2677709073624c559b6975e6e23e50de', '28a7b3c612984a3eb271e986ef676814', '2ad735ea3bbb42ca9dacb71008cfefc1', '2ad7b0d0c5a146e6a799dc708b4ec0ac', '2bb9cfd0bb6d4e5c93275b57467fdb05', '2fc137a16452411aac6feda0cbced203', '309e3ec4b4cc4039b727c2e760e83814', '3108f09120d540bd81194dbbef9edb9d', '35401a00ab4b4237a278fe38205a5c3d', '35aa33dbe88c4564abf2009f4f0e314b', '3929ad7e944942d687b1ed19fb1673cc', '3cf8858fb9e6411793b249ad1de75188', '3dd02e1f2bfb4006a347ba7be07eba7f', '3f1843765234422985d419a272731bc5', '45c0996ee9374ceeb3a266c279ddeba9', '463f33e78ccc41669634425f465191e0', '477f0d128b1d4ffca27ed384532901da', '4a8c678d57e742e8a4002df3fcd7eeff', '4b7ae0fb68804be4ad9a2b1cdfb40245', '4bc950b6b7a54843b1ee0b12c306dfe4', '4ed805c2d26e4aa1ac6a65791d4335f7', '4f77f702c6eb48579217028a12a6d5ba', '511dfd1e28a54d0e835d6748ad0c319a', '57b8e3b2455748579c9349d902cad08a', '57bbc22cec56420084f44d8b392bb9d6', '57ce4ca21d24482380ebd258cd178201', '5984be4de34c4b309863b91de259d1fe', '64e6762316c2485397142f1a0b01e09a', '6f52a75fd00844f588129f3b3a80412e', '71a2e1d9c70346fab256483d7f1e62ed', '72f983d9453649ec8783f61c176ea4dc', '74ba5083b3a746b3a5f0324c4f830a4b', '753a3fb7897e43318faa5c1d1fdc86fc', '7a2f8c54ec5e44a191a2ed4b0e94413f', '86ddf3c1bf064d4799d69223da1f9a6b', '8818c40548804ea7893b0bef3fc62390', '8cba243e4c8c44b8bebdb8b86f3a16cf', '8d19e02cf7464d1a8ec7f66b7325bd5b', '8d4b6b50804e4dcf8a348d78facaabdc', '8fa267fb1f384516af1efac06b417435', '92853a6b36d34b92b17466927cbfce12', '94f357d9afaa417e95038bc4f87669e0', '97a96934bf264bac891f6e3a15603bd1', '9bbef9b3eadb4e0fa43ec22d1e18b7ca', '9bd8a988501b4e449c38a016a131e68c', '9c53041bccd5463dbee2b4b8cac196eb', '9e5d85d0a3634610aee06e846afd98a6', 'a37f32f1df114efab5e5db077a6e991d', 'a438f954c976495f9f70b0ca515ffede', 'a9b37ea08cda47cbb16eb4f60bf77aa4', 'a9be5d1070c247ce9e4d342005ca2f65', 'ace1f2e6b282467c9937eefbb9f6bfcb', 'ad53aa6ecb1d49fbb3b623ae2e6f5800', 'b008d4bbfe7d4d74a72bf8ed26dc9291', 'b13201c4e07b4b26b59e780d49093e3a', 'b2d2e3c02bf649d4a7cedd3a90a34dba', 'b7a1e2bfbd0d468abbdad99747fb5c65', 'b8f4803166dd4055a2b2100049ba081d', 'bc37df4a1f934d7c89e81f162ff17209', 'bfa8e2d9ed054d26bed2c2b9c50af11f', 'bfd78de30a0747ee9885ec5be235a4d0', 'c07ff9655b93439c84b233faffcb44f8', 'c29b3819db414c9c9aeae948020edb37', 'c34f38d0f7bb481aa022dbce77e942ac', 'c7c15fd4b3ae4783923014bdebcd7390', 'c97478a5ab7f4c9796efb574885b6da2', 'cbcab06416bf4509883cbcc3a3b33fb0', 'cf2e94a1e9e04a0f8b611654c4590b62', 'cfcb4252f2684015953aade4f766456d', 'd44114954c1e4c88b156f78ae118dba4', 'd586c7a15e3e494f9ac7803f74fe6b5f', 'd7afc9937349408b94b00513d376cbe4', 'd7d9eb33c7fe4c3cac631307948e64ce', 'dc9078b6293e461b885bc7ffa09417a0', 'dd1d2a936d1e4b699f64ca6f17b0ff7b', 'dd6f796ce7af4c519f57530fbfacada4', 'de07a826c1c3457e8b4558da42f267cc', 'df9ab41da0e74ea196383832780be74c', 'e2d25a0ee7774d39bae0ea2855b83ba2', 'e5846832bcd646fab1b0f408e72b486e', 'e9121020ebf5453896ad34d76920a32d', 'eb4daaa1af064e8fa79e8bdcc71465d3', 'eba43bd081d246588de14ff67d7331c3', 'f8736c47737740be82a41afca61fb4ef', 'fe35aff384e94ac29fd66a0544a7a0d3', 'fe80a849b9d24d6d8a89b731aac94f98', 'fff08ad9f0ed49bc8f8767ec5233c12c']),
    _useState10 = _slicedToArray(_useState9, 2),
    defaultRowKeys = _useState10[0],
    setDefaultRowKeys = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isDelete = _useState12[0],
    setIsDelete = _useState12[1];
  //抽屉提交事件
  var onSubmit = function onSubmit(data, selectedRows) {
    console.log('%c Line:48 🍢 selectedRows', 'color:#b03734', selectedRows);
    console.log('%c Line:44 🥃 onSubmit-------data', 'color:#ffdd4d', data);
    if (selectType === 'radio') {
      setOpen(false);
      setDefaultRowKeys(selectedRows === null || selectedRows === void 0 ? void 0 : selectedRows.map(function (item) {
        return {
          name: item.name,
          id: item.id,
          code: item.code
        };
      }));
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      setCompanyCode(Local.get(CROP_ID));
      setUseSystem('customer');
      setSelectType('radio');
      setOpen(true);
      setIsDelete(false);
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u9009\u62E9\u6210\u5458\uFF08\u4E2D\u53F0\uFF09\u5355\u9009 - \u672A\u5220\u9664"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      setCompanyCode(Local.get(CROP_ID));
      setUseSystem('customer');
      setSelectType('checkbox');
      setOpen(true);
      setIsDelete(false);
    }
  }, "\u9009\u62E9\u6210\u5458\uFF08\u4E2D\u53F0\uFF09\u591A\u9009 - \u672A\u5220\u9664"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      setCompanyCode(Local.get(CROP_ID));
      setUseSystem('customer');
      setSelectType('radio');
      setOpen(true);
      setIsDelete(true);
    },
    style: {
      marginRight: 20,
      marginBottom: 10
    }
  }, "\u9009\u62E9\u6210\u5458\uFF08\u4E2D\u53F0\uFF09\u5355\u9009 - \u5DF2\u5220\u9664"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginRight: 20,
      marginBottom: 10
    },
    onClick: function onClick() {
      setCompanyCode(Local.get(CROP_ID));
      setUseSystem('customer');
      setSelectType('checkbox');
      setOpen(true);
      setIsDelete(true);
    }
  }, "\u9009\u62E9\u6210\u5458\uFF08\u4E2D\u53F0\uFF09\u591A\u9009 - \u5DF2\u5220\u9664")), /*#__PURE__*/React.createElement(SelectMember, {
    selectType: selectType,
    companyCode: companyCode,
    useSystem: useSystem,
    onClose: function onClose() {
      return setOpen(false);
    },
    open: open,
    onSubmit: onSubmit,
    defaultRowKeys: defaultRowKeys,
    isDelete: isDelete
  }));
}