import axios from "axios"
const mockData = new Map([
    ['/api/user/adapter/mock', { status: 200, statusText: 'OK', data: { code: 200, message: '我是mock数据' } }]
])

export default function (config) {
    // 判断是否存在mock数据
    let has = mockData.has(config.url)

    // 调用默认请求接口, 发送正常请求及返回
    if (!has) {
        // 删除配置中的 adapter, 使用默认值
        delete config.adapter
        // 通过配置发起请求
        return axios(config)
    }
    return Promise.resolve(Object.assign({ config }, mockData.get(config.url)))
}