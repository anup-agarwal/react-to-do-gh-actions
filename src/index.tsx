import React from 'react'
import { createRoot } from "react-dom/client"
import App from './App'

const rootEl = createRoot(document.getElementById("root"))

rootEl.render(<App />)