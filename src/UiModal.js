// Design UI 常用弹出框示例

import React from 'react'
import {Button,Card, Modal} from 'antd'

class UiModal extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      modalAddInfoVisible: false, //新增信息Modal的显示属性
    }
  }

  //弹出一个弹出框用于新增信息
  openModalAddInfo = (type)=>{
    this.setState({modalAddInfoVisible: true})
  }

  render() {
    return(
      <div>
       
          <Button type="primary" onClick={()=>this.openModalAddInfo("modalAddInfo")}>新增信息</Button>
    

        {/*title:弹出框标题  visible:是否可见  onCancel:取消按钮，右上角X号事件*/}
        <Modal title="新增信息"
               visible={this.state.modalAddInfoVisible}
               onCancel={()=>{
                 this.setState({modalAddInfoVisible: false})
               }}
        >
          <span>姓名 ：</span> <input/>
          <span>标签 ：</span> <input/>
        </Modal>

      </div>
    )
  }

}

export default UiModal;
