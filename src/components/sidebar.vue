<template>
  <div id="left_menu">
    <div id="menu_name">
      <h1>李雨山的博客</h1>
      <h5>我在你身旁，愈合了心伤</h5>
    </div>
    <nav>
      <ul>
        <router-link to="/article">
          <li :class="{selected:isCurrent('/article')}">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
          </li>
        </router-link>
        <router-link to="/about">
          <li :class="{selected:isCurrent('/about')}">
            <i class="iconfont icon-about-dot-me"></i>
            <span>关于</span>
          </li>
        </router-link>
        <router-link to="/admin/login">
          <li :class="{selected:isCurrent('/admin/login')}">
            <i class="iconfont icon-login"></i>
            <span>登录</span>
          </li>
        </router-link>
        <router-link to="/admin/articleList">
          <li :class="{selected:isCurrent('/admin/articleList')}">
            <i class="iconfont icon-manage_fill"></i>
            <span>管理</span>
          </li>
        </router-link>
        <router-link to="/admin/articleEdit">
          <li :class="{selected:isCurrent('/admin/articleEdit')}">
            <i class="iconfont icon-manage_fill"></i>
            <span>写文章</span>
          </li>
        </router-link>
      </ul>
    </nav>
    <div id="info">
      <img src="../assets/imgs/zuoran.jpg">
      <div id="info_name">
        李雨山
      </div>
      <div id="archive">
        <ul>
          <li>
            <span id="article-count">12</span>
            <span class="archive-text">日志</span>
          </li>
          <li>
            <span id="classification">2</span>
            <span class="archive-text">分类</span>
          </li>
          <li>
            <span id="tag">3</span>
            <span class="archive-text">标签</span>
          </li>
        </ul>
      </div>
      <ul id="contact">
        <li>
          <i class="iconfont icon-github"></i>
          <span>GitHub</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  methods: {
    isCurrent(path) {
      return this.$route.path === path;
    }
  }
}
</script>

<style scoped>
#left_menu {
  width: 240px;
  height: 1000px;
  float: left;
}

#menu_name {
  height: 110px;
  background: rgb(38, 42, 48);;
  color: white;
}

#menu_name h1 {
  font-size: 20px;
  line-height: 40px;
  font-weight: normal;
  color: white;
  padding-top: 20px;
}

#menu_name h5 {
  font-size: 8px;
  font-weight: normal;
  margin: 0 30px;
  color: #e0e0e0;
}

img {
  width: 120px;
  height: 120px;
  margin-top: 20px;
}

nav {
  background: white;
  padding: 20px 0;
  text-align: left;
}

nav li {
  height: 22px;
  padding: 8px;
  font-size: 13px;
  line-height: 22px;
  /*color: #e0e0e0;*/
  color: #555;
  padding-left: 20px;
  position: relative;
}

nav li .iconfont {
  font-size: 13px;
}

nav li span {
  margin-left: 7px;
}

nav li:hover, nav .selected {
  background: #f8f8f8;
}

nav .selected:after {
  content: " ";
  position: absolute;
  top: 50%;
  margin-top: -3px;
  right: 15px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #bbb;
}

#info {
  margin-top: 10px;
  background: white;
}

#info #info_name {
  font-weight: bold;
}

#info #contact {
  padding-bottom: 20px;
}

#archive ul {
  overflow: hidden;
  margin: 30px auto;
  width: 150px;
  display: flex;
}

#archive li {
  /*float: left;*/
  flex: 1;
  border-right: 1px solid #cbcbcb;
}

#archive li:last-of-type {
  border-right: none;
}

#archive li span {
  display: block;
}

#archive .archive-text {
  font-size: 12px;
  color: gray;

}

#contact {
  font-size: 14px;
}

#contact span {
  margin-left: 6px;
  color: #555;
}
</style>