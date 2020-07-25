import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './css/App.css'
import { Button } from 'antd';
import $ from 'jquery'
import Header from './component/header'



import {
  HomeOutlined,
  TagsOutlined,
  FolderOpenOutlined,
  UserOutlined,
  CalendarOutlined

} from '@ant-design/icons';
import bk_datalist from "./json/dataList.json"




class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  componentWillMount() {

    this.setState({
      blog_list_data: bk_datalist
    })

  }

  render() {

    // 文章列表
var blog_data_ = []
$.map(bk_datalist.data, (item, index) => {
  var jsx = (
    <div className='post-list blog_list'>
      <div className="log_title white_box shadow">
        <h1>{item.article_title}</h1>
      </div>
      <ul>
        <li>  <UserOutlined style={{ fontSize: '20px' }} />用户 lyx</li>
        <li>  <TagsOutlined style={{ fontSize: '20px' }} />标签{item.article_tip}</li>
        <li> <FolderOpenOutlined style={{ fontSize: '20px' }} /> 类型{item.article_type}</li>
        <li> <CalendarOutlined style={{ fontSize: '20px' }} />发布时间{item.create_time} </li>
      </ul>
      <div className="container">
        <p>  {item.article_title}：</p>
    内容区
    </div>
      <div className="read_foot">
        <a> 阅读全文 > </a>
      </div>
    </div>
  )
  blog_data_.push(jsx)
})
    return (
      <div className="Appbody">
        <Header me_to_header={this.clickEvent} active={this.state.active}></Header>
        {/* <h1>这里是app</h1> */}
    {/*  第一页  内容区 */}
    <div className="cover-wrapper">
 
   
      <div className='cover dispaly_center'>

        <div className="cover_body  dispaly_center">
          {/* logo */}
          <div className=" top_  dispaly_center">

            <p className="title">CyChan</p>
            <p className="subtitle">奔跑吧！骄傲的少年</p>

          </div>
          {/* 输入框和连接 */}
          <div className=" down_  dispaly_center">

            <div className="m_search " >
              <form className="form u-search-form">
                <input type="text" />
              </form>

            </div>

            <div className="menu  ">
              <ul className="cover_list_h">
                {/* {data} */}
              </ul>
            </div>
          </div>
        </div>

        <div className="scroll_down">
          下拉区
          </div>
      </div>

    </div>
    {/* 第二页列表区 */}
    <div className='l_body'>
      <div className=" body-wrapper">

        <div className="l_main">

          {blog_data_}
        </div>

        <div className="l_side"></div>
      </div>

    </div>
 


      </div>
    );

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

export default App;



