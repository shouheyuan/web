<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        @click="onNavMenuClick"
      >
        <a-menu-item v-for="item in comsList" :key="item.path">{{
          item.name
        }}</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="sub1">
            <template #title>
              <span> subnav 1 </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span> subnav 2 </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span> subnav 3 </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px">
        <a-layout-content class="article-wrapper">
          <a-page-header
            v-if="activeRoute"
            :title="activeRoute.meta.title"
            :sub-title="activeRoute.meta.subTitle"
            ><template #backIcon></template
          ></a-page-header>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      comsList: [],
      selectedKeys1: [],
      collapsed: false,
      activeRoute: null,
    };
  },
  created() {
    const { routes } = this.$router.options;
    this.comsList = routes[0].children;
  },
  methods: {
    onNavMenuClick({ item, key, keyPath }) {
      this.$router.push({ path: "/" + key });
      setTimeout(() => {
        this.activeRoute = this.$route;
      });
    },
  },
};
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
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
  background-color: #fff;
  padding: 0 24px 24px;
  margin: 0;
}
</style>
