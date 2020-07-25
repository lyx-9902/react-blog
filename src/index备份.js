import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './index.css';
import App from './App';


import Ceshi from './component/ceshi'
import * as serviceWorker from './serviceWorker';
import './css/index.css'


import Header from './component/header'
import Shouye from './component/shouye'
import Label from './component/Label'

import {
  HomeOutlined,
  TagsOutlined,
  FolderOpenOutlined,
  UserOutlined,
  CalendarOutlined

} from '@ant-design/icons';
import bk_datalist from "./json/dataList.json"


let slider_img = [
  'https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg'
  , "https://cdn.jsdelivr.net/gh/xaoxuu/cdn-wallpaper/abstract/B18FCBB3-67FD-48CC-B4F3-457BA145F17A.jpeg"
]

class Logindex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header_data: [],
      banner_bar_active: 0,
      blog_list_data: [0],
      header_data: [
        {
          title: "首页",
          jsx: <HomeOutlined style={{ fontSize: '28px', }} />
        },
        {
          title: "标签",
          jsx: <TagsOutlined style={{ fontSize: '28px', color: '#666' }} />
        },
        {
          title: "分类",
          jsx: <FolderOpenOutlined style={{ fontSize: '28px', color: '#666' }} />
        },
        {
          title: "关于",
          jsx: <UserOutlined style={{ fontSize: '28px', color: '#666' }} />
        },
      ],
    }
  }

  componentWillMount() {

    this.setState({
      blog_list_data: bk_datalist
    })

  }

  render() {
    console.log(this);
    var data = []
    var title_jsx_totle = this.state.header_data.forEach((item, index) => {
      if (index == this.state.banner_bar_active) {
        let jsx = (<li onClick={(e) => { this.addactive_banner(index, e) }} key={index} className="active">
          <a href="#">
            {item.jsx}
            {item.title}
          </a>
        </li>)
        data.push(jsx)

      } else {
        let jsx = (<li onClick={(e) => { this.addactive_banner(index, e) }} key={index} className="">
          <a href="#">
            {item.jsx}
            {item.title}
          </a>
        </li>)

        data.push(jsx)
      }

    })


    return (
      <div className="outbox">
        {/* 背景图片 */}
        <div className="App-slideshow">
          <div className="slideshow_item">
            <img src={slider_img[0]} alt="this is img" />
          </div>
        </div>
        
         <Router >
        <div className='index_link'>
          <Link to = '/'>去往首页</Link>
          <Link to = '/Label'>去往label</Link>
        </div>
          <Route path="/" exact component={Label}></Route>
          <Route path="/Label" exact component={Label}></Route>
        </Router>




      </div>
    );

  }
}




ReactDOM.render(

  <Logindex />
  // <Ceshi />
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
