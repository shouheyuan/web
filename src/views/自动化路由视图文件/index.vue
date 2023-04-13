<template>
    <code-box>
        <template #demo>
            <pre>
                <code>
                    import { createRouter, createWebHistory } from 'vue-router'
                    const router = createRouter({
                    history: createWebHistory(),
                    routes: []
                    })

                    const requireComponent = require.context(
                    // 组件目录的相对路径
                    './views',
                    // 是否查询子目录
                    true,
                    // 匹配基础组件文件名的正则表达式
                    /\\.vue$/
                    )

                    requireComponent.keys().forEach(fileName => {
                    // 获取组件配置
                    const componentConfig = requireComponent(fileName)

                    // 获取组件名称
                    const componentName = fileName
                        .split('/')
                        .pop()
                        .replace(/\\.\\w+$/, '')

                    // 自动注册组件
                    router.addRoute({
                        path: `/${componentName.toLowerCase()}`,
                        component: componentConfig.default || componentConfig
                    })
                    })

                </code>
            </pre>
        </template>
        <template #title> Vue3 自动导入 </template>
        <template #description>
            <span>使用require.context函数获取实例，router.addRoute动态添加。</span> 
            <a-alert message="更多：https://lumpy-bandicoot-26c.notion.site/vue-router-be82bafe2b2d4ce1a2eb7a317e8888e9" type="success" />
        </template>
    </code-box>
</template>