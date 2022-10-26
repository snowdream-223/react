import React, { Component } from 'react'

export default class Stat extends Component {
  
  componentDidMount() {  }//当 Clock 组件第一次被渲染到 DOM 中的时候运行
  componentWillUnmount() {  }//同时，当 DOM 中 Clock 组件被删除的时候运行
  constructor(props){
    super(props);
    // super（参数）是子类给父类的构造函数传递参数,先执行父类构造函数后执行子类构造函数(construstor)
    // //this.props必须是一个对象，才能在它下面定义属性
		//constructor（props）中传入的参数props为对象
		//super(props)的作用就是在父类的构造函数中给props赋值一个对象this.props = props这样你就能在它下面定义你要用到的属性了，其他没有传参的直接赋值为undefuined
    this.state={
      textif:true
    }
    //this.props=this.sd;//
    console.log(props);
     console.log(this.props);
  }
  // super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
    // state={
    //     textif:true
    // }
  render() {
    // var ss="取消"
    return (
      <div>
        <input type="text" />
        <input type="button" value={this.state.textif?"收藏":"取消收藏"}onClick={
            // this.ss="收藏"
          ()=>{if(this.state.textif){this.setState({textif:false})}else{
            this.setState({textif:true})
          }}
         }/>
      </div>
    )
  }
}
