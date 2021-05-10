<template>
  <!-- 增加个转场动画 -->
  <transition name="slide">
    <musiclist
      :title="title"
      :bg-image="bgImage"
      :song-list="songList"
    ></musiclist>
  </transition>
</template>

<script type="text/ecmascript-6">
import musiclist from "../music-list/music-list";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    musiclist,
  },
  data() {
    return {
      songList: [], // 具体的歌曲信息
    };
  },
  computed: {
    ...mapGetters(["singer"]),
    title() {
      // 歌手名称
      return this.singer.singer_name;
    },
    bgImage() {
      // 歌手图片
      return this.singer.singer_pic;
    },
    mid() {
      // 歌手mid
      return this.singer.singer_mid;
    },
  },
  created() {
    this._getDetail(this.mid);
  },
  methods: {
    _getDetail(mid) {
      let data = {
        mid: mid,
      };
      axios
        .post(
          "http://localhost:1110/api/getSingerDetailData",
          JSON.stringify(data)
        )
        .then((data) => {
          console.log(data);
          this.songList = data.data.songList;
        });
    },
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>