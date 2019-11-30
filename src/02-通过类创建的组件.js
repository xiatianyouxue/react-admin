import React from 'react'
import ReactDom from 'react-dom'

class Hello extends React.Component {
  render() {
    return <h1>我是类方式创建的组件</h1>
  }
}

ReactDom.render(<Hello/>, document.getElementById('root'))
