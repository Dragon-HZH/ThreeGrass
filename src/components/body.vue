<template>
  <div class="content">
    <!-- 部分一 -->
    <div class="cont">
      <div v-for="(item,k) of bodys.first" :key="k">
        <router-link to v-for="(e,m) of item" :key="m">
          <img :src="e" />
        </router-link>
      </div>
    </div>
    <!-- 部分二  推荐-->
    <div class="tuiJian">
      <h3>
        <img :src="bodys.second.url" />
        <span>{{bodys.second.title}}</span>
      </h3>
      <div v-for="(item,k) of bodys.second.list" :key="k">
        <router-link to>
          <img :src="item.pic" />
          <div>
            <img :src="bodys.second.hg" />
            <span>{{bodys.second.title}}</span>
          </div>
        </router-link>
        <div>
          <h3>
            <span>{{item.ts}}</span>
            <span>{{item.money}}</span>
          </h3>
          <div class="jump">
            <a :href="item.toT">去天猫买</a>
            <a :href="item.toJ">去天京东买</a>
          </div>
        </div>
      </div>
      <h4>
        <a :href="bodys.second.mx">查看明星产品</a>
      </h4>
    </div>
    <!-- 部分三 热销 -->
    <div class="reXiao">
      <div class="title">
        <h3>{{bodys.three.title}}</h3>
        <span>{{bodys.three.text}}</span>
      </div>
      <div class="box">
        <div v-for="(item,k) of bodys.three.list" :key="k">
          <img :src="item.url" />
          <span>{{item.title}}</span>
          <p>{{item.text}}</p>
        </div>
      </div>
      <h4>
        <a :href="bodys.three.rx">查看热销产品</a>
      </h4>
    </div>
    <!-- 部分四 美肤秘籍 -->
    <div class="miJi">
      <router-link to>
        <img src="../assets/016.jpg" />
      </router-link>
      <router-link to>
        <img src="../assets/017.jpg" />
      </router-link>
    </div>
    <!-- 服务 子组件-->
    <Server />
  </div>
</template>
<script>
import Server from "./server";
export default {
  data() {
    return {};
  },
  props: ["bodys"],
  components: {
    Server
  }
};
</script>
<style scoped>
/* 容器 */
.cont img {
  width: 100%;
}
.cont > div:not(:last-child) {
  margin-bottom: 4px;
}
.cont > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
}
.cont > div:nth-child(3) a {
  width: 49%;
  overflow: hidden;
}

/* 部分二 */
.tuiJian {
  padding-bottom: 1.5rem;
}

.tuiJian > h3 {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.7);
  margin: 20px;
}
.tuiJian > h3 img {
  width: 70px;
}
.tuiJian > h3 span {
  position: relative;
}
.tuiJian > h3 span::before {
  content: "为您推荐";
  position: absolute;
  top: -8px;
  left: -62px;
  font-size: 0.8rem;
  color: #fff;
}
.tuiJian div a > img {
  width: 100%;
}
.tuiJian > div {
  position: relative;
  padding-bottom: 2rem;
}
.tuiJian > div > a > div {
  position: absolute;
  top: 5%;
  left: 5%;
  border-radius: 50px;
  border: 1px dashed #0000008a;
  background-color: #fff;
  width: 4rem;
  height: 4rem;
  line-height: 1.2rem;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tuiJian > div > a > div img {
  width: 1.5rem;
}
.tuiJian > div > a > div span {
  display: block;
  font-size: 0.85rem;
  font-weight: bold;
}
.tuiJian > div > div {
  padding: 0.75rem 1.25rem 0;
}
.tuiJian > div > div > h3 {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
}
.tuiJian > div > div > h3 span {
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
}
.tuiJian > div > div > h3 span:last-child {
  color: #005238;
}

.tuiJian > div > div .jump {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.199);
  border-bottom: 1px dashed rgba(0, 0, 0, 0.199);
}
.tuiJian > div > div .jump > a {
  border-radius: 0.95rem;
  padding: 0.25rem 0.75rem;
  display: inline-block;
  margin-right: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.199);
}
h4 > a {
  display: block;
  width: 40%;
  border-radius: 0.95rem;
  padding: 0.55rem 0;
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
  border: 1px solid #000;
}

/* 热销 */
.reXiao {
  background: url(../assets/bg.png) no-repeat;
  background-size: 100% auto;
  padding-bottom: 1.25rem;
}
.title {
  padding-top: 2rem;
  text-align: center;
}
.title h3 {
  font-weight: bold;
  font-size: 1.5rem;
  padding-bottom: 0.3rem;
  color: rgba(0, 0, 0, 0.7);
}
.title h3 + span {
  color: rgba(88, 88, 88, 0.596);
}

.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.box > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
.box > div img {
  width: 90%;
}
.box > div span {
  border-bottom: 1px dashed rgba(0, 0, 0, 0.199);
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: #005238;
  font-weight: bold;
}
.box > div span + p {
  color: rgba(88, 88, 88, 0.596);
}

/* 秘籍 */
.miJi a {
  display: block;
}
.miJi img {
  width: 100%;
}
</style>