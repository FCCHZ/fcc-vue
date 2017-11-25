<template>
    <div  class="active-detils">
        <div class="item-horizontal">
          <div class="horizotal-img">
              <img v-bind:src="activesItem.imgUrl" alt="">
          </div>
          <div class="horizotal-dsc">
              <div class="horizotal-title">
                  <span class="title-span" v-html="activesItem.title">哈哈哈</span>
              </div>
              <div class="horizotal-date">
                  <span><i class="fcc-clock fcc-icon">{{ activesItem.startTime }}~{{ activesItem.endTime }}</i></span>
              </div>
              <div class="horizotal-location">
                  <span><i class="fcc-地址 fcc-icon" v-html="activesItem.location"></i></span>
              </div>
              <div class="horizotal-limit">
                  <span><i class="fcc-users fcc-icon"></i>限额{{activesItem.auota}}人</span>
              </div>
              <div class="horizotal-count">
                  <span>{{activesItem.watch}}人浏览</span>
              </div>
              <div class="enter">
                  <span>我要报名</span>
              </div>
          </div>
      </div>
      <div class="content">
          <div class="left">
            <span class="title">活动票种...</span>
            <div class="tickets">
                <div class="ticket">
                    <span>免费票<i class="fcc-ok icon"></i></span>
                </div>
                <!-- <div class="ticket">
                    <span>免费票<i class="fcc-ok icon"></i></span>
                </div>
                <div class="ticket">
                    <span>免费票<i class="fcc-ok icon"></i></span>
                </div>
                <div class="ticket">
                    <span>免费票<i class="fcc-ok icon"></i></span>
                </div> -->
            </div>
            <span class="title">活动内容...</span>
            <div class="introduce" v-html="activesItem.content">
            </div>
            <!-- <div class="share">
                <span>分享到微信</span>
            </div>
            <span class="title">您有任何问题，在这里提问！</span>
            <div>
                <textarea placeholder="输入你想到的问题！" class="question" ></textarea>
            </div>
            <span class="title">
                全部评论：
            </span>
            <div class="comment-list">
                <span>还木有人评论，赶快来抢个沙发！</span>
            </div> -->
          </div>
          <div class="right">
              <span class="map-title">活动地点<span class="bmap" v-on:click="clickToBMap()">(查看全屏)</span></span>
              <!-- 百度地图容器 -->
              <div id="container">
              </div>
              <!-- 二维码 -->
              <div class="ercode">
                  <div class="share-ercode">
                    <p>扫</p>
                    <p>一</p>
                    <p>扫</p>
                    <p>分</p>
                    <p>享</p>
                  </div>
                  <div>
                      <vue-q-art class="vue-q-art" :config="config" :downloadButton="downloadButton"></vue-q-art>
                  </div>
              </div>
              <div class="calendar">
                <vue-event-calendar :events="demoEvents"></vue-event-calendar>
              </div>
          </div>
      </div>
      <fcc-footer-one></fcc-footer-one>
    </div>
</template>
<script>
import VueQArt from "vue-qart";
import FccFooterOne from "components/FCC_footer_one";
import fcclogo from "assets/android-chrome-192x192.png";
import active04_16 from "assets/active04_16.jpg";
import active05_06 from "assets/active05_06.jpg";
import activity_img01 from "assets/activity_img01.jpg";
import activity_img02 from "assets/activity_img02.jpg";
import activity_img03 from "assets/activity_img03.jpg";
import activity_img04 from "assets/activity_img04.jpg";
import activity_img05 from "assets/activity_img05.jpg";
import activity_img06 from "assets/activity_img06.jpg";

