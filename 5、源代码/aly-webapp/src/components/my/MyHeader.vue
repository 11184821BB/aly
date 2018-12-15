<template>
  <header>
    <ul>
      <li><a href="#"><i class="iconfont">&#xe660;</i></a></li>
      <li><a href="#">我的</a></li>
      <li><a href="#"><i class="iconfont">&#xe64b;</i></a></li>
    </ul>
    <div class="center">
      <dl>
        <dt><a href="#"><span></span></a></dt>
        <dd>
          <p>肉丸</p>
          <span class="task"><a href="#">登录/注册</a></span>
        </dd>
      </dl>
    </div>
  </header>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>
  header{
    background: #fff;
  }
  header ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    line-height: .6rem;
  }
  header ul li:nth-of-type(1){
    width: .6rem;
    height: .6rem;
  }
  header ul li:nth-of-type(3){
    width: .6rem;
    height: .6rem;
  }
  header ul li a .iconfont{
    font-size: 24px;
  }
  header ul li a{
    height: .6rem;
    text-align: center;
  }
  header ul li:nth-of-type(2){
    flex: 1;
  }
  header ul li:nth-of-type(2) a{
    text-align: left;
  }


  header .center{
    height: 1rem;
    background: #fff;
    padding: 0 .2rem;
  }
  header .center dl{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 1rem;
  }
  header .center dl dt a span{
    display: block;
    width: .6rem;
    height: .6rem;
    background: url(../../../static/image/indexq.png) no-repeat;
    background-size: .6rem .6rem;
  }
  header .center dd{
    flex: 1;
    height: .7rem;
    position: relative;
    padding-left: .2rem;
  }
  header .center dd p{
    line-height: .4rem;
  }
  header .center dd span{
    display: block;
    width: 1.3rem;
    height: .43rem;
    background: #0dbac0;
    border-radius: .45rem;
    position: absolute;
    right: 0px;
    top: .14rem;
    text-align: center;
    line-height: .43rem;
  }
  header .center dd span a{
    color: #fff;
  }
  header .center dd p:nth-of-type(1){
    margin-top: .13rem;
    color: #000;
    font-size: 15px;
  }
</style>
