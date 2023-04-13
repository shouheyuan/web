<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }" @click="onNavMenuClick">
          <a-menu-item v-for="item in data.meunList" :key="item.name">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px">
        <a-layout-content class="article-wrapper">
          <!-- <a-page-header v-if="activeRoute" :title="activeRoute.meta.title"
            :sub-title="activeRoute.meta.subTitle"><template #backIcon></template></a-page-header> -->
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'
import { routeDataProcessor } from './utils'
const router = useRouter()


const data = reactive({
  meunList: [],
})
data.meunList = routeDataProcessor(router.getRoutes())

const onNavMenuClick = ({ item, key, keyPath }) => {
  let path = `/${key}`
  router.push({ path })
}
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 30%);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.article-wrapper {
  min-height: calc(100vh - 112px);
  padding: 0 24px 24px;
  margin: 0;
  background-color: #fff;
}
</style>
