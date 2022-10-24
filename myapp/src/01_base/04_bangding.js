import React, { Component } from 'react'

export default class Bangding extends Component {
  
  render() {
    return (
      <div>
        <input type="text" className='shuru'/>
        {/* <button onClick={rendern}>rendern</button> */}
        {/* <button onClick={console.log(this)}>render</button> 类实例对象*/}
        {/* <button onClick={rendern}>render</button> 什么都没有*/}
        <button onClick={this.renderw.bind(this)}>render</button>
      </div>
    )
    // function rendern(){
    //   console.log(this);
    // }
  }
  renderw(){
    console.log(this);
  }

}
