

import {AJAXURL2} from "../commons/CloudBlog"


export default  {


  /**
   * 获取mylists数据
   * @param cb
   */
  getstoregiftData(cb){
    fetch(AJAXURL2).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
