<template>
  <div>
  <div class="blogs" v-for="(c,index) in blogs">
    <div class="self">
      <a href="#"><img :src="c.pic" alt=""></a>
      <a href="#">{{c.name}}</a>
      <span class="attention">博客</span>
    </div>
    <div class="new">
      <p>{{c.text}}</p>
    </div>
    <div class="state">
      <div class="time">{{c.time1}}</div>
      <ul>
        <li>
            <i class="iconfont" style="font-size: 22px">&#xe621;</i>
            <span style="font-size: 16px;" class="dianzan" @click ="_add(index)" >{{c.span1}}</span>
        </li>

      </ul>
    </div>
  </div>
  </div>
</template>

<script>
    import CloudBlogApi from "../../api/CloudBlogApi";
    export default {
        name: "CloudBlogs",
        data(){
          return{
            blogs:[],
            count:0
          }
        },
        methods:{
          _initPageData() {
            CloudBlogApi.getBlogData(data=>{
              this.blogs = data
              console.log(this.blogs)
            })
          },
          _add(i){
            let num=Number($(".dianzan")[i].innerHTML)
            let nums=Number(this.blogs[i].span1)+10
            if (num>=nums){
              $(".dianzan")[i].innerHTML=nums
            }else{
              num++
              $(".dianzan")[i].innerHTML=num
            }
          }
        },
        created(){
          //首页加载数据
          this._initPageData()
        }
    }

</script>

<style scoped>
  .blogs{
    margin-top: .18rem;
    padding: .1rem .16rem;
    background: #fff;

  }
  .blogs .self{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: .4rem;
  }
  .blogs .self a:nth-of-type(1) img{
    display: block;
    width: .34rem;
    height: .36rem;
  }
  .blogs .self a:nth-of-type(2){
    flex: 1;
    line-height: .36rem;
    color: #000;
    padding-left: .13rem;
  }
  .blogs .self .attention{
    display: block;
    width: .52rem;
    text-align: center;
    line-height: .3rem;
    color: #00c1de;
    border: 1px solid #00c1de;
  }
  .blogs .new{
    line-height: 24px;
    padding: .15rem 0;
  }
  .blogs .state{
    height: .4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .blogs .state .time{
    width: .72rem;
    text-align: center;
    line-height: .3rem;
    border-radius: .16rem;
    color: #00c1de;
    border: 1px solid #00c1de;
  }
  .blogs .state ul{
    display: flex;
    flex-direction: row;
  }
  .blogs .state ul li{
    padding-left: .11rem;
  }
</style>
