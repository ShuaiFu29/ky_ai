import {
  createContext,
} from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext value=''>
      {children}
    </GlobalContext>
  )
}