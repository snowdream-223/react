import React, { Component } from 'react'
import '../css/style'
import { ssf } from '../css/style'
//简写函数
const Qiantaoa=()=><div>简易函数</div>
export default class Qiantao extends Component {
  render() {
    return (
      <div style={ssf}>
        我是嵌套
        <Qiantaoa></Qiantaoa>
        我是嵌套
      </div>
    )
  }
}

