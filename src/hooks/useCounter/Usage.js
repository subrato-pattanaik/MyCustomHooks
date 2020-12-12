import React from 'react'
import useCounter from './useCounter'

const myStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#000C1D',
  color: 'white',
  height: '100vh',
}

function Usage() {
  const [count, incrementCount, decrementCount, resetCount] = useCounter(0)
  return (
    <div style={myStyle}>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
      &nbsp;
      <button onClick={decrementCount}>Decrement</button>
      &nbsp;
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Usage
