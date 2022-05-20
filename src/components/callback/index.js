import React, { useCallback, useState } from 'react'
import List from "./List"

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  // only recreate this when number changes
  const getItems = useCallback(() => {
    return [number, number+1, number+2]
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
  }
  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  )
}

export default App