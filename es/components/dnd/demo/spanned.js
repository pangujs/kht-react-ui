import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback, memo, useRef } from 'react';
import KhtSpannedProvider from '@src/dnd/spanned';
import update from 'immutability-helper';
import { Checkbox, message, Radio, Rate, Select, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { InboxOutlined } from '@ant-design/icons';
import { DragOutlined } from '@ant-design/icons';
export default (function () {
  var _useState = useState([{
      id: '111',
      text: '单选',
      type: 'radio'
    }, {
      id: '222222',
      text: '多选',
      type: 'checkbox'
    }, {
      id: '333333333',
      text: '文本域',
      type: 'text'
    }, {
      id: '444444',
      text: '下拉选择',
      type: 'select'
    }, {
      id: '6666666',
      text: '评分',
      type: 'rate'
    }, {
      id: '777777',
      text: '上传文件',
      type: 'upload'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    cards = _useState2[0],
    setCards = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    dropData = _useState4[0],
    setDropData = _useState4[1];
  /** 左侧列表的渲染 */
  var RenderDragList = function RenderDragList(card, index) {
    return /*#__PURE__*/React.createElement(KhtSpannedProvider.DragList, {
      style: {
        padding: '15px 5px',
        margin: '10px 0',
        border: '1px dashed #aeafff',
        cursor: 'pointer',
        textAlign: 'center'
      },
      currentItem: card,
      drapSort: false,
      key: card.id,
      index: index,
      children: card.text,
      useDrop: true,
      clickEleCallback: clickDragItemRender
    });
  };
  /** 点击/拖拽左侧元素，渲染右侧某一项的展示内容数据组装 */
  var clickDragItemRender = function clickDragItemRender(item) {
    setDropData([].concat(_toConsumableArray(dropData), [{
      text: item.text,
      sort: dropData.length + 1,
      type: item.type,
      childrenItemList: []
    }]));
  };
  /** 移动排序 */
  var controlDragCallback = useCallback(function (dragIndex, hoverIndex) {
    setDropData(function (renderControl) {
      return update(renderControl, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, renderControl[dragIndex]]]
      });
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KhtSpannedProvider, {
    children: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200,
        padding: 10,
        boxShadow: '0 0 5px 5px #f5f5f5'
      }
    }, cards.map(function (item, index) {
      return RenderDragList(item, index);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        marginLeft: 16,
        boxShadow: '0 0 5px 5px #f5f5f5'
      }
    }, /*#__PURE__*/React.createElement(KhtSpannedProvider.DropList, {
      style: {
        padding: 15
      },
      dropCallback: clickDragItemRender,
      children: dropData.map(function (item, index) {
        return /*#__PURE__*/React.createElement(RenderComponent, {
          index: index,
          dropData: item,
          key: index,
          controlDragCallback: controlDragCallback
        });
      })
    })))
  }));
});
var RenderComponent = function RenderComponent(props) {
  var item = props.dropData,
    index = props.index;
  var dropRef = useRef(null);
  /** 根据类型判断，渲染成相应的组件 */
  var RenderDropList = /*#__PURE__*/memo(function (props) {
    if (props.item.type == 'radio') {
      return /*#__PURE__*/React.createElement(RadioControl, {
        item: props.item
      });
    }
    if (props.item.type == 'checkbox') {
      return /*#__PURE__*/React.createElement(CheckboxControl, {
        item: props.item
      });
    }
    if (props.item.type == 'text') {
      return /*#__PURE__*/React.createElement(TextAreaControl, {
        item: props.item
      });
    }
    if (props.item.type == 'select') {
      return /*#__PURE__*/React.createElement(SelectControl, {
        item: props.item
      });
    }
    if (props.item.type == 'rate') {
      return /*#__PURE__*/React.createElement(RateControl, {
        item: props.item
      });
    }
    if (props.item.type == 'upload') {
      return /*#__PURE__*/React.createElement(UploadControl, {
        item: props.item
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  });
  /** 单选控件 */
  var RadioControl = function RadioControl(props) {
    var _useState5 = useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];
    var onChange = function onChange(e) {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Radio.Group, {
      onChange: onChange,
      value: value
    }, /*#__PURE__*/React.createElement(Radio, {
      value: 1
    }, "A"), /*#__PURE__*/React.createElement(Radio, {
      value: 2
    }, "B"), /*#__PURE__*/React.createElement(Radio, {
      value: 3
    }, "C"), /*#__PURE__*/React.createElement(Radio, {
      value: 4
    }, "D")));
  };
  /** 多选控件 */
  var CheckboxControl = function CheckboxControl(props) {
    var plainOptions = ['Apple', 'Pear', 'Orange'];
    var onChange = function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Checkbox.Group, {
      options: plainOptions,
      defaultValue: ['Apple'],
      onChange: onChange
    }));
  };
  /** 文本域控件 */
  var TextAreaControl = function TextAreaControl(props) {
    return /*#__PURE__*/React.createElement(TextArea, {
      rows: 4,
      style: {
        width: '550px'
      }
    });
  };
  /** 下拉控件 */
  var SelectControl = function SelectControl(props) {
    var _useState7 = useState([{
        label: 'AAAA',
        value: '11'
      }, {
        label: 'BBBB',
        value: '22'
      }, {
        label: 'CCCC',
        value: '333'
      }]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectOption = _useState8[0],
      setSelectOption = _useState8[1];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
      style: {
        width: '250px'
      },
      options: selectOption
    }));
  };
  /** 评分控件 */
  var RateControl = function RateControl(props) {
    return /*#__PURE__*/React.createElement(Rate, {
      allowHalf: true,
      defaultValue: 4.5
    });
  };
  /** 上传控件 */
  var UploadControl = function UploadControl(props) {
    var datas = {
      name: 'file',
      multiple: true,
      action: '/',
      onChange: function onChange(info) {
        var status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success("".concat(info.file.name, " file uploaded successfully."));
        } else if (status === 'error') {
          message.error("".concat(info.file.name, " file upload failed."));
        }
      },
      onDrop: function onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      }
    };
    var Dragger = Upload.Dragger;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dragger, _objectSpread({}, datas), /*#__PURE__*/React.createElement("p", {
      className: "ant-upload-drag-icon"
    }, /*#__PURE__*/React.createElement(InboxOutlined, null)), /*#__PURE__*/React.createElement("p", {
      className: "ant-upload-text"
    }, "Click or drag file to this area to upload"), /*#__PURE__*/React.createElement("p", {
      className: "ant-upload-hint"
    }, "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")));
  };
  return /*#__PURE__*/React.createElement(KhtSpannedProvider.DragList, {
    index: index,
    currentItem: item,
    key: index,
    useOnlyElement: true,
    dropRef: dropRef,
    dragDropType: 'DND',
    dragCallback: props.controlDragCallback,
    opacity: 1
  }, /*#__PURE__*/React.createElement("div", {
    key: index,
    style: {
      padding: '15px',
      marginBottom: '10px',
      boxShadow: '0 0 5px 5px #f5f5f5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, index + 1, ". ", item.text), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(DragOutlined, {
    ref: dropRef,
    style: {
      fontSize: '18px',
      marginRight: '20px'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RenderDropList, {
    item: item
  }))));
};