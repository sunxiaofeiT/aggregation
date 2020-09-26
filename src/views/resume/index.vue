<template>
  <div class="resume-container">

    <el-button type="primary" @click="onPrint">打印简历</el-button>

    <div ref="resume" id="resume" class="page-container">

      <!-- personal infomation -->
      <div class="person-info">
        <div class="avater">
          <img class="avater-img" alt="简历头像" :src="avater">
        </div>
        <span class="name gray">孙鹏飞</span>
        <span class="base-info gray">
          男 | 24岁 | 1年经验 | 本科 | 18500076628 | 前端开发 |
          <a class="github" href="https://github.com/sunxiaofeiT" target="_blank"> Github </a> |
          <a class="email" :href="`mailto:${email}`">{{email}}</a>
        </span>
        <span class="desc gray">适应、学习、自主、思考</span>
        <!-- <span class="dream gray">期望：前端基础建设工作 or C端产品开发</span> -->
      </div>

      <!-- component title -->
      <div class="title-container">
        <div class="title-label blue-background">教育背景</div>
        <div class="title-left"></div>
        <div class="title-right"></div>
      </div>

      <!-- information title -->
      <div class="title-info">
        <span class="time">2015.09 -- 2019.06</span>
        <span class="location">天津大学</span>
        <span class="sub-info">软件工程专业 -- 本科</span>
      </div>

      <!-- component title -->
      <div class="title-container">
        <div class="title-label">工作经历</div>
        <div class="title-left"></div>
        <div class="title-right"></div>
      </div>

      <!-- information title -->
      <div class="title-info">
        <span class="time">2019.04 -- 至今</span>
        <span class="location">美菜-云杉世界信息技术有限公司</span>
        <span class="sub-info">前端开发工程师</span>
      </div>

      <!-- work ins -->
      <div class="detail-info">
        <ol>
          <li>业务需求开发工作
            <ul>
              <li>美家买菜微信小程序，是一个在线商城。参与了从 wepy 到 微信原生的重构工作；负责了中秋会场活动页及其配置页的开发。</li>
              <li>运营后台管理系统开发，是上边小程序以及APP对应的运营管理后端系统，采用 VUE，独立负责了各个需求评审、设计、开发、上线，无线上问题。其间积极优化代码，抽取组件。</li>
              <li>售后系统，公司售后的中台系统，主要功能是链接客服、配送、财务等系统，实现售后的各种业务逻辑（如换货、退款等），采用 VUE，除开发业务需求，还规范了项目结构，标准项目代码，例如
                API集中封装调用、本地开发环境变量、逻辑优化等</li>
              <li>地理信息系统，共分为两个部分，一个是管理系统，侧重仓库、服务区等和业务相关的管理功能；另一个是分析平台，侧重数据可视化、挖掘数据的业务价值。使用VUE +
                高德地图、百度地图，独立进行了管理系统重构工作（VUE）以及组件库开发。</li>
            </ul>
          </li>
          <li>效率提升
            <ul>
              <li>抽取公用复杂组件，将后台类页面开发时间缩短到一到两天；形成地图组件库，包括基础组件和业务组件，对外输出数据价值和地图开发经验</li>
              <li>自动化尝试，gitlab ci自动脚本实现test环境的自动发布；git hook 勾子实现 npm 包的自动发布、通知等</li>
              <li>基于 vuepress 的可扩展的支持在线编写的 markdown 文档平台 </li>
            </ul>
          </li>
          <li>主观总结
            <ul>
              <li>适应能力较强，无论是新的项目还是新的技术，上手较快。</li>
              <li>追求代码质量，工作中会优化遇到的不好的代码逻辑，平时中学习优秀库源码并组内分享。</li>
              <li>主动学习，技术项目多参与、多学习，例如学习Node网关、参与微前端建设（进程缓慢）</li>
            </ul>
          </li>
        </ol>
      </div>

      <!-- component title -->
      <div class="title-container">
        <div class="title-label">技能描述</div>
        <div class="title-left"></div>
        <div class="title-right"></div>
      </div>

      <div class="detail-info">
        <ol>
          <li>VUE 熟练掌握。因为目前工作内容大多是 VUE。例如更标准VUE项目、VUE与地图开发结合，了解其原理。</li>
          <li>React 基本掌握。React 平时学习了解，组内分享。在对外提供地图相关组件的时候，使用到了 React。</li>
          <li>地图相关开发，例如基础的地图展示、地图与数据结合、大数据情况下的加载显示优化等。</li>
          <li>NodeJs 基本掌握，NPM包的自动发布为 Node 项目，还有学习的 Node 网关项目。</li>
          <li>HTML、CSS、JS 熟练掌握，其为基础。</li>
          <li>前端工程化方面，打包工具 webpack 最熟悉、rollup 等了解。前端测试、部署等过程熟悉。</li>
        </ol>
      </div>

      <!-- component title -->
      <div class="title-container">
        <div class="title-label">自我评价</div>
        <div class="title-left"></div>
        <div class="title-right"></div>
      </div>

      <div class="detail-info">
        在简历的最开头，我用 “适应、学习、自主、思考” 这四个关键字形容我自己。说一下为什么是这四个关键字。
        <ol>
          <li>适应：项目更换，新项目、或者新技术，能做到快速上手，遇到问题困难更有动力。</li>
          <li>学习：主动学习，无论是技术的深入还是业务的了解，都要去学习，深知自己水平远远不够，喜欢未知的东西，不局限在前端开发上。但也</li>
          <li>自主：喜欢自己摸索、尝试、优化改进，例如文档平台的尝试，参与微前端构建等。</li>
          <li>思考，对自己做的东西有自己的想法和思考，不把自己定位局限在前端开发中，开阔自己的认识，最简单的了解代码带来的业务价值。</li>
          <li>最后缺点：学习有时会浅尝辄止，知其一不知其二；缺少主动分享曝光的意识，后果就是别人对你的认可度不够。这都是之后的改进重点。</li>
        </ol>
      </div>
    </div>

  </div>
