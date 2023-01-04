import request from '../libs/axios'

export const postRequest = data => {
  return request({
    url: '/api/user/media_account/list_shop_account',
    method: 'POST',
    config: {},
    data,
  })
}
export const getRequest = data => {
  return request({
    url: '/api/user/media_account/list_shop_account',
    method: 'GET',
    config: {},
    data,
  })
}
export const customizeConfig = data => {
  return request({
    url: '/api/user/media_account/list_shop_account',
    config: {
      headers: { isDebug: true },
    },
    data,
  })
}
export const addInterceptorsRequest = data => {
  return request({
    url: '/api/user/adapter/mock',
    config: {
      headers: { isDebug: true }
    },
    option: {
      // 自定义选项
    },
    data,
  })
}
export const testInterceptorsResponse = data => {
  return request({
    url: '/api/user/adapter/mock',
    data,
    config: {
      headers: { isDebug: true },
      adapter: function (config) {
        // return Promise.resolve({
        //   status: 200, statusText: 'Ok', data: { code: 200, message: '接口成功，响应失败！' }
        // })
        return Promise.reject({
          config,
          status: 502, statusText: 'Ok', data: { code: 200, message: '错误！测试错误拦截' }
        })
      }
    },
  })
}
export const cancelResponse = (data, config) => {
  return request({
    url: '/api/user/media_account/list_shop_account',
    method: 'GET',
    config: {
      ...config
    },
    data,
  })
}
