import { useState } from 'react'
import './App.css'
import NameEditComponent from './components/NameEditComponent'



function App() {
  // JS 代码
  // const [name,setName]=useState('initalName')
  // TS 代码
  const [name, setName] = useState<string>('initalName')
  const setUserNameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <>
      <NameEditComponent useName={name} onChange={setUserNameState} />
    </>
  )
}

export default App
