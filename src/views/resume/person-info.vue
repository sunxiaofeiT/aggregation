<template>
  <div class="person-info">
    <div class="name">
      <span>{{ name }}</span>
    </div>
    <div class="other-info">
      <div
        v-for="(key, index) in Object.keys(info)"
        :class="`${key} each-key`"
        :key="index"
      >{{ info[key] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "person-info",
  components: {},
  data() {
    return {
      name: "孙鹏飞",
      info: {
        gender: "男",
        age: "24岁",
        experience: "1年经验",
        education: "本科",
        email: "sun_kk@outlook",
        title: "前端开发"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.person-info {
  .name {
    color: #409eff;
    font-weight: 600;
    padding-left: 0px;
    display: block;
    font-size: 40px;
    line-height: 40px;
  }
  .other-info {
      margin-top: 30px;
  }
  .each-key {
    display: inline-block;
  }
  .each-key + .each-key {
    margin-left: 20px;
  }
  .each-key + .each-key::before {
      content: ' ';
      border-left: 2px solid #409eff;
      margin-right: 20px;
  }
}
</style>