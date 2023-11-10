import React, { useState } from "react"

const Temp = () => {
  const [state, setState] = useState(0)
  return (
    <>
      <button onClick={(_) => setState((state) => state + 1)}>Click me</button>
      <div>{state}</div>
    </>
  )
}

export default Temp
