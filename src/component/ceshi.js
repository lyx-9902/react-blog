import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


function Me(props){
  console.log(props);
  return(
        <h1>Me</h1>
  )
}

function Home(props){
  console.log(props);
  return(
        <h1>Home</h1>
  )
}

function Produc(props){
  console.log(props);
  return(
        <h1>Produc</h1>
  )
}


  class Cheshi extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
  
   }
 
  }
  clickEvent=()=>{  
    console.log(this.props.history.push("/",{name:"这是chilren传递的数据"}))
  }


    render(){
   
      return(   

  <div id = 'app'>    
           <div> 所有页面都显示的普通页面</div>
           <button onClick = { this.clickEvent}>  跳转到首页</button>
         <Router >   
        
         {/* <div className = 'nav'>
      
             <Link to = { { pathname:"/",search:"?sername=admin",hash:"#abc",state:{msg:"helloworld"}} }>Home</Link>
             <Link to = '/product'>产品页</Link>
             <Link to = '/me'>个人中心</Link>
         </div> */}
   
             <Route path = "/" exact component = {Home}></Route>
             <Route path =  "/product" exact component = {Produc}></Route>
             <Route path =  "/me" exact component = {Me}></Route>
   
         </Router>   
   </div>
 
      )
   

     
}
}
export default Cheshi;