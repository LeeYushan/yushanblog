<template>
  <div class="content">
    <div class="article_wrap">
      <div class="article_title">天官赐福</div>
      <div class="article_info">
        <span class="article_info_date">发表于：2022-1-30 | </span>
        <span class="article_info_tag">标签:
          <el-tag size="mini" type="info">花城</el-tag>
          <el-tag size="mini" type="info">谢怜</el-tag>
        </span>
      </div>
      <div class="article_gist">
        <p>八百年前，谢怜是金枝玉叶的太子殿下，风光无限的天之骄子。谁知一朝得道飞升，成为万人供奉的武神，却是急转直下，一贬再贬贬无可贬。八百年后，谢怜又双叒飞升了。这一次没有信徒也没有香火，某日收破烂归来的路上，他将一个神秘少年捡回家中，而这少年，居然便是那位三界谈之色变的鬼王——花城。</p>
      </div>
      <div class="article_button">阅读全文 »</div>
      <div class="article_underline"></div>
    </div>
    <div class="article_wrap">
      <div class="article_title">默读</div>
      <div class="article_info">
        <span class="article_info_date">发表于：2022-1-30 | </span>
        <span class="article_info_tag">标签:
          <el-tag size="mini" type="info">骆闻州</el-tag>
          <el-tag size="mini" type="info">费渡</el-tag>
        </span>
      </div>
      <div class="article_gist">
        <p>童年，成长经历，家庭背景，社会关系，创伤……</p>
        <p>我们不断追溯与求索犯罪者的动机，探寻其中最幽微的喜怒哀乐，不是为了设身处地同情、乃至于原谅他们，不是为了给罪行以开脱的理由，不是为了跪服于所谓人性的复杂，不是为了反思社会矛盾，更不是为了把自己也异化成怪物——</p>
        <p>我们只是在给自己、给仍然对这个世界抱有期望的人——寻找一个公正的交待而已。</p>
      </div>
      <div class="article_button">阅读全文 »</div>
      <div class="article_underline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "article"
}
</script>

<style scoped>
.content{
  /*width: 100%;*/
  /*height: 1000px;*/
  margin-left: 250px;
  background: white;
  padding: 50px 50px;
}

.content .article_wrap{
  margin-top: 50px;
  color: #555;
}

.content .article_wrap .article_title{
  font-size: 22px;
}

.article_info{
  margin-top: 20px;
  font-size: 12px;
  color: rgb(153,153,153);
}

.article_info span>*{
  margin-left: 5px;
}

.content .article_wrap .article_gist{
  text-align: left;
  text-indent: 2em;
  margin-top: 60px;
  line-height: 2;
  margin-bottom: 40px;
}

.article_button{
  width: 112px;
  height: 32px;
  border: 2px solid black;
  box-sizing: border-box;
  margin: 0px auto;
  line-height: 28px;
  font-size: 14px;
}

.article_button:hover{
  background: black;
  color: white;
  cursor: pointer;
}

.article_underline{
  width: 67px;
  height: 1px;
  background: rgb(204,204,204);
  margin: 80px auto;
}


</style>