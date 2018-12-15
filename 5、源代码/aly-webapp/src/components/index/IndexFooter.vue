<template>
  <footer>
    <ul>
      <li v-for="(item,index) in list" :class="{'active': nowIndex===index}" @click="tabClick(index)">
        <a href="#">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.span1}}</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
    export default {
        name: "IndexFooter",
        data(){
          return{
            list:[
              {"icon":"&#xe630;","span1":"阿里云"},
              {"icon":"&#xe650;","span1":"控制台"},
              {"icon":"&#xe613;","span1":"云栖"},
              {"icon":"&#xe87a;","span1":"我的"},
              {"icon":"&#xe63f;","span1":"购物车"}
            ],
            nowIndex:0
          }
        },
      methods:{
        _initPage() {
          this.nowIndex = this.$route.path === '/index' ? 0 : this.$route.path === '/controller' ? 1  : this.$route.path === '/cloud' ? 2 : this.$route.path === '/my' ? 3 : this.$route.path === '/cart' ? 4 : 0;
        },
        tabClick(index) {
          this.nowIndex = index;
          let href = index === 0 ? '/index' : index === 1 ? '/controller' : index === 2 ? '/cloud' : index === 3 ? '/my' : index === 4 ? '/cart' : '/index';
          // 利用路由的push方法更新路径地址
          this.$router.push(href)
        }
      },
      mounted(){
        this.$nextTick(() => {
          // 初始化，保证刷新页面后内容区和导航键一致
          this._initPage();
        });
      }

    }
</script>

<style scoped>
  footer ul .active a{
    color:#c5161d!important;
  }
  footer{
    height:.6rem;
    background:#f6f5f4;
    border-top:1px solid #ccc;
  }
  footer ul{
    height:100%;
    display:flex;
  }
  footer ul li{
    flex:1;
    text-align:center;
    padding-top:.07rem;
  }
  footer ul li a{
    display:block;
  }
  footer ul li a .iconfont{
    display:block;
    font-size:.25rem;
  }
  footer ul li a span{
    display:block;
    line-height:.2rem;
    font-size:.13rem;
  }
</style>
