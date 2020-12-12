import React from 'react'
import useLocalStorage from './useLocalStorage'

function Usage() {
  const [count, setCount] = useLocalStorage('myCount', 0)

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>increment</button>
      &nbsp;
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
    </div>
  )
}
export default Usage
