import React, { useState, useEffect } from 'react'

function App() {
  // useEffect hook is used when there is going to be some side effect happening within code e.g fetching data from an Api
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // do a cleanup so as not to constantly add an event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <hr />
      <h2>Use Effect Hook</h2>
      <hr />
      <h2>useEffect with window width</h2>
      <div>Window width: {windowWidth}</div>

      <hr />
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{ resourceType }</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App