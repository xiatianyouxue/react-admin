import React from 'react'
import ReactDom from 'react-dom'
import './App.css'
// const list = [
//   {id: 1, name: '知心绝对'},
//   {id: 2, name: '17岁'},
//   {id: 3, name: '像我这样的人'}
// ]
// const title = (
//   <ul>
//     {list.map(item => <li key={item.id}>{item.name}</li>)}
//   </ul>
// )

//JSX样式处理
const title = (
  <h1 className='color'>
    我是JSX样式处理
  </h1>
)
ReactDom.render(title, document.getElementById('root'))
