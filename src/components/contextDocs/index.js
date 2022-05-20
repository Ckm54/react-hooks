import React from 'react'
import FunctionContextComponent from "./FunctionContextComponent"
// import ClassContextComponent from "./ClassContextComponent"
import { ThemeProvider } from './context'

export default function App() {

  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  )
}