// 导入react
import React from 'react'

class Hello extends React.Component {
  //修改数据只能在setState里面去修改
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <h1>当前数据是:{this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

// 导出组件
export default Hello
