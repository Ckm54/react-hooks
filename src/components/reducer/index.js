import React, { useReducer } from 'react'


const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      return state
  }
  
}
function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0})
  // const [count, setCount] = useState(0)

  function incrementCount() {
    dispatch({type: 'increment'})
  }

  function decrementCount() {
    dispatch({type: 'decrement'})
  }
  return (
    <div>
      <h2>Using the useReducer hook</h2>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default App