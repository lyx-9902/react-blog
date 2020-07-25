import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './css/App.css'
import { Button } from 'antd';
import $ from 'jquery'
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
      blog_list_data: [0]
    }
  }

  componentWillMount() {

    this.setState({
      blog_list_data: bk_datalist
    })

  }

  render() {
    return (
      <div className="outbox">
        {/* 背景图片 */}

   
          

      </div>
    );

  }
}

export default Logindex;



