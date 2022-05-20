import React, { useState, useEffect } from 'react'
import Modal from './Modal'

function App() {

  const[count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <div>{count}</div>
      <hr />
      <Modal />
    </>
  )
}

export default App