import React from 'react'

class Hello extends React.Component {
  handleClick(e) {
    e.preventDefault() // 阻止了默认的跳转行为
    console.log('点击事件被触发了')
  }

  render() {
    return (
      <a href='http://www.baidu.com' onClick={this.handleClick}>hello component</a>
    )
  }
}

export default Hello
