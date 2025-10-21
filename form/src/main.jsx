import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactForm from './components/Formcontacto' 
import 'virtual:windi.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactForm/>
  </StrictMode>,
)
