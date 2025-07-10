import './App.css'
import Page from './components/Page'
import { ThemeContext } from './ThemeContext'
import { useTheme } from './hooks/useTheme'
function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      {/* <Parent>
        <Child>
          <GrandChild>
            <GreatGrandChild>
            </GreatGrandChild>
          </GrandChild>
        </Child>
      </Parent> */}
      <ThemeContext.Provider value={theme}>
        <Page />
        <button onClick={() => toggleTheme()}>切换主题</button>
      </ThemeContext.Provider>
      {/* <Uncle /> */}
    </>
  )
}

export default App
