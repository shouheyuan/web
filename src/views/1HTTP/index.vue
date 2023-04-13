<template>
  <code-box>
    <template #demo>
      <a-button @click="postRequest">POST</a-button>
      <a-button @click="getRequest">GET</a-button>
      <a-button @click="customizeConfig">自定义请求参数config</a-button>
      <a-button @click="addInterceptorsRequest">添加响应拦截器(mock)</a-button>
      <a-button @click="testInterceptorsResponse">测试自定义响应拦截</a-button>
    </template>
    <template #title> 基础 </template>
    <template #description>
      1. post、get参数保持一致 2. 覆盖默认请求参数 3. 响应拦截处理 4.
      mock接口数据方式 5.解决接口重复调用
    </template>
  </code-box>

  <code-box>
    <template #demo>
      <a-button @click="sendResponse" class="mr-5">发送请求</a-button>
      <a-button @click="cancelResponse">取消请求</a-button>
    </template>
    <template #title>用户手动取消</template>
    <template #description>用于上传取消</template>
  </code-box>

</template>

<script>
let controller = null;

export default {
  methods: {
    postRequest() {
      let params = { userId: 1, title: "测试标题", body: "李雷" };
      this.$http.user
        .postRequest(params)
        .then((res) => {})
        .catch((err) => {});
    },
    getRequest() {
      let params = {};
      this.$http.user
        .getRequest(params)
        .then((res) => {})
        .catch((err) => {});
    },
    customizeConfig() {
      let params = { method: "get" };
      this.$http.user.customizeConfig(params);
    },
    addInterceptorsRequest() {
      this.$http.user.addInterceptorsRequest().catch((err) => console.log(err));
    },
    testInterceptorsResponse() {
      this.$http.user
        .testInterceptorsResponse()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sendResponse() {
      controller = new AbortController();
      this.$http.user
        .cancelResponse(
          {},
          {
            signal: controller.signal,
          }
        )
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },
    cancelResponse() {
      controller.abort();
    },
  },
};
</script>

<!-- <style lang="less" scoped></style> -->