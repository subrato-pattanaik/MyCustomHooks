import { useState } from 'react'

function useLocalStorage(key, defaultValue) {
  const initialValue = () => {
    let value
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(defaultValue),
      )
    } catch (error) {
      value = defaultValue
    }
    return value
  }

  const [state, setState] = useState(initialValue)

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value
      setState(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  return [state, setValue]
}

export default useLocalStorage
