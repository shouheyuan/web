import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as http from './http'
import * as utils from './utils'
import Antd from 'ant-design-vue';
import './assets/css/index.less'
import 'ant-design-vue/dist/antd.variable.min.css';
import globalComponent from './components/index.js'
const app = createApp(App)

app.config.globalProperties.$http = http
app.config.globalProperties.$utils = utils
app.use(store)
    .use(router)
    .use(Antd)
    .use(globalComponent)

app.mount('#app')
