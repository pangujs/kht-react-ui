import React from 'react';
var AttrTypeItem;
(function (AttrTypeItem) {
  /** boolean 值 boolean(min?, max?, current?) */
  AttrTypeItem["boolean"] = "boolean";
  /** 自然数 natural( min?, max? ) */
  AttrTypeItem["natural"] = "natural";
  /** 整数  integer( min?, max? ) */
  AttrTypeItem["integer"] = "integer";
  /** 浮点数  float( min?, max?, dmin?, dmax? ) */
  AttrTypeItem["float"] = "float";
  /** 字母 character( pool? )  lower、upper、number ...*/
  AttrTypeItem["character"] = "character";
  /**  字符串 string( pool?, min?, max? )  lower、upper、number ... */
  AttrTypeItem["string"] = "string";
  /** 范围 range(start?, stop, step?)*/
  AttrTypeItem["range"] = "range";
  /** 日期 date( format? ) yyyy-MM-dd*/
  AttrTypeItem["date"] = "date";
  /** 时间 time( format? )  HH:mm:ss*/
  AttrTypeItem["time"] = "time";
  /** 日期时间 datetime( format? )  yyyy-MM-dd HH:mm:ss*/
  AttrTypeItem["datetime"] = "datetime";
  /** 现在时间 now( unit?, format? )*/
  AttrTypeItem["now"] = "now";
  /** 图片 image( size?, background?, foreground?, format?, text? ) */
  AttrTypeItem["image"] = "image";
  /** 图片 dataImage( size?, text? ) */
  AttrTypeItem["dataImage"] = "dataImage";
  /** 颜色 color() */
  AttrTypeItem["color"] = "color";
  /** 颜色 hex()*/
  AttrTypeItem["hex"] = "hex";
  /** rgb颜色  rgb()*/
  AttrTypeItem["rgb"] = "rgb";
  /** rgba颜色  rgba() */
  AttrTypeItem["rgba"] = "rgba";
  /** hsl颜色 hsl() */
  AttrTypeItem["hsl"] = "hsl";
  /** 段落 paragraph( min?, max? )*/
  AttrTypeItem["paragraph"] = "paragraph";
  /** 句子  sentence( min?, max? )*/
  AttrTypeItem["sentence"] = "sentence";
  /** 单词 word( min?, max? ) */
  AttrTypeItem["word"] = "word";
  /** 标题 title( min?, max? ) */
  AttrTypeItem["title"] = "title";
  /** 中文段落 cparagraph( min?, max? )*/
  AttrTypeItem["cparagraph"] = "cparagraph";
  /** 中文句子  csentence( min?, max? ) */
  AttrTypeItem["csentence"] = "csentence";
  /** 词 cword( min?, max? ) */
  AttrTypeItem["cword"] = "cword";
  /** 标题 ctitle( min?, max? ) */
  AttrTypeItem["ctitle"] = "ctitle";
  /** 姓  first() */
  AttrTypeItem["first"] = "first";
  /** 名 last()*/
  AttrTypeItem["last"] = "last";
  /** 姓名 name( middle? ) */
  AttrTypeItem["name"] = "name";
  /** 姓  cfirst() */
  AttrTypeItem["cfirst"] = "cfirst";
  /** 名 clast() */
  AttrTypeItem["clast"] = "clast";
  /** 姓名 cname( middle? )  */
  AttrTypeItem["cname"] = "cname";
  /** url地址 url() */
  AttrTypeItem["url"] = "url";
  /** 域名 domain() */
  AttrTypeItem["domain"] = "domain";
  /** 协议 protocol()  */
  AttrTypeItem["protocol"] = "protocol";
  /** 后缀 tld() */
  AttrTypeItem["tld"] = "tld";
  /** 邮箱 email() */
  AttrTypeItem["email"] = "email";
  /** ip地址 ip() */
  AttrTypeItem["ip"] = "ip";
  /** 区域 region() */
  AttrTypeItem["region"] = "region";
  /** 省份 province() */
  AttrTypeItem["province"] = "province";
  /** 城市 city() */
  AttrTypeItem["city"] = "city";
  /** 县  county() */
  AttrTypeItem["county"] = "county";
  /** zip大小 zip() */
  AttrTypeItem["zip"] = "zip";
  /** 首字母大写 capitalize(str) */
  AttrTypeItem["capitalize"] = "capitalize";
  /** 全大写 upper(str) */
  AttrTypeItem["upper"] = "upper";
  /** 全小写 lower( str ) */
  AttrTypeItem["lower"] = "lower";
  /** 选择某项 pick(array) */
  AttrTypeItem["pick"] = "pick";
  /** 倒序 shuffle(array) */
  AttrTypeItem["shuffle"] = "shuffle";
  /** 生成guid值 guid() */
  AttrTypeItem["guid"] = "guid";
  /** 生成id值 id() */
  AttrTypeItem["id"] = "id";
  /** 增量 increment( step? ) */
  AttrTypeItem["increment"] = "increment";
})(AttrTypeItem || (AttrTypeItem = {}));
export var AttrType = function AttrType(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};