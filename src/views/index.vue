<template>
  <div class="hello">
    <Nav class="nav" :navs="obj.nav" />
    <Body class="body" :bodys="obj.bodys"  />
    <Footer :foots="obj.foot" />
  </div>
</template>

<script>
  import Nav from '../components/nav'
  import Footer from '../components/footer'
  import Body from '../components/body'
export default {
  data(){
    return {
      obj:{}
    }
  },
  components:{
    Nav,Footer,Body
  },
  methods:{
    
  },
  created(){
    this.axios.get('/api/test').then(
        (res)=>{
          this.obj=res.data
          // console.log(res.data)
          // console.log(res.data.nav.logo)
        }
      ).catch(
        (err)=>{
          console.log(err)
        }
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: rgb(255, 255, 255);
}
.nav{
  z-index: 100;
}
.body{
  width: 100%;
}

</style>
