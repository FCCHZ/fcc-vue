<template>
  <div id="AcademicHonestyPolicy">
    <h2 class="Title">关于我们</h2>
    <div class="centents">
      <h3>关于FreeCodeCamp</h3>
      <p>FreeCodeCamp是一个免费、碎片化、游戏化、自学前端编程的开源社区。</p>
      <p>由 Quincy Larson 创办的开源社区，它致力于帮助人们利用零散时间学习编程，内容以前端和JS全栈为主。目前已经发展成为一个30万开发者的社区，通过游戏化的项目实战，来吸引大家学习编程，并在社区内给予实时的帮助。同时，为 NPO、NGO 组织给予技术支持。通过学习4个部分课程，你将获得 FCC 颁布的4个证书，分别是“前端开发证书”、“数据可视化证书”、“后端开发证书”、“全栈开发证书”。</p>
      <h3>在这里可以学到什么</h3>
      <p class="sutady">
        <el-row>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-h5"></div>
          <h4>HTML5</h4>
        </el-col>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-css3"></div>
          <h4>CSS3</h4>
        </el-col>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-nodejs"></div>
          <h4>JavaScript</h4>
        </el-col>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-database"></div>
          <h4>Database</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-github-circled"></div>
          <h4>Git &amp; GitHub</h4>
        </el-col>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-node"></div>
          <h4>Node.js</h4>
        </el-col>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-react"></div>
          <h4>React.js</h4>
        </el-col>
        <el-col :span="6">
          <div class="landing-skill-icon FCC-d3"></div>
          <h4>D3.js</h4>
        </el-col>
      </el-row>
      </p>
      
      <h3>关于FreeCodeCamp杭州</h3>
      <p>FreeCodeCamp 杭州社区致力于为杭州本地 FCC 学员提供线下交流互动的平台，自2017年4月以来，FCC 成都学习小组一直有新鲜血液加入，同时在学员们积极筹划和参与下，丰富多彩的线下活动持续开展中... FCC杭州社区的线下活动形式主要为黑客马拉松、结对编程、个人分享、编程静修。线下活动一般以 Coffee & Code 的形式, 每两周举行一次, 让参与者在一个轻松愉悦的环境下学习、编程。另外，社区每一季度将举办一次黑客马拉松作为核心活动, 旨在鼓励大家创新,提升 对技术卓越的追求。</p>
      <h3>加入我们</h3>
      <p>不论你是技术大牛，还是前端菜鸟，亦或是对编程感兴趣的新人，如果你对我们成都线下交流活动感兴趣，现在就加入我们吧。很棒的是，线下交流，向大牛取经，这一切都是免费的！</p>
    </div>
  </div>
</template>
</div>
</div>
</template>
<script>
export default {
  name: "faq",
  data() {
    return {

    };
  },
  methods: {},
  components: {

  }
};

</script>
<style lang="scss" scoped>
.Title {
  text-align: center;
  padding: 10px;
}

.centents {
  padding: 15px 0;
  p {
    margin-bottom: 25px;
  }
}
h3 {
  margin-bottom:15px;
}
.sutady{
  margin-bottom:30px !important;
  .landing-skill-icon{
  margin:20px 0;
  text-align: center;
  font-size:30px;
  color:#FF9900;
}
h4{
text-align: center;
}
}


</style>
