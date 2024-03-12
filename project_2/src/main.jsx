import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import PassGenerator from './generate-password.jsx'
// import PasswordGenerator from './password-generator'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PassGenerator />
  </React.StrictMode>,
)
