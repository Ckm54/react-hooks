import React, { useState, useMemo, useEffect } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  // only update this object hen actual contents are changed i.e dark
  // memoize the current theme styles object
  const themeStyles = useMemo(() => 
  {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }
  }, [dark])

  // only run this effect when the actual theme style object is updated
  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles])

  return (
    <>
      <input type="number" value={number} onChange={(e) => {
        setNumber(parseInt(e.target.value))
      }} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{ doubleNumber }</div>
    </>
  )
}


// some code to simulate the process of a slow application process
function slowFunction(num) {
  console.log("calling slow function")
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2
}

export default App