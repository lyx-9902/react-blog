import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import Label from './component/Label';
import ME from './component/Me';
import MD from './component/MD';
import Type from './component/Type';
import UiModal from './UiModal'

import * as serviceWorker from './serviceWorker';
import './css/index.css'

import {
  HomeOutlined,
  TagsOutlined,
  FolderOpenOutlined,
  UserOutlined,
  CalendarOutlined

} from '@ant-design/icons';


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

    }
  }

  componentWillMount() {

    this.setState({

    })

  }

  render() {


    return (
      <div className="outbox">
          {/* 背景图片 */}
        <div className="App-slideshow">
          <div className="slideshow_item">
            <img src={slider_img[0]} alt="this is img" />
          </div>
        </div>
        <Router >
          {/* <div className='index_link'>
            <Link to='/'>去往App</Link>
            <Link to='/Label'>去往label</Link>
            <Link to='/ME'>去往label</Link>
          </div> */}
          <Route path="/" exact component={App}></Route>
          <Route path="/Label" exact component={Label}></Route>
          <Route path="/Type" exact component={Type}></Route>
          <Route path="/ME" exact component={ME}></Route>
          <Route path="/MD" exact component={MD}></Route>
          {/* <Route path="/" exact component={UiModal}></Route> */}
    
    
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
