import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './01_base/01_class'
import Appa from './01_base/02_function_class'
import './01_base/04_bangding'
import Bangding from './01_base/04_bangding'
// import { createRoot } from 'react-dom/client';
// const con=document.getElementById("root")
// const conn=document.getElementById("roota")
// const cona=createRoot(con)
// const conb=createRoot(conn)
// cona.render(<App></App>)
// conb.render(<Appa></Appa>)//新版写法，就是一直赋值
// createRoot(document.getElementById("rootb")).render(<Appa></Appa>)//综合写法
ReactDOM.render(<App></App>,document.getElementById("root"))
ReactDOM.render(<Appa></Appa>,document.getElementById("roota"))
ReactDOM.render(<Bangding></Bangding>,document.getElementById("rootb"))