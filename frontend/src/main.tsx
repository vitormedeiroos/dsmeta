import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'// esses import's são pra usar recursos de putros apps 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
