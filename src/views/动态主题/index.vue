<template>
  <div>
    <a-alert message="需要切换less文件" type="warning" />
    <a-row>
      <a-col :span="24">
        <h1>动态改变主题色</h1>
      </a-col>
      <a-col :span="12">
        <a-radio-group @change="onChange">
          <a-radio-button value="red">红色</a-radio-button>
          <a-radio-button value="green">绿色</a-radio-button>
          <a-radio-button value="yellow">黄色</a-radio-button>
        </a-radio-group>
      </a-col>
      <a-col :span="12">
        <a-button type="primary">按钮的主题色</a-button>
      </a-col>
    </a-row>

    <h1>全局主题色-使用ant API</h1>
    <a-button danger type="primary">Primary Button</a-button>
    <a-button danger>Default Button</a-button>
    <a-button danger type="dashed">Dashed Button</a-button>
    <a-button danger type="text">Text Button</a-button>
    <a-button danger type="link">Link Button</a-button>
    <br />
    <input
      type="color"
      :value="colorState.errorColor"
      @input="(e) => onColorChange('errorColor', e)"
    />
    <span style="color: var(--ant-error-color)">var(`--ant-error-color`)</span>
  </div>
</template>

<script>
import { ConfigProvider } from "ant-design-vue";
import themes from "./theme";
export default {
  data() {
    return {
      colorState: {
        errorColor: "#1890ff",
      },
    };
  },
  methods: {
    // 自定义配置
    onChange(e) {
      const theme = e.target.value;
      const nextTheme = themes[theme];
      Object.keys(nextTheme).forEach((key) => {
        document.documentElement.style.setProperty(key, nextTheme[key]);
      });
    },

    // 切换全局样式
    onColorChange(type, e) {
      Object.assign(this.colorState, { [type]: e.target.value });
      ConfigProvider.config({
        theme: this.colorState,
      });
    },
  },
};
</script>

<style>
</style>