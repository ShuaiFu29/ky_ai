import { useCountStore } from '../../store/count'

const Counter = () => {
  const {
    count,
    increment,
    decrement
  } = useCountStore()
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
    </>
  )
}

export default Counter