import Qs from 'qs'
import axios from 'axios'
const pendingRequest = new Map();


export function addPendingRequest(config) {
    const requestKey = generateReqKey(config);
    // const controller = new AbortController()
    config.cancelToken =
        config.cancelToken ||
        new axios.CancelToken((cancel) => {
            if (!pendingRequest.has(requestKey)) {
                pendingRequest.set(requestKey, cancel);
            }
        });
    // config.signal = config.signal || controller.signal
    // if (!pendingRequest.has(requestKey)) {
    //     pendingRequest.set(requestKey, controller);
    // }
}

export function removePendingRequest(config, src) {
    const requestKey = generateReqKey(config);
    if (pendingRequest.has(requestKey)) {
        const cancel = pendingRequest.get(requestKey);
        cancel(requestKey);
        pendingRequest.delete(requestKey);
    }
}
export function removePending(config) {
    const requestKey = generateReqKey(config);
    if (pendingRequest.has(requestKey)) {
        pendingRequest.delete(requestKey);
    }
}


function generateReqKey(config) {
    // 当请求方式、请求URL地址和请求参数都一样时，我们就可以认为请求是一样的
    const { method = 'get', url, params, data } = config;
    // let data = typeof config.data === 'string' ? JSON.parse(config.data) : config.data
    return [method, url, Qs.stringify(params), Qs.stringify(data)].join("&");
}

window.pendingRequest = pendingRequest