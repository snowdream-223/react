// class test{
//     constructor(){
//         // 构造器函数

//     }
//     test(){
//         // 函数
//     }
// }
// var obj=new test();
// obj.test
// // 用法
import React from "react";
import Qiantao from "./03_qiantao_class";
import '../css/01css_01class.css'//导入CSS模块。webpackk支持 
import '../css/style'
import { ssd } from "../css/style";

class App extends React.Component{
    // 命名首字母要大写
    // extends React.Component可以调用的组件类必须继承
    //reender函数是固定的是用来渲染的
    
    render (){
    const bb={
        backgroundColor:"red"
    }
        return (
        <div>我是第一大组件
            <div>
               <Qiantao></Qiantao>
                {/* 组件嵌套 */}
            </div>
            {/* {}里面可以放表达式10+20，不能放语句 */}
            <div className="aa">单纯css文件引入</div>
            <div style={bb}>css对象</div>
            <div style={ssd}>外部css对象文件导入
            <Qiantao></Qiantao>
            外部css对象文件导入 </div>

            我是第一大组件
        </div>
        

                )
                //小括号保障整体
        //只能有一个父元素
     }
}
export default App
//导出组件
//导入用import APP from‘./****’