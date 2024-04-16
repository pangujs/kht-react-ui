/// <reference types="react" />
import './index.less';
type UserNameReviewPropsType = {
    /** 头像地址 */
    imageUrl: string;
    /** 用户类型 */
    userType: number;
    /** 用户姓名 */
    userName: string;
    /** 业主姓名 */
    residentName?: string;
    /** 公司名称 */
    userCompanyName?: string;
};
export default function UserNameReview(props: UserNameReviewPropsType): JSX.Element;
export {};
