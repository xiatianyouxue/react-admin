import React from 'react'

class Hello extends React.Component {
  state = {
    count: 10
  }

  render() {
    return (
      <div>
        <h1>当前数据是:{this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>+1
        </button>
      </div>
    )
  }
}

export default Hello
