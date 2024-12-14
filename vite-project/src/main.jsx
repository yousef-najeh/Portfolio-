import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Components'
import "./gg.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
