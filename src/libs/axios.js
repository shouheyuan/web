import axios from 'axios'
import { message as $Message } from 'ant-design-vue';
import getAdapter from './axios-adapter';
import { addPendingRequest, removePendingRequest } from './axios-helper'

import { getToken, LogOut } from '@/utils/tools'
import { logInfo, redLog } from '@/utils/log'
const baseURL = window.location.protocol + '//test-api.adsdesk.cn/adsdesk'



const instance = axios.create({
  baseURL,
  timeout: 10000 * 5,
  headers: {
    Authorization: `Adsdesk ${getToken()}`
  },
  adapter: getAdapter
});
// 请求拦截器
const interceptorsRequest = config => {
  removePendingRequest(config, '请求') // 检查是否存在重复请求，若存在则取消已发的请求
  addPendingRequest(config) // 把当前请求添加到pendingRequest对象中
  // console.log('请求拦截器', config)

  return config
}
// 请求拦截器-错误处理
const interceptorsRequestFailed = error => {
  return Promise.reject(error)
}
// 响应拦截器
// 2xx 范围内的状态码都会触发该函数。
const interceptorsResponse = res => {
  removePendingRequest(res.config, '响应-成功'); // 从pendingRequest对象中移除请求
  // console.log('响应拦截', res)
  if (res.data.code === 200 || res.data.success) {
    // 将响应数据添加到返回服务data
    res.httpData = {
      status: res.status,
      statusText: res.statusText,
    }
    return res.data
  }
  else {
    let message = res.data.message || res.data.errorMessage
    // 响应状态码
    switch (res.data.code) {
      case 404:
        break
    }

    $Message.destroy()
    $Message.error(message)
    return Promise.reject(message)
  }
}
// 响应拦截器-错误处理
// 超出 2xx 范围的状态码都会触发该函数。
const interceptorsResponseFailed = error => {
  removePendingRequest(error.config || {}, '响应失败'); // 从pendingRequest对象中移除请求
  if (axios.isCancel(error)) {
    console.log('已取消重复请求: ' + error)
  }
  else {
    // HTTP 状态码
    switch (error.status) {
      case 401:
        $Message.error('平台不可重复登录，请刷新页面重新登录')
        LogOut()
      case 500:
        error.message = '服务器错误(500)'
        break
      case 502:
        error.message = '网络错误(502)'
    }
    if (!window.navigator.onLine) {
      error.message = '请检查网络链接'
    }
    // 上传错误日志
    logInfo(error)
    redLog(error)
  }
  return Promise.reject(error)
}



instance.interceptors.request.use(interceptorsRequest, interceptorsRequestFailed)
instance.interceptors.response.use(interceptorsResponse, interceptorsResponseFailed)

export default function request(e) {
  const { url = '', method = 'GET', data = {}, config = {}, option = {} } = e
  // if (option) {

  // }
  switch (method.toUpperCase()) {
    case 'GET':
      return instance.get(url, { params: data, ...config })
    case 'POST':
      return instance.post(url, data, config)
  }
}