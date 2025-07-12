import {
  useEffect
} from 'react'
import { useParams } from 'react-router-dom'
const UserProfile = () => {
  const params = useParams()
  console.log(params)
  useEffect(() => {

    console.log(window.location)
  }, [])
  return (
    <>
      <h1>UserProfile{params.id}</h1>
    </>
  )
}
export default UserProfile