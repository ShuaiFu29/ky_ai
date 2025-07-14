import './App.css'
import {
  lazy,
  Suspense
} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Navigation from './components/Navigation'

// 函数  路由 -> Route
// 新的组件  懒加载
import ProtectRoute from './pages/ProtectRoute'
const Navigation = lazy(() => import('./components/Navigation'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Pay = lazy(() => import('./pages/Pay'))
const Login = lazy(() => import('./pages/Login'))
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>加载中...</div>}>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/pay' element={<ProtectRoute>
              <Pay />
            </ProtectRoute>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