export default {
  data() {
    return {
      detils: "",
      lat: 0,
      lng: 0,
      location: "",
      config: {
        value: "https://www.baidu.com",
        imagePath: require("../../../assets/android-chrome-192x192.png"),
        filter: "color",
        size: 140
      },
      downloadButton: false,
      demoEvents: [
        {
          date: "2016/9/12", // 必填
          title: "Foo" // 必填
        },
        {
          date: "2016/12/15",
          title: "Bar",
          desc: "description",
          customClass: "disabled highlight" // 自定义日历单元格的Class，会加到对应的日历单元格上
        }
      ],
      activesItem: {},
      activesDetils: [
        {
          id: 0,
          fcclogoUrl: fcclogo,
          imgUrl: active04_16,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州三维大厦",
          data: "10-5",
          startTime: "2017年10月5日 19:30",
          endTime: "2017年10月5日 19:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 0,
          watch: 666
        },
        {
          id: 1,
          fcclogoUrl: fcclogo,
          imgUrl: active05_06,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-7",
          startTime: "2017年10月7日 19:30",
          endTime: "2017年10月7日 22:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 0,
          watch: 666
        },
        {
          id: 2,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img01,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-8",
          startTime: "2017年10月8日 19:30",
          endTime: "2017年10月8日 22:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 3,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img02,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-23",
          startTime: "2017年10月23日 19:30",
          endTime: "2017年10月23日 22:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 4,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img03,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-24",
          startTime: "2017年10月24日 19:30",
          endTime: "2017年10月4日 2:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 5,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img04,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-25",
          startTime: "2017年10月25日 19:30",
          endTime: "2017年10月25日 19:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 6,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img05,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-26",
          startTime: "2017年10月26日 19:30",
          endTime: "2017年10月26日 19:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 7,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img06,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-27",
          startTime: "2017年10月27日 19:30",
          endTime: "2017年10月27日 19:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 8,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img06,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-28",
          startTime: "2017年10月28日 19:30",
          endTime: "2017年10月28日 19:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 9,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img06,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-29",
          startTime: "2017年10月29日 19:30",
          endTime: "2017年10月29日 19:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
        {
          id: 10,
          fcclogoUrl: fcclogo,
          imgUrl: activity_img06,
          title: "麦尖天台open mic音乐会——你可以成为歌手",
          city: "杭州",
          location: "杭州知味书屋",
          data: "10-30",
          startTime: "2017年10月30日 19:30",
          endTime: "2017年10月30日 19:30",
          auota: "200",
          content: "<p style='text-align: center;font-weight:bold'>以父之名</p><P>微凉的晨露 沾湿黑礼服</P><P>石板路有雾 父在低诉</P><P>无奈的觉悟 只能更残酷</P><P>一切都为了 通往圣堂的路</P><P>吹不散的雾 隐没了意图</P><P>谁轻柔踱步 停住</P><P>还来不及哭 穿过的子弹</P><P>就带走 温度</P><P>我们每个人都有罪 犯着不同</P>的罪<P>我能决定谁对 谁又该要沈睡</P><P>争论不能解决 在永无止境的</P>夜<P>关掉你的嘴 唯一的恩惠</P><P>挡在前面的人都有罪</P><P>后悔也无路可退 以父之名判</P>决<P>那感觉没有适合字</P><P>就像边笑边掉泪 凝视着完全</P>的黑<P>阻挡悲剧蔓延的悲剧会让我沉</P>醉<P>低头亲吻我的左手 换取被宽</P>恕的承诺<P>老旧管风琴在角落 一直一直</P>一直伴奏<P>黑色帘幕被风吹动阳光无言的</P>穿透<P>洒向那群被我驯服后的 兽</P><P>沉默的喊叫 沉默的喊叫 孤</P>单开始发酵<P>不停对着我嘲笑 回忆逐渐延</P>烧<P>曾经纯真的画面 残忍的温柔</P>出现<P>脆弱时间到 我们一起来祷告</P>",
          love: 666,
          person: 666,
          enterState: 1,
          watch: 666
        },
      ]
    };
  },
  components: {
    VueQArt,
    FccFooterOne
  },
  created() {},
  mounted() {
    this._initData();
    this._initErcode();
  },
  methods: {
    _initData() {
      if (this.detils === "") {
        this.detils = this.$route.params.id;
        for (var i in this.activesDetils) {
          if (this.activesDetils[i].id == this.detils) {
            this.activesItem = this.activesDetils[i];
            this._initBMap(this.activesItem);
            this._initCalendar(this.activesItem.data);
            break;
          } else {
            continue;
          }
        }
      }
    },
    _initBMap(data) {
      var map = new BMap.Map("container");
      // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
      // 创建地址解析器实例
      var myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint(data.location, point => {
        if (point) {
          map.centerAndZoom(point, 16);
          map.addOverlay(new BMap.Marker(point));
          this.lat = point.lat;
          this.lng = point.lng;
          this.location = data.location;
        }
      });
    },
    clickToBMap() {
      window.open(
        "http://api.map.baidu.com/marker?location=" +
          this.lat +
          "," +
          this.lng +
          "&title=FCC活动地点&content=" +
          this.location +
          "&output=html"
      );
    },
    _initCalendar(data) {
      var date = new Date();
      var year = date.getFullYear();
      this.demoEvents[0].date = year + "/" + data.split("-").join("/");
      this.$EventCalendar.toDate(this.demoEvents[0].date);
    },
    _initErcode() {
      this.config.value = window.location.href;
    }
  }
};
</script>
<style lang="sass" scoped>
$height: 354px
$fcc-logo-height: 27px
$item-width: 255px
$horizotal-height: 280px
.fcc-icon
    color: #A3A3A3
    font-style: normal
    margin-right: 5px
.active-detils
    width: 100%
    margin: 90px auto
    .item-horizontal
        background: #FFFFFF;
        width: 1080px
        height: $horizotal-height
        display: flex
        position: relative
        margin-bottom: 33px
        margin: 30px auto
        .horizotal-img
            width: 520px
            height: $horizotal-height
            img
                width: 520px
                height: $horizotal-height
        .horizotal-dsc
            margin-left: 36px
            flex: 1
            height: $horizotal-height
            .horizotal-title
                height: 22px
                margin-top: 10px
                margin-bottom: 26px
                .title-span
                    margin-right: 24px
                    font-family: PingFangSC-Medium;
                    font-size: 22px;
                    color: #555555;
            .horizotal-date
                margin-bottom: 17px
            .horizotal-limit
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #555555;
                margin-top: 17px
            .horizotal-count
                margin-top: 10px
                ont-family: PingFangSC-Light;
                font-size: 14px;
                color: #555555;
            .enter
                position: absolute
                border: 1px solid #4CAF50
                border-radius: 8px
                width: 116px
                height: 39px
                right: 30px
                bottom: 20px
                text-align: center
                background: #4CAF50;
                span
                    line-height: 39px
                    font-size: 16px;
                    color: #FFFFFF;
    .content
        width: 1080px
        margin: 50px auto
        display: flex
        .left
            width: 780px
            .title
                font-family: PingFangSC-Medium
                font-size: 18px
                color: #555555
                line-height: 35px
            .tickets
                width: 100%
                height: 80px
                border-top: 1px solid #EEEEEE 
                display: flex
                flex-wrap: wrap
                .ticket
                    width: 131px
                    height: 36px
                    background: rgba(0,172,113, 0.41)
                    border: 1px solid #EEEEEE
                    margin: 19px 17px
                    text-align: center
                    span
                        line-height: 36px
                        color: #555555
                        opacity: 1
            .introduce
                width: 100%
                border-top: 1px solid #EEEEEE
            .share
                width: 116px
                height: 39px
                background: #4CAF50;
                border-radius: 8px;
                font-family: PingFangSC-Medium
                font-size: 16px
                color: #FFFFFF
                line-height: 39px
                text-align: center
                margin: 81px auto
            .question
                margin-top: 20px
                margin-bottom: 38px
                width: 760px
                height: 205px
                border: 1px solid #EEEEEE
                text-align: start
                text-rendering: auto;
                white-space: pre-wrap
                resize: none
                cursor: auto
                padding-top: 10px
                font-family: PingFangSC-Light;
                font-size: 18px;
                color: #A3A3A3;
            .comment-list
                margin-top: 16px
                width: 100%
                border-top: 1px solid #EEEEEE
                span
                    font-family: PingFangSC-Light
                    font-size: 14px
                    color: #A3A3A3
                    display: block
                    margin: 28px auto
        .right
            flex: 1
            margin-left: 39px
            .map-title
                font-family: PingFangSC-Light;
                font-size: 18px;
                color: #555555;
                .bmap
                    ont-family: PingFangSC-Light;
                    font-size: 14px
                    color: #FF9900
                    margin-left: 10px
                    &:hover
                        cursor: pointer
            #container
                width: 280px
                height: 277px
                margin-top: 10px
            .ercode
                width: 280px
                height: 195px
                display: flex
                margin-top: 13px
                div
                    flex: 1
                    .vue-q-art
                        margin-right: -10px
                .share-ercode
                    height: 175px
                    margin-top: 10px
                    padding-left: 40px
                    padding-top: 10px
                    p
                        font-size: 22px;
                        font-family: PingFangSC-Medium
                        color: #555555
            .calendar
                width: 280px
                height: 270px
                margin-top: 20px
</style>