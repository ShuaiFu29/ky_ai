import './App.css'
import {
  Suspense,
  lazy
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'
const Home = lazy(() => import('@/pages/Home'))
const Collection = lazy(() => import('@/pages/Collection'))
const Account = lazy(() => import('@/pages/Account'))
const Discount = lazy(() => import('@/pages/Discount'))
const Search = lazy(() => import('@/pages/Search'))
const Trip = lazy(() => import('@/pages/Trip'))
const Detail = lazy(() => import('@/pages/Detail'))
const Toast = lazy(() => import('@/components/Toast'))
const Coze = lazy(() => import('@/pages/Coze'))

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/*  带有tabbar的layout */}
        <Routes >
          <Route element={<MainLayout />}>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/account' element={<Account />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/trip' element={<Trip />} />
          </Route>
          {/* 空的Navbar */}
          <Route element={<BlankLayout />}>
            <Route path='/search' element={<Search />} />
            <Route path="/coze" element={<Coze />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
      <Toast />
    </>
  )
}

export default App
