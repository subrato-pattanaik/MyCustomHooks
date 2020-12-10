import React from 'react'
import useTimeout from './useTimeout'

function Usage() {
  const initialMessage = 'Message will change after twenty seconds'
  const [message, setMessage] = React.useState(initialMessage)
  useTimeout(() => setMessage('Changed!'), 20000)
  return <div>{message}</div>
}

export default Usage
