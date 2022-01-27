<template>
  <div id="app">
    <div class="black_line"></div>
    <div id="main">
      <sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
*{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
  //color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}

.black_line{
  height: 3px;
  background: black;
  width: 100%;
}

body{
  background: #f5f7f9;
}

#main{
  width:1150px;
  height: 1000px;
  margin: auto;
}
</style>
<script>
import Sidebar from "./components/sidebar";
export default {
  components: {Sidebar}
}
</script>