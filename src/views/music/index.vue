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
            <span class="name">{{ item.name }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import * as FileSaver from "file-saver";

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
  methods: {
    onSearchMusicName() {
      this.isSearching = true;
      axios.post(`/music/search?keywords=${this.name}`).then(res => {
        console.log(res.data);
        this.musicArr = res.data.result.songs || [];
        this.getUrlById(this.musicArr[0].id);
        this.isSearching = false;
      });
    },

    getUrlById(id) {
      axios.post(`/music/song/url?id=${id}`).then(res => {
        console.log(res.data.data);
        const songs = res.data.data;
        this.downloadByUrl(songs[0]);
      });
    },

    downloadByUrl(music) {
      FileSaver.saveAs(music.url, music.name);
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
}
</style>