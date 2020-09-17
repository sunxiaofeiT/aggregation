<template>
  <div id="app">
    <div class="routers-group">
      <el-button-group>
        <el-button type="primary" @click="onClick('/home-page')">导航</el-button>
        <el-button type="primary" @click="onClick('/resume')">简历</el-button>
        <el-button type="primary" @click="onClick('/music')">音乐</el-button>
      </el-button-group>
    </div>
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    onClick(path) {
      if (this.$route.path == path) return
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less">
html,body {
  margin: 0px;
  padding: 0px;
}
.routers-group {
  top: 40px;
  right: 20px;
  z-index: 100;
  position: fixed;
}
</style>
