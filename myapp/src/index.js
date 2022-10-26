import React from 'react'
 //import  ReactDOM  from 'react-dom'
import App from './01_base/01_class'
import Appa from './01_base/02_function_class'
// import './01_base/04_bangding'
 import Bangding from './01_base/04_bangding'
 import { createRoot } from 'react-dom/client';
// import './01_base/05_ref_引用'
 import Ref from './01_base/05_ref_引用'
import Stat from './01_base/06_stat_状态';
import Xuanran from './01_base/07_循环渲染';

// const con=document.getElementById("root")
// const conn=document.getElementById("roota")
// const cona=createRoot(con)
// const conb=createRoot(conn)
// cona.render(<App></App>)
// conb.render(<Appa></Appa>)//新版写法，就是一直赋值
// createRoot(document.getElementById("rootb")).render(<Appa></Appa>)//综合写法
// ReactDOM.render(<App></App>,document.getElementById("root"))
// ReactDOM.render(<Appa></Appa>,document.getElementById("roota"))
// ReactDOM.render(<Bangding></Bangding>,document.getElementById("rootb"))
// createRoot(document.getElementById("root")).render(<App></App>)
// createRoot(document.getElementById("roota")).render(<Appa></Appa>)
// createRoot(document.getElementById("rootb")).render(<Bangding></Bangding>)
// createRoot(document.getElementById("rootc")).render(<React.StrictMode> <Ref></Ref>{/* 严格模式 */}</React.StrictMode>)
createRoot(document.getElementById("root")).render(<div>
    <App></App>
    <hr />
    <Appa></Appa>
    <hr />
    <Bangding></Bangding>
    <hr />
    <Ref></Ref>
    <hr />
    <Stat></Stat>
    <hr />
    <Xuanran></Xuanran>
    </div>)
