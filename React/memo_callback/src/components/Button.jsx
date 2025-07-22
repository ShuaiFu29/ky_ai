import {
  memo,
  useEffect
} from 'react'

const Button = (props) => {
  const num = props.num
  useEffect(() => {
    console.log('button Effect')
  }, [])

  console.log('Button render')
  return <button>{props.children}{num}</button>
}


// 高阶组件
export default memo(Button)