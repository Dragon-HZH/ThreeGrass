<template>
  <el-footer class="foot">
    <div class="toTops" @click="toTop">
      <img :src="foots.top" />
    </div>
    <a :href="item.url" v-for="(item,k) of foots.list" :key="k">
      <img :src="item.pic" />
      <span> {{item.title}}</span>
    </a>
  </el-footer>
</template>
<script>
export default {
  data() {
    return {
      scrollTop:0
    };
  },
  props:['foots'],

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    toTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      
    }
  }
};
</script>
<style scoped>
.foot {
  width: 100%;
  padding: 0;
  position: fixed;
  bottom: 0;
  background-color: #005238;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.foot span {
  /* font-weight: bold; */
  color: #fff;
  font-size: 0.8rem;
}
.foot a {
  position: relative;
}
.foot a:not(:last-child):after {
  content: "";
  display: inline-block;
  width: 0;
  height: 33px;
  border-left: 1px dashed #fff;
  position: absolute;
  top: -7px;
  right: -10px;
}
.foot img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}
.toTops {
  position: absolute;
  top: -1.75rem;
  right: 0.75rem;
}
.toTops img {
  width: 3.5rem;
  height: 1.5rem;
}
.toTops::after {
  content: "Top";
  color: #fff;
  position: absolute;
  right: 0.95rem;
  top: 0.25rem;
}
</style>