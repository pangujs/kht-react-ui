/**
 *  传入类型判断
 */
export type Equal<X, Y> = (<T>() => X extends T ? 1 : 2) extends <T>() => Y extends T ? 1 : 2 ? true : false;
/**
 * 判断类型 U 是否存在于类型 T
 */
export type Includes<T extends any[], U> = T extends [infer F, ...infer R] ? Equal<F, U> extends true ? true : Includes<R, U> : false;
/**
 * 清空左侧所有空字符串
 */
export type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer S}` ? TrimLeft<S> : T;
/**
 * 清空右侧所有空字符串
 */
export type TrimRight<T extends string> = T extends `${infer S}${' ' | '\n' | '\t'}` ? TrimRight<S> : T;
/**
 * 清空两侧所有空字符串
 */
export type Trim<T extends string> = TrimLeft<TrimRight<T>>;
/**
 * 字符串替换
 */
export type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : S;
/**
 * 替换全部匹配的字符
 */
export type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer L}${From}${infer R}` ? From extends '' ? S : `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}` : S;
/**
 * 展开多维数组展开成一维
 */
export type Flatten<T> = T extends [infer F, ...infer R] ? F extends any[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>] : T;
/**
 * 判断是否是 never 类型
 */
export type IsNever<T> = [T] extends [never] ? true : false;
/** 重置所有参数为可选 */
export type UnRequired<T extends object> = {
    [P in keyof T]?: T[P];
};
