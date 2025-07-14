import {
  // Navigate,
  useLocation
} from "react-router-dom"
import { useNavigate } from "react-router-dom"

// 鉴权组件
const ProtectRoute = (props) => {
  // console.log(props)
  // 并非子组件 
  // children 属性  提升定制性
  const { children } = props
  const navigate = useNavigate()
  const { pathname } = useLocation()  // 获得当前路径
  console.log(pathname)
  if (pathname === '/login') {
    return navigate('/login', { state: { from: pathname } })
  }
  const isLogin = localStorage.getItem('isLogin') === 'true'
  if (!isLogin) {
    return navigate('/login', { state: { from: pathname } })
  }

  return (
    <>
      {isLogin ? children : <div>请先登录</div>}
    </>
  )
}
export default ProtectRoute