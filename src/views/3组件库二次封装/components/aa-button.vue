<template>
  <a-button v-bind="vAttrs">
    <template v-for="slotName of vSlots" v-slot:[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </a-button>
</template>

<script>
export default {
  computed: {
    vAttrs() {
      return Object.assign(
        { ...this.$attrs },
        {
          click: this.onClick,
        }
      );
    },
    vSlots() {
      return Object.keys(this.$slots);
    },
  },
  methods: {
    onClick() {
      this.$message.success("按钮组件二次封装");
      this.$emit("click");
    },
  },
};
</script>

<style>
</style>