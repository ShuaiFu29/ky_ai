import React from "react"
import avatar from './images/avatar.webp'
import book from './images/book.webp'
import {
  add
} from './math'

const Hello = () => {
  return (
    <>
      你好！
      Hello World!
      <img src={avatar} alt="" />
      <img src={book} alt="" />
      {
        add(2, 1)
      }
    </>
  )
}
export default Hello