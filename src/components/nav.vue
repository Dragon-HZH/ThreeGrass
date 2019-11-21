<template>
  <div class="conter">
    <el-header class="nav">
      <!-- 首页导航 -->
      <router-link to="/" class="style_a">
        <img :src="navs['log']" class="ctop" />
      </router-link>
      <!-- 按钮 -->
      <button class="rb rb1" @click="changeTo"></button>
    </el-header>

    <!-- 剧幕 -->
    <div class="bgs setTop" :class="{'bgsH':switchs}"></div>

    <!-- 菜单 -->
    <div class="setTop right" :class="{'right1':switchs}">
      <ul>
        <li>
          <span><router-link to="/" class="style_a">
            <img :src="navs['log']"  />
          </router-link>
          </span>
          <button class="rb rb2" @click="changeTo"></button>
        </li>
        <li>
          <span><a href="/"> 首页</a></span>
        </li>
        <li v-for="(item,key) of navs.menu" :key='key' :class="{'no':stList[key]}" @click="tokit(key,$event)"><span>{{item.title}}</span> <img src="../assets/jt.png" > 
          <dl >
            <dt>
              <span v-for="(i,index) of item.list" :key="index">{{i}}</span>
              
            </dt>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchs: false,
      stList:[false,false,false,false,false]
    };
  },
  props:['navs'],
  methods: {
    changeTo() {
      console.log(this.navs)
      this.switchs = !this.switchs;
    },
    tokit(i,e){
      // console.log(e.target.nodeName)
      if(e.target.nodeName==='LI'){
        if(this.stList[i]!=true){
          for(let s=0;s<this.stList.length;s++){
            this.stList[s]=false;
          }
        }
        this.$set(this.stList,i,!this.stList[i])
      }
    }
  }
}
</script>
<style scoped>
/* 外部容器 */
.conter {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
}
/* 导航条位置 */
.nav {
  background-color: #fff;
  z-index: 99;
}
/* 顶部剧幕 */
.bgs {
  width: 100%;
  background-color: rgba(102, 102, 102, 0.753);
  height: 0;
  transition: all 0.5s;
}
.bgsH {
  height: 1000px;
}
/* 左边 */
.style_a {
  display: inline-block;
  line-height: 60px;
}

.style_a>img {
  width: 145px;
  height: 39px;
  position: relative;
  top: 12px;
}

/* 按钮 */
.rb1 {
  background: url(../assets/menu-t.png) no-repeat;
}
.rb2 {
  background: url(../assets/menu-ts.png) no-repeat;
}
.rb {
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
  border: 0px solid transparent;
  outline: none;
  background-size: 60px 60px;
  position: absolute;
  top: 0;
  right: 0;
}

.setTop {
  position: absolute;
  top: 0;
}

.right {
  background-color: #fff;
  width: 82%;
  height: 1000px;
  right: -82%;
  transition: all 0.5s;
}

.right1 {
  right: 0;
}

.right li {
  /* padding-left: 20px; */
  position: relative;
}
.right li>span{
  margin-left: 20px;
}
.right li:not(:first-child) {
  border-bottom: 1px solid rgba(102, 102, 102, 0.753);
  line-height: 58px;
  font-weight: bold;
  font-size: 1rem;
}


li>img{
  width: 20px;
  position: absolute;
  right: 20px;
  top: 22px;
}

li dl{
  border-top: 1px solid rgba(102, 102, 102, 0.342);
  overflow: hidden;
  transition: all .3s;
  height: 0px;
}
li.no dl{
  display: block;
  height: 117px;
}
li>span+img{
  transition: all .3s;
}
li.no img{
  transform: rotate(180deg)
}

dl>dt{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
dl>dt>span{
  width: 33.3%;
  text-align: center;
  color:rgba(102, 102, 102, 0.678);
  font-weight: bold;
  border-bottom: 1px solid rgba(102, 102, 102, 0.342);
}
dl>dt>span:last-child{
  margin-right: auto;
}

</style>