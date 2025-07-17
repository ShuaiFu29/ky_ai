import {
  useState,
  useEffect,
  Suspense,
  lazy
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Loading from './components/Loading'
const RepoList = lazy(() => import('./pages/RepoList'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/users/:id/repos' element={<RepoList />}></Route>
        <Route path='*' element={<Navigate to='/users/ShuaiFu29/repos' />}></Route>
      </Routes>
    </Suspense>
  )
}

export default App

