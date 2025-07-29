import {
  useEffect
} from 'react'

function useTitle(title) {
  // useEffect(() => {
  //   document.title = title
  // }, [])
  document.title = title
}

export default useTitle