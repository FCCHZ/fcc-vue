<template>
  <div id="contactUs">
    <h2 class="Title">联系我们</h2>
    <div class="centent">
      <ul>
        <li v-for="item in tableData">
        <p class="contribution">{{item.contribution}}</p>
      <p class="name" @click="goGiter(item.giter)">{{item.name}}</p></li>
      </ul>
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
      tableData: [{
        contribution: '中文社区',
            name: '@JackJin',
            giter:'https://gitter.im/JackJin2014'
      },{
        contribution: '英文社区',
            name: '@QuincyLarson',
            giter:'https://gitter.im/QuincyLarson'
      },{
        contribution: 'Facebook 主页',
            name: '@QuincyLarson',
            giter:'https://gitter.im/QuincyLarson'
      },{
        contribution: 'Twitter 流',
            name: '@QuincyLarson',
            giter:'https://gitter.im/QuincyLarson'
      },{
        contribution: 'Medium 平台',
            name: '@QuincyLarson',
            giter:'https://gitter.im/QuincyLarson'
      },{
        contribution: '媒体合作',
            name: '@QuincyLarson',
            giter:'https://gitter.im/QuincyLarson'
      },{
        contribution: '开源代码贡献',
            name: '@BerkeleyTrue',
            giter:'https://gitter.im/BerkeleyTrue'
      },{
        contribution: '服务器问题',
            name: '@BerkeleyTrue',
            giter:'https://gitter.im/BerkeleyTrue'
      },{
        contribution: '非盈利项目',
            name: '@CodeNonprofit',
            giter:'https://gitter.im/CodeNonprofit'
      },{
        contribution: '志愿者',
            name: '@CodeNonprofit',
            giter:'https://gitter.im/CodeNonprofit'
      },{
        contribution: 'Commit program',
            name: '@CodeNonprofit',
            giter:'https://gitter.im/CodeNonprofit'
      },{
        contribution: 'Video 挑战课程',
            name: ' @BrianaMarie',
            giter:'https://gitter.im/BrianaMarie'
      },{
        contribution: 'Twitch.tv 频道',
            name: '@Septimus',
            giter:'https://gitter.im/Septimus'
      },{
        contribution: 'Youtube 频道',
            name: '@Septimus',
            giter:'https://gitter.im/Septimus'
      },{
        contribution: 'JavaScript 课程',
            name: '@SaintPeter',
            giter:'https://gitter.im/SaintPeter'
      },{
        contribution: '数据科学与开放数据',
            name: '@Evaristoc',
            giter:'https://gitter.im/Evaristoc'
      },{
        contribution: 'CamperBot',
            name: '@LTegman',
            giter:'https://gitter.im/LTegman'
      },{
        contribution: '翻译和国际化',
            name: '@Vtamara',
            giter:'https://gitter.im/Vtamara'
      },{
        contribution: 'Wiki',
            name: '@Rafase282',
            giter:'https://gitter.im/Rafase282'
      },{
        contribution: '营地',
            name: '@Hallaathrad',
            giter:'https://gitter.im/Hallaathrad'
      }]
    };
  },
  methods: {
    goGiter(url) {
      window.open(url);
    },
  },
  components: {

  }
};

</script>
<style lang="scss" scoped>
.Title {
  text-align: center;
  padding: 10px;
}

.centent {
  padding: 15px 0;
  ul li{
    height:40px;
    border-bottom:1px solid #EEE;
    line-height:40px;
  }
  .contribution{
    float:left;
    padding-left:20px;
  }
  .name{
    float:right;
    padding:0 20px;
    color:#00b800;
    cursor: pointer;
    &:hover{
      color:#FF9900;
    }
  }
}

</style>
