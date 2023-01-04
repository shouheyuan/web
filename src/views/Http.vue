<template>
  <h1>This is an Http page</h1>
  <a-button @click="postRequest">POST</a-button>
  <a-button @click="getRequest">GET</a-button>
  <a-button @click="customizeConfig">自定义请求参数config</a-button>
  <a-button @click="addInterceptorsRequest">添加响应拦截器(mock)</a-button>
  <a-button @click="testInterceptorsResponse">测试自定义响应拦截</a-button>

  <br />

  <h3>传入取消请求配置</h3>
  <a-radio-group>
    <a-radio-button @click="sendResponse">发送请求</a-radio-button>
    <a-radio-button @click="cancelResponse">取消请求</a-radio-button>
  </a-radio-group>
</template>

<script>
let controller = null;

export default {
  methods: {
    postRequest() {
      let params = { method: "post" };
      this.$http.user
        .postRequest(params)
        .then((res) => {})
        .catch((err) => {});
    },
    getRequest() {
      let params = { method: "11111111111111" };
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

<style>
</style>