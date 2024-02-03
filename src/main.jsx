import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auth0Provider from "./auth/auth-provider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
