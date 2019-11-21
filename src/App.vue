<template>
  <el-container id="app">
    <router-view />
  </el-container>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import './assets/reset.css';
#app{
  padding: 60px 0;
}
</style>
