import React, { Component } from 'react'

export default class Bangding extends Component {
 a=100
  render() {
    return (
      <div>
        <input type="text" className='shuru'/>
       <input type={"button"} onClick={()=>{console.log(this.a);
      // 不能写太多代码逻辑较少可以
      }} value={"click1"}/>
      <input type="button" value="click2"onClick={this.click2.bind(this)} />
      <input type="button" value="click3"onClick={this.click3
    //不能加小括号，加小括号会自动执行
    } />
      <input type="button" value="click4"onClick={()=>{
        this.click4()//可以加小括号因为有箭头函数点击执行箭头函数，箭头函数不是自动执行
        // 还可以写成onClick={()=>this.click4()}，非常推荐穿参数
      }} />
       {/* <button onClick={this.click3}></button> */}
      </div>
    )
  }
 click2(){
console.log("click2",this.a);
// 谁调用的我我就指向谁，我指向buttun
// render里面的this指向APP实例对象
 }
 click3=()=>{
console.log("click3",this.a);
// 箭头函数的this指向外部对象，click3中的this
// evt是button中的绑定事件源
 }
//  click3=(evt)=>{
//   console.log("click3",this.a,evt);
//   // evt是button中的绑定事件源
//    }
 click4=()=>{
  console.log("click",this.a);
 }
  }
  // 改变this指向
// bind只会改变this指向不会自动执行会返回一个新函数，要自动执行要加（）
// apply ，call会自动执行
// react事件绑定并不是绑定在具体元素身上，而是绑定在根节点身上，事件代理模式


