import React from 'react';
import ReactDOM from 'react-dom';




class Clock extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
    childData:null  //默认是null页面不会显示，只有 有数据才会显示
   }
    
  }


  render() {
    return ( 
      <div >
      <h1>子元素传递给复原的数据 {this.state.childData} </h1>
      <Children setChildDate = {this.setChildDate} />       //1. 变量也可以是个方法

      </div>
    )
  }
  setChildDate = (a)=>{  //3.传递形参，进行修改
    this.setState({
      childData:a
    })
  }
}

class Children extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    msg:'helloworld'
    }
  }

  sendData = ()=>{
      this.props.setChildDate(this.state.msg) // 2. 你要记住，标签传参，实例中props中就会有值。
  }
      render() {
        return ( 
          <div >
            <button onClick = {this.sendData}>给父元素传值</button>
          </div>
        )
  }
}
  ReactDOM.render(
    <Clock/> ,
    document.getElementById('root')
  );

// 简写形式： 既然children标签传入， children的props中就会挂载。那么就可以这样写：
//  <button onClick = {()=> {this.props.setChildDate('我是世界调用props')}}>给父元素传值</button> ，这样也是可以调用的。   匿名的箭头函数，this.不变。