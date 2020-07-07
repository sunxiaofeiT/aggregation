<template>
  <div class="content-container" ref="container">
    <el-input
      ref="input"
      class="input-with-select"
      v-model="keyword"
      size="big"
      placeholder="输入搜索内容"
      @change="onSearch"
    >
      <el-select class="search-select" v-model="way" slot="prepend" placeholder="搜索引擎">
        <el-option
          v-for="(item, index) in ways"
          :key="index"
          :label="item.label"
          :value="item.id"
        >{{ item.label }}</el-option>
      </el-select>
      <el-button
        slot="append"
        class="search-button"
        icon="el-icon-search"
        @click="onSearch"
      >搜索</el-button>
    </el-input>
  </div>
</template>

<script>
const WAYARR = [
  { id: 1, label: "百度搜索", value: "https://www.baidu.com/s?wd=" },
  { id: 2, label: "多吉搜索", value: "https://www.dogedoge.com/results?q=" }
]
export default {
  name: "home-page",
  components: {},
  data() {
    return {
      way: 2,
      ways: WAYARR,
      keyword: ""
    }
  },
  beforeCreate() { document.title = '简约标签页' },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    onSearch() {
      const selectedWay = this.ways.filter(item => item.id === this.way)[0]
      if (!selectedWay) return
      window.location.href = `${selectedWay.value}${this.keyword}`
    },
  }
}
</script>

<style lang="less" scoped>
.content-container {
  width: 600px;
  margin: auto;
  margin-top: 200px;
}
.search-select {
  color: #409eff;
  width: 110px;
}
.el-input-group__append button.el-button {
  color: #409eff;
}
</style>