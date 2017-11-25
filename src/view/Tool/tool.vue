<template>
	<div>
		 <div id="tool">
    <div class="toolSearch">
      <el-button type="primary" size="medium" plain>全部工具</el-button>
      <el-button type="primary" size="medium" plain>开发工具</el-button>
      <el-button type="primary" size="medium" plain>开发文档</el-button>
    </div>
    <el-row>
      <el-col :span="12" v-for="item in tools">
        <div class="toolborder">
          <div class="toolImgLeft">
            <div class="img">
              <img :src="item.icon" alt="sublime">
            </div>
            <el-button type="text" @click="official(item.url)">达官贵车</el-button>
          </div>
          <div class="toolTxtright">
            <p class="toolTitle"><span>名称：</span> {{item.title}}</p>
            <p class="toolTxt">{{item.txt}}</p>
            <div class="toolButton">
              <el-button v-if="item.windows!==''" type="primary" size="small" plain>win 64 下载</el-button>
              <el-button v-if="item.macdows!==''" type="primary" size="small" plain>mac 下载</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <vue-Footer></vue-Footer>
	</div>
 
</template>
<script>
import { tooldata } from '../../../static/toolData.js'
import fccFooter from '@/components/FCC_footer_one'
export default {
  name: 'tool',
  data() {
    return {
      tools: tooldata(),
      text: ''
    }
  },
  created() {

  },
  methods: {
    official(url) {
      window.open(url);
    }
  },
  components:{
  	"vue-Footer": fccFooter,
  }
}

</script>
<style lang="scss" scoped>
#tool {
  width: 1080px;
  margin: 0 auto;
}

.toolSearch {
  border: 1px solid #EEE;
  /* padding: 20px 40px; */
  line-height: 66px;
  height: 66px;
  padding-left: 40px;
  margin: 30px 0;
}

.toolborder {
  width: 520px;
  height: 200px;
  border: 1px solid #EEEEEE;
  .toolImgLeft {
    width: 158px;
    height: 100%;
    float: left;
    .img {
      width: 100px;
      height: 100px;
      padding: 30px;
      img {
        width: 100%;
      }
    }
    button {
      width: 100%;
      display: block;
    }
  }
  .toolTxtright {
    float: right;
    width: 347px;
    .toolTitle {
      font-size: 18px;
      font-weight: 600;
      padding: 15px 0;
    }
    .toolTxt {
      position: relative;
      line-height: 20px;
      max-height: 80px;
      font-size: 14px;
      height: 80px;
      margin-bottom: 26px;
      width: 330px;
      overflow: hidden;
      /* white-space:nowrap; */
      /*  text-overflow:ellipsis; */
      &:after {
        content: '…';
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 8px;
        padding-left: 40px;
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
        background: -o-linear-gradient(right, transparent, #fff 55%);
        background: -moz-linear-gradient(right, transparent, #fff 55%);
        background: linear-gradient(to right, transparent, #fff 55%);
      }
    }
    .toolButton {
      float: right;
      margin-right: 30px;
    }
  }
}

.el-button--text {
  color: #FF9900;
}

.el-button--text:hover {
  color: #ffbc58;
}

.el-button--text:active {
  color: #FF9900;
}
.el-button--primary.is-plain{
	    color: #FFF;
    background: rgba(64, 222, 64, 0.92);
    border-color: rgba(3, 197, 44, 0.87);
}
.el-button--primary.is-plain:focus, .el-button--primary.is-plain:hover{
	background: #ffbc58;
    border-color: #FF9900;
    color: #fff;
}
</style>
