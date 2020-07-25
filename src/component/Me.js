
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Header from './header'

import  '../css/me.css'

class ME extends React.Component{

    constructor(props) {
        super(props)
        this.state = { 
            active:3
        }
      }

    render() {            
        console.log(this);  
         return(
           <div>  
           我是ME组件
            <button onClick = { this.clickEvent}>  跳转到首页</button>
           <Header me_to_header = {this.clickEvent} active={this.state.active}></Header>
          
           </div>
         )
    }
    clickEvent=(index )=>{  
        let to_panth = ''
        if(index==0){
            to_panth = "/"
        }else if(index==1){
            to_panth = "/Label"
        }else if(index==2){
            to_panth = "/Type"
        }else if(index==3){
            to_panth = "/ME"
        }
        this.props.history.push(to_panth,{name:"这是me路由传递的数据"+index}) 
      }

   }
   

   
export default ME;
