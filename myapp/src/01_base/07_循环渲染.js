import React, { Component } from 'react'

export default class Xuanran extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   list: ["1111", "22222", "33333"]
    // }
    this.state = {
      list: [{ id: 1, test: "sdsdsd" }, { id: 2, test: "yhyhyhyh" }, { id: 3, test: "rbrvrvrvr" }
      ]
    }
  }
  render() {
    return (
      <div>
        <ul>
          {/* array.map(function(currentValue,index,        arr),              thisValue)
                                  必，值    选，索引 选，当前元素属于的数组对象
map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
map() 方法按照原始数组元素顺序依次处理元素。
注意： map() 不会对空数组进行检测。
注意： map() 不会改变原始数组。 */}
          {/* {this.state.list.map((item, index) => <li key={index}>{item}</li>)} */}
          {/* 每一个li标签都必须有一个Key值，且Key值不同唯一 ,理想的Key对应内容唯一值，map中的Index会变*/}
          {this.state.list.map((item, index) => <li key={item.id}>{item.test}--{index}--{item.id}</li>)}
        </ul>
      </div>
    )
  }
}
