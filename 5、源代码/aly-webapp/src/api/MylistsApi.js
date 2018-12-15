

import {AJAXURL1} from "../commons/CloudBlog"


export default  {


  /**
   * 获取mylists数据
   * @param cb
   */
  getMylistaData(cb){
    fetch(AJAXURL1).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
