

import {AJAXURL4} from "../commons/CloudBlog"


export default  {


  /**
   * 获取mylists数据
   * @param cb
   */
  getshopswiperData(cb){
    fetch(AJAXURL4).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
