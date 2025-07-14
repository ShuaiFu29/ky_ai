import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()  //  获得navigate 的能力       
  const { state } = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // const username = e.target.username.value
    // const password = e.target.password.value
    console.log(username, password) // 如果登录成功，则提示用户名和密码
    if (username === 'admin' && password === '123456') {
      localStorage.setItem('isLogin', 'true') // 如果登录成功，则设置登录状态为true
      navigate(state?.from || '/pay') // 如果登录成功，则跳转到当前路径 如果当前路径为/login，则跳转到/pay  
    } else {  // 如果登录失败，则跳转到登录页面，并携带当前路径
      localStorage.setItem('isLogin', 'false')
      navigate('/login', { state: { from: state?.from } })  // 如果登录失败，则跳转到登录页面，并携带当前路径   
      alert('用户名或密码错误') // 如果登录失败，则提示用户名或密码错误
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>登陆页面</h1>
      <input type="text" placeholder="请输入用户名" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="请输入密码" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">登陆</button>
    </form>
  )
}

export default Login