import React, { Component } from 'react'

export default class Ref extends Component {
    aa=React.createRef()
  render() {
    return (
      <div>
       <input type="text" ref={this.aa}/>
       {/* <input type={"button"} onClick={()=>{console.log(this.aa); }} value={"click1"} />aa里面的current里面才是input原生元素
        */}
        <input type={"button"} onClick={()=>{console.log(this.aa.current.value); }} value={"click1"} />
     </div>

    )
  }
}
