<template>
    <section>
     <ul>
       <li v-for="(c,index) in mylists">
         <a href="#">
           <img :src="c.pic1" alt="">
           <p>{{c.span1}}</p>
           <img :src="c.pic2" alt="">
         </a>
       </li>
     </ul>
    </section>
</template>

<script>
    import MylistsApi from "../../api/MylistsApi";

    export default {
        name: "MyList",
        data(){
          return{
            mylists:[]
          }
        },
        methods:{
          _initPageData() {
            MylistsApi.getMylistaData(data=>{
              this.mylists = data
              console.log(this.mylists)
            })
          }
        },
        created(){
          //首页加载数据
          this._initPageData()
        }
    }
</script>

<style scoped>
  section{
    background: #fff;
  }
  section ul li{
    height: .6rem;
    padding: 0 .2rem;
  }
  section ul li a{
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
  }
  section ul li a p{
    padding: 0 .15rem;
  }
  section ul li a img:nth-of-type(1){
    width: .25rem;
    height: .25rem;
  }
  section ul li a img:nth-of-type(2){
    width: .1rem;
    height: .16rem;
    position:absolute;
    top: .15rem;
    right:.0rem;
  }
</style>
