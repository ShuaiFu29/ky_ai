import Child from '../Child'
import { useTheme } from '../../hooks/useTheme'
const Page = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <>
      <Child />
    </>
  )
}
export default Page