import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Button } from 'antd';
import $ from 'jquery'
import '../css/header.css'
import {
  HomeOutlined,
  TagsOutlined,
  FolderOpenOutlined,
  UserOutlined

} from '@ant-design/icons';


class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      //   header_data : ["首页","标签","分类","关于"]
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
      banner_bar_active: 0
    }
  }


  componentWillMount() {
    console.log(this)

  }


  render() {
     var page_index = this.props.active
    var data = []
    var title_jsx_totle = this.state.header_data.forEach((item, index) => {
      if (index == page_index) {
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
      <div className="Header blur  tab_title_top">
        <div className="container">
          <div className="wrapper">

            <div className="head_link_data">

              <ul className='head_ul'>
                <li> Lyxlog </li>

                {data}
              </ul>

            </div>
            <div className="head_search_input"> 我是搜索框待用</div>

          </div>

        </div>

      </div>
    );

  }

  addactive_banner(index) {

    console.log( this.props.me_to_header(index));
    // console.log( this.props.active);
   
  


    this.setState({
      banner_bar_active:index
     })

    //  this.forceUpdate();
        // this.render()
  

    // if(1){
    //   this.props.history.push("/Label",{name:"这是chilren传递的数据"})


    // }


  }

}

export default Header;



