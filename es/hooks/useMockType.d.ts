declare enum AttrTypeItem {
    /** boolean 值 boolean(min?, max?, current?) */
    boolean = "boolean",
    /** 自然数 natural( min?, max? ) */
    natural = "natural",
    /** 整数  integer( min?, max? ) */
    integer = "integer",
    /** 浮点数  float( min?, max?, dmin?, dmax? ) */
    float = "float",
    /** 字母 character( pool? )  lower、upper、number ...*/
    character = "character",
    /**  字符串 string( pool?, min?, max? )  lower、upper、number ... */
    string = "string",
    /** 范围 range(start?, stop, step?)*/
    range = "range",
    /** 日期 date( format? ) yyyy-MM-dd*/
    date = "date",
    /** 时间 time( format? )  HH:mm:ss*/
    time = "time",
    /** 日期时间 datetime( format? )  yyyy-MM-dd HH:mm:ss*/
    datetime = "datetime",
    /** 现在时间 now( unit?, format? )*/
    now = "now",
    /** 图片 image( size?, background?, foreground?, format?, text? ) */
    image = "image",
    /** 图片 dataImage( size?, text? ) */
    dataImage = "dataImage",
    /** 颜色 color() */
    color = "color",
    /** 颜色 hex()*/
    hex = "hex",
    /** rgb颜色  rgb()*/
    rgb = "rgb",
    /** rgba颜色  rgba() */
    rgba = "rgba",
    /** hsl颜色 hsl() */
    hsl = "hsl",
    /** 段落 paragraph( min?, max? )*/
    paragraph = "paragraph",
    /** 句子  sentence( min?, max? )*/
    sentence = "sentence",
    /** 单词 word( min?, max? ) */
    word = "word",
    /** 标题 title( min?, max? ) */
    title = "title",
    /** 中文段落 cparagraph( min?, max? )*/
    cparagraph = "cparagraph",
    /** 中文句子  csentence( min?, max? ) */
    csentence = "csentence",
    /** 词 cword( min?, max? ) */
    cword = "cword",
    /** 标题 ctitle( min?, max? ) */
    ctitle = "ctitle",
    /** 姓  first() */
    first = "first",
    /** 名 last()*/
    last = "last",
    /** 姓名 name( middle? ) */
    name = "name",
    /** 姓  cfirst() */
    cfirst = "cfirst",
    /** 名 clast() */
    clast = "clast",
    /** 姓名 cname( middle? )  */
    cname = "cname",
    /** url地址 url() */
    url = "url",
    /** 域名 domain() */
    domain = "domain",
    /** 协议 protocol()  */
    protocol = "protocol",
    /** 后缀 tld() */
    tld = "tld",
    /** 邮箱 email() */
    email = "email",
    /** ip地址 ip() */
    ip = "ip",
    /** 区域 region() */
    region = "region",
    /** 省份 province() */
    province = "province",
    /** 城市 city() */
    city = "city",
    /** 县  county() */
    county = "county",
    /** zip大小 zip() */
    zip = "zip",
    /** 首字母大写 capitalize(str) */
    capitalize = "capitalize",
    /** 全大写 upper(str) */
    upper = "upper",
    /** 全小写 lower( str ) */
    lower = "lower",
    /** 选择某项 pick(array) */
    pick = "pick",
    /** 倒序 shuffle(array) */
    shuffle = "shuffle",
    /** 生成guid值 guid() */
    guid = "guid",
    /** 生成id值 id() */
    id = "id",
    /** 增量 increment( step? ) */
    increment = "increment"
}
export type AttrType = {
    /** 属性名 */
    key: string;
    /** 值类型 */
    value?: string | number | boolean | AttrType[];
    /** 生成类型 */
    type: AttrTypeItem;
    /** 生成规则 */
    rule?: '';
};
export declare const AttrType: (props: AttrType) => JSX.Element;
export {};
