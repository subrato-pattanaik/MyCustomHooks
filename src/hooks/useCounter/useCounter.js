import {useState} from 'react'

function useCounter(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue)

  const increment = () => setCount((prevCount) => prevCount + 1)
  const decrement = () => {
    if (count <= 0) {
      setCount(0)
    } else {
      setCount((prevCount) => prevCount - 1)
    }
  }
  const reset = () => setCount(0)

  return [count, increment, decrement, reset]
}

export default useCounter
