import './App.css'
import {
  BrowserRouter as Router,  //   前端路由二选一
  Routes,
  Route,
  Link                     // SPA link 代替 a 标签
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <hr />
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