</template>

<script>
const avater = require('@/assets/avater.jpg')

export default {
  name: 'resume',
  data() {
    return {
      avater,
      email: 'sun_kk@outlook.com'
    }
  },
  created() {
    window.document.title = '个人简历'
  },
  methods: {
    onPrint() {
      document.body.style.visibility = 'hidden'
      let resumeDom = this.$refs.resume
      resumeDom.style.visibility = 'visible'
      window.print(this.$refs.resume)
      document.body.style.visibility = 'inherit'
    },
  },
}
</script>

<style scoped>
.resume-container {
  padding: 40px 0;
  background-color: #eeeeee;
  font: 14px Helvetica Neue, Helvetica, PingFang SC, \5fae\8f6f\96c5\9ed1, Tahoma, Arial, sans-serif;
}

@media print {
  .no-print {
    display: none;
  }
  .page-container {
    padding: 30px 80px 0 80px !important;
    border: none !important;
    box-shadow: none !important;
  }
  .blue-background {
    background-color: #2955a1;
  }
  .page-container {
    scale: 0.8;
  }
}

button {
  top: 80px;
  right: 20px;
  position: fixed;
}

.gray {
  color: #6c6c6c;
  font-size: 16px;
}

.page-container {
  width: 790px;
  margin: 0px auto;
  position: relative;
  border-radius: 4px;
  padding: 70px 80px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

/* 个人信息 */

.person-info {
  margin-bottom: 40px;
}

.person-info span {
  display: block;
  font-size: 14px;
}

.person-info span + span {
  margin-top: 10px;
}

.person-info .name {
  height: 40px;
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: #409eff;
}

.github,
.email {
  color: #409eff;
  text-decoration: none;
}

/* 头像 */
.avater {
  float: right;
  width: 125px;
  height: 150px;
}

.avater img {
  width: 100%;
  border-radius: 4px;
}

/* 栏目标题 */

.title-container {
  width: 790px;
  margin: 20px 0;
  font-size: 18px;
  position: relative;
}

.title-label {
  border-left: 4px solid #2955a1;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  min-width: 75px;
  padding: 5px 12px;
  margin: 2px 0;
  color: #2955a1;
  font-size: 18px;
  font-weight: 600;
  /* background: #2955a1; */
  z-index: 10;
}

.title-right {
  top: 16px;
  z-index: 0;
  width: 682px;
  margin-left: 110px;
  position: absolute;
  border-bottom: 1px #2955a1 solid;
}

/* 信息标题 */

.title-info {
  color: #444444;
  font-size: 15px;
  font-weight: bold;
}

.title-info span {
  display: inline-block;
}

.title-info .time,
.title-info .location,
.title-info .sub-info {
  width: 260px;
}

/* 具体信息 */

.detail-info {
  font-size: 15px;
  line-height: 24px;
  color: #6c6c66;
}

.detail-info ol {
  padding-left: 20px;
}

/* 通用 */

ol {
  padding-left: 20px;
}

ol ul {
  padding-left: 20px;
}
</style>