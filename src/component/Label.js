
  import React from 'react';
  import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
  import $ from 'jquery'
  import '../css/App.css'
  import '../css/Label.css'

    import Header from './header'

  class Label extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        active:1
      }
    }
  
    componentWillMount() {
        console.log("label",this.props);
    //   this.setState({
      
    //   })
    }
  
    render() {
       
      return (
         

    
      <div className='labelbody'>
       <Header me_to_header = {this.clickEvent} active={this.state.active}></Header>
          <h1>我是label</h1>
          <h1>我是label</h1>
          <h1>我是label</h1>
          <h1>我是label</h1>
      </div>

       


      );
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
        this.props.history.push(to_panth,{name:"这是me路由传递的数据"}) 
      }
  }
  
  export default Label ;
  
  
  
  


