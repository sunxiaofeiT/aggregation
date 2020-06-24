<template>
  <div class="body-content">
    <div class="resume-container">
      <div>dfafsafa</div>

      <!-- 个人信息 -->
      <person-info />

      <!-- 一句话简介 -->
      <div class="one-word">
          <span class="word">{{ oneWord }}</span>
          <span class="github">{{ github }}</span> 
      </div>

      <!-- 教育背景 -->
      <div class="education">
          <module-title title="教育背景" />
      </div>

    </div>
  </div>
</template>

<script>
import personInfo from './person-info'
import moduleTitle from './module-title'

export default {
  name: "resume-container",
  components: { personInfo, moduleTitle },
  data() {
    return {
        oneWord: '适应、学习、自主、思考',
        github: 'https://github.com/sunxiaofeiT',
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@module-clearance: 30px; // 模块之间的间隙

.body-content {
  padding: 40px 20px;
}

.resume-container {
  margin: 0 auto;
  max-width: 1200px;
  border-top: 2px solid #eeeeee;
  padding: 30px 20px;
  border: 1px solid black;
}

.one-word{
    margin-top: @module-clearance;
    .github {
        margin-left: 60px;
        color: #409eff;
    }
}

.education {
    margin-top: @module-clearance;

}
</style>