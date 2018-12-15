

import {AJAXURL3} from "../commons/CloudBlog"


export default  {


  /**
   * 获取mylists数据
   * @param cb
   */
  getshopcartsData(cb){
    fetch(AJAXURL3).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
