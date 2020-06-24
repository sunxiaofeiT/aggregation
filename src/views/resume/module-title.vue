<template>
  <div class="module-title">
    <div class="border">
      <div class="title-container">
        <div class="title-name">{{ title }}</div>
        <div class="title-sow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "module-title",
  components: {},
  props: {
    title: { type: String, default: "标题" }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.module-title {
  border: 1px solid #eeeeee;
  padding: 40px 0;
  .border {
    border-top: 1px solid black;
    width: 100%;
    display: block;
    .title-container {
      position: relative;
      top: -16px;
      height: 32px;
      line-height: 32px;
    }
    .title-name {
      display: inline-block;
      height: 32px;
      padding: 0 20px;
      color: #ffffff;
      background: #409eff;
    }
  }
}
</style>