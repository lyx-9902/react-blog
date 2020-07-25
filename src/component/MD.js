import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Editor from 'for-editor'
import Header from './header'
import '../css/md.css'


class MD extends Component {
  constructor() {
    super()
    this.state = {
      value: '## 安装```` npm install for-editor -S ````   ## 基本使用'
       
    }
  }

  handleChange(value) {
    // console.log(value);
    this.setState({
      value
    })
  }

  handleSave(data) {
    console.log(data);
   
  }

  render() {
    const { value } = this.state
    return (
      <div className="MDbody">
              <Header me_to_header={this.clickEvent} ></Header>
        <div className='md_box'>
             <Editor
              onSave = {(value) => this.handleSave(value)} 
              value={value} 
              onChange={(value) => this.handleChange(value)} 
              className='md_l' 
              />
             <div className='md_r'>右侧的内容</div>
        </div>
     
      </div>
    )
  }
  clickEvent = (index) => {
    let to_panth = ''
    if (index == 0) {
      to_panth = "/"
    } else if (index == 1) {
      to_panth = "/Label"
    } else if (index == 2) {
      to_panth = "/Type"
    } else if (index == 3) {
      to_panth = "/ME"
    }
    this.props.history.push(to_panth, { name: "这是me路由传递的数据" })
  }


}

export default MD;