import React, {useLayoutEffect, useEffect, useState, useRef} from 'react'

export default function Modal() {

  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()

  // with useEffect the popup is displayed after the DOM is painted
  // use the useLayoutEffect hook to display the popup more cleanly due to its synchronous nature
  useLayoutEffect(() => {
    if(popup.current == null || button.current == null) return
    const {bottom} = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px`
  }, [show])
  return (
    <>
      <button ref={button} onClick={() => setShow(prevShow => !prevShow)}>Click here</button>
      {show && (
        <div style={{position: "absolute"}} ref={popup}>This is a popup</div>
      )}
    </>
  )
}
