<template>
  <div class="page-content">
    <el-row>
      <el-col :span="14" :offset="4" class="container">
        <div class="title">歌曲</div>
        <div class="form">
          <el-input v-model="name" />
        </div>
        <div class="buttons">
          <el-button
            type="primary"
            :icon="isSearching ? 'el-icon-loading' : ''"
            @click="onSearchMusicName"
          >搜索</el-button>
        </div>
        <div class="music-list">
          <div v-for="(item, index) in musicArr" :key="index" class="each-music">
            <span class="number">{{ index + 1 }}</span>
            <el-button type="text" class="name" size="large" @click="onClickDown(item)">{{ item.name }}</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import * as FileSaver from "file-saver";

const host = '//music.spf.ink/api'

export default {
  name: "music",
  components: {},
  data() {
    return {
      name: "纸短情长",
      musicArr: [],
      isSearching: false
    };
  },
  created() {
    window.document.title = '歌曲下载'
  },
  methods: {
    onSearchMusicName() {
      this.isSearching = true;
      axios.post(`${host}/search?keywords=${this.name}`).then(res => {
        console.log(res.data);
        this.musicArr = res.data.result.songs || [];
        this.isSearching = false;
      });
    },

    getUrlById(id) {
      axios.post(`${host}/song/url?id=${id}`).then(res => {
        console.log(res.data.data);
        const songs = res.data.data;
        this.downloadByUrl(songs[0]);
      });
    },

    onClickDown(item) {
      console.log(item)
      if (!item.id) return
      this.currentMusic = item
      this.$message.success('正在下载...')
      this.getUrlById(item.id)
    },

    downloadByUrl(music) {
      console.log(music)
      FileSaver.saveAs(music.url, this.currentMusic.name);
    }
  }
};
</script>

<style lang="less" scoped>
.page-content {
  margin-top: 100px;
  .container {
    border: 1px solid #eeeeee;
    padding: 30px 10px;
    border-radius: 4px;
    .title {
      margin: 10px 0;
      font-size: 18px;
      font-weight: 600;
    }
    .form {
      margin-top: 40px;
    }
    .buttons {
      text-align: right;
      margin-top: 20px;
    }
  }
  .each-music {
    margin: 0px 4px;
    // padding: 10px 0;
    border-bottom: 1px solid #eeeeee;
    .number {
      margin-right: 10px;
    }
  }
}
</style>