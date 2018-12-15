<template>
    <main>
      <!------------------------banner--------------------->
      <div class="banner">
        <img src="../../../static/image/bb.png" alt="">
      </div>
      <!-----------------------apply----------------------->
      <div class="apply">
        <p>基地入驻申请</p>
        <ul>
          <li v-for="(c,index) in list">
            <a href="#">
              <img :src="c.pic" alt="">
              <span>{{c.span1}}</span>
            </a>
          </li>
        </ul>
      </div>
      <place-teamwork></place-teamwork>
      <place-ul style="display: none;" v-show="!isShow"></place-ul>
      <!-------------------------more---------------------->
      <div class="more" @click="showToggle">
        <p>更多场地</p>
      </div>
    </main>
</template>

<script>
    import PlaceTeamwork from "./PlaceTeamwork";
    import PlaceUl from "./PlaceUl";
    export default {
      name: "PlaceMain",
      components: {PlaceUl, PlaceTeamwork},
      data() {
        return {
          list: [
            {"span1": "提交项目资料", "pic": "../../../static/image/b1.png"},
            {"span1": "基地复审", "pic": "../../../static/image/b2.png"},
            {"span1": "结果反馈", "pic": "../../../static/image/b3.png"}
          ],
          btnText: "隐藏",
          isShow: true
        }
      },
      methods: {
        showToggle: function () {
          this.isShow = !this.isShow
          if (this.isShow) {
            this.btnText = "隐藏"
          } else {
            this.btnText = "显示"
          }
        }
      }
    }
</script>

<style scoped>
  main{
    flex: 1;
    overflow: auto;
  }
  /*=========================banner=====================*/
  main .banner{
    width: 100%;
  }
  main .banner img{
    width: 100%;
  }
  /*=======================apply====================*/
  .apply{
    background: #fff;
  }
  .apply p{
    padding: .3rem 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .apply ul{
    display: flex;
    padding: .2rem 0;
  }
  .apply ul li{
    flex:1;
    text-align:center;
  }
  .apply ul li a{
    background: #fafafa;
    display:flex;
    flex-direction:column;
  }
  .apply ul li a img{
    height:.6rem;
    margin:0 auto;
  }
  .apply ul li a span {
    height: .37rem;
    display: block;
    line-height: .4rem;
    color: #333;
  }
  /*===========================more==========================*/
  .more p{
    line-height: .6rem;
    color: #a46afd;
    background: #fff;
    text-align: center;
    font-size: 16px;
  }
</style>
