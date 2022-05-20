import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [name, setName] = useState("")

  const renderCount = useRef(0)
  const inputRef = useRef()
  const prevName = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  function focus() {
    inputRef.current.focus()
  }

  // store previous value of state
  useEffect(() => {
    prevName.current = name
  }, [name])
  return (
    <>
      <hr />
      <h2>UseRef Hook</h2>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <div>My name used to be {prevName.current}</div>
      <div>I rendered {renderCount.current} times</div>

      {/* create a button to change focus to input field when clicked */}
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App