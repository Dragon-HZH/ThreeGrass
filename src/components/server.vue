<template>
  <div class="boxf">
    <ul>
      <li :class="{'tab_1':sk[0]}" @click="changes(0,$event)">
        <span>消费者服务</span>
        <img src="../assets/jt.png" />
        <ul>
          <li>
            <router-link to>防伪查询</router-link>
          </li>
          <li>
            <router-link to>美肤秘籍</router-link>
          </li>
          <li>
            <router-link to>试用分享</router-link>
          </li>
          <li>
            <router-link to>售后维权</router-link>
          </li>
        </ul>
      </li>
      <li :class="{'tab_2':sk[1]}" @click="changes(1,$event)">
        <span>代理商服务</span>
        <img src="../assets/jt.png" />
        <ul>
          <li>
            <router-link to>防串货码查询</router-link>
          </li>
          <li>
            <router-link to>代理商申请</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="b_box">
      <span>点击右方图标，关注我们！</span>
      <div>
        <router-link to>
          <img src="../assets/k1.png" />
        </router-link>
        <router-link to>
          <img src="../assets/k3.png" />
        </router-link>
        <router-link to>
          <img src="../assets/k4.png" />
        </router-link>
      </div>
    </div>
    <div class="fw_foot">
        <p>
            ©上海****企业发展有限公司
        </p>
        <p>
            沪ICP备17******8号-1
        </p>
        <p>
            官方网站：
            <a href="http://m.saselomo.com/" target="_self">m.saselomo.com</a>
        </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sk: [true, true]
    };
  },
  methods: {
    changes(i, e) {
      if (e.target.nodeName === "LI") {
        this.$set(this.sk, i, !this.sk[i]);
      }
    }
  }
};
</script>
<style scoped>
.boxf {
  background-color: #f2f2f2;
}
.boxf::before {
  content: "";
  display: table;
}
.boxf > ul {
  margin: 1.5rem 1.5rem 0 1.5rem;
}
.boxf > ul > li {
  position: relative;
  line-height: 2rem;
}
.boxf > ul > li > span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #002538;
}
.boxf > ul > li > img {
  width: 20px;
  position: absolute;
  top: 7px;
  right: 2px;
  transition: all 0.3s;
}
.boxf li > ul {
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
}
.boxf li.tab_1 ul {
  height: 16rem;
}
.boxf li.tab_2 ul {
  height: 8rem;
}
.boxf > ul > li.tab_1 > img,
.boxf > ul > li.tab_2 > img {
  transform: rotate(180deg);
}

.boxf > ul > li li {
  position: relative;
}
.boxf > ul > li li a {
  padding: 1rem 0 1rem 1rem;
  display: block;
  width: 100%;
  height: 100%;
  color: rgba(0, 0, 0, 0.7);
}
.boxf > ul > li li:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.boxf > ul > li li::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: 0.5rem solid transparent;
  border-left: 0.5rem solid rgba(0, 0, 0, 0.486);
  position: absolute;
  top: 1.45rem;
  left: 0.25rem;
}

.b_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.16);
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
}
.b_box div > a img {
  width: 65%;
}
.b_box div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.fw_foot{
    text-align: center;
    padding: 1.5rem;
    font-size: 0.85rem;
    line-height: 1.25rem;
}
</style>