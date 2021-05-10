<template>
  <div ref="singer" class="singer">
    <listview ref="list" :data="singerlist" @select="selectSinger"></listview>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
import listview from "../base/listview";
import { mapMutations } from "vuex" // 取得工具函数
import { playlistMixin } from "../../common/js/mixin";

export default {
  components: {
    listview
  },
  mixins: [playlistMixin],
  data() {
    return {
      singerlist: []
    }
  },
  created() {
    // 请求数据
    axios.get("http://localhost:1110/api/getSingerData").then(data => {
      // onsole.log(data.data);
      this.singerlist = data.data;
    })
  },
  methods: {
    handlePlaylist(playlist) {
      // 监听是否得到了playlist的值
      this.$refs.singer.style.bottom = playlist.length > 0 ? "70px" : "";
      this.$refs.list.refresh();
    },
    selectSinger(singerItem) { // 由子组件的点击事件触发的父组件事件
      this.$router.push({
        path: `/singer/${singerItem.singer_mid}` // 变更路由, 触发子组件
      });

      console.log(singerItem)
      this.setsinger(singerItem); // 存储数据, 存储基本的歌手信息
    },
    ...mapMutations({ // 绑定对应的方法
      setsinger: "SET_SINGER"
    })
  }
}
</script>

<style scoped lang="stylus">
    .singer
        position: fixed
        top: 88px
        bottom: 0
        width: 100%
</style>
