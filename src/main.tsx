import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.tsx'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')!).render(<App />)
