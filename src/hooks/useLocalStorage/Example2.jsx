import React from 'react'
import useLocalStorage from './useLocalStorage'

function Example2() {
  const [name, setName] = useLocalStorage('myName', '')
  return (
    <div>
      {name}
      <input
        type="text"
        placeholder="Enter your name"
        name={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  )
}
export default Example2
