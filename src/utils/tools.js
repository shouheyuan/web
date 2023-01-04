import * as constants from '@/config/constants.js'
import * as es from './es'

// 从cookie中获取token
export const getToken = () => es.getCookie(constants.TOKEN_KEY)

// 退出登录
export const LogOut = () => es.delCookie(constants.TOKEN_KEY)

// export const 