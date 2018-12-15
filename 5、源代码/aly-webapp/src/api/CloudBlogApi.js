

import {AJAXURL} from "../commons/CloudBlog"


export default  {


  /**
   * 获取blog数据
   * @param cb
   */
  getBlogData(cb){
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
