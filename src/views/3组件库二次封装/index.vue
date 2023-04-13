<template>
  <code-box>
    <template #demo>
      <div>
        <h1>Switch 开关</h1>
        <aa-switch v-model:checked="checked">
          <template #checkedChildren>111</template>
          <template #unCheckedChildren>222</template></aa-switch>

        <h1>Button 按钮</h1>
        <aa-button type="primary" @click="buttonClick">Primary Butto</aa-button>
        <aa-button @click="buttonClick">Default Butto</aa-button>
        <aa-button type="dashed" @click="buttonClick">Dashed Butto</aa-button>
      </div>
    </template>
  </code-box>
</template>
<script setup>
import aaSwitch from "./components/aa-switch.vue";
import aaButton from "./components/aa-button.vue";
</script>
<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  created() { },
  methods: {
    onChange() {
      this.$message.destroy();
      this.$message.success("切换");
    },
    buttonClick() {
      // this.$message.destroy();
      this.$message.success("按钮被点击");
    },
  },
};
</script>