import React from "react"
import "./App.css"
import Temp from "./Temp"
import Temp2 from "./Temp2"

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Temp />
      <Temp2 />
    </div>
  )
}

export default App
