import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return state
  }
  
}
function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0})
  // const [count, setCount] = useState(0)

  function incrementCount() {
    dispatch({type: ACTIONS.INCREMENT})
  }

  function decrementCount() {
    dispatch({type: ACTIONS.DECREMENT})
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