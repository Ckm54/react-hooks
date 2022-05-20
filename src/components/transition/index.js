import React, { useState, useTransition } from 'react'

// emulate an application with alot of data in it
function App() {

  const [isPending, startTransition] = useTransition()

  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const LIST_SIZE = 20000;

  function handleChange(e) {
    // this code is high priority
    setInput(e.target.value)
    // this operation takes long and slows down the application...has some lower priority
    // this code is low priority
    startTransition(() => {
      const l = []
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value)
      }
      setList(l)
    })
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? "Loading..." : list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </>
  )
}

export default App