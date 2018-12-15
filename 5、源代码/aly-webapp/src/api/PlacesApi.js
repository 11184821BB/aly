

import {AJAXURL5} from "../commons/CloudBlog"


export default  {


  /**
   * 获取mylists数据
   * @param cb
   */
  getPlacesData(cb){
    fetch(AJAXURL5).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
