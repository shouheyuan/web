<template>
  <section class="code-box">
    <section class="code-box-demo">
      <slot name="demo"></slot>
    </section>
    <section class="code-box-meta">
      <div class="code-box-title">
        <a-divider orientation="left" dashed>
          <slot name="title"></slot>
        </a-divider>
      </div>
      <div class="code-box-description">
        <slot name="description"></slot>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "CodeBox",
};
</script>