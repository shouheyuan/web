<template>
  <a-switch v-bind="vAttrs" @change="changeSelect">
    <template v-for="slotName of vSlots" v-slot:[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </a-switch>
</template>

<script>
export default {
  computed: {
    vAttrs() {
      return { ...this.$attrs };
    },
    vSlots() {
      return Object.keys(this.$slots);
    },
  },
  watch: {},
  created() {},
  methods: {
    changeSelect() {
      this.$emit("change", "自定义on-change");
    },
  },
};
</script>

<style>
</style>