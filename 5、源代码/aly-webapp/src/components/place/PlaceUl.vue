<template>
  <div class="teamwork">
    <ul>
      <li v-for="(c,index) in places.places2">
        <a href="">
          <span>{{c.span1}}</span>
          <span>{{c.span2}}</span>
        </a>
        <p>{{c.p}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    import PlacesApi from "../../api/PlacesApi";

    export default {
        name: "PlaceUl",
        data(){
          return{
            places:[]
          }
        },
        methods:{
          _initPageData() {
            PlacesApi.getPlacesData(data=>{
              this.places = data
              console.log(this.places)
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
  .teamwork{
    background: #fff;
  }
  .teamwork p{
    text-align: center;
    padding: .3rem 0;
  }
  .teamwork ul{
    display: flex;
    flex-wrap: wrap;
    border-top: 0px solid #ccc;

  }
  .teamwork ul li{
    width: 50%;
    text-align: center;
    border-bottom: 2px solid #ccc;
  }
  .teamwork ul li:nth-of-type(odd){
    border-right: 1px solid #ccc;
  }
  .teamwork ul li a{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid #ccc;
    background: #fafafa;
  }
  .teamwork ul li a span{
    color: #000;
    display: block;
  }
  .teamwork ul li a span:nth-of-type(1){
    font-weight: 900;
    font-size: 18px;
    margin-bottom: .03rem;
  }
  .teamwork ul li a span:nth-of-type(2){
    font-weight: 500;
    font-size: 13px;
  }
  .teamwork ul li p{
    padding: .3rem .2rem;
    text-align: left;
    color: #999999;
  }
</style>
