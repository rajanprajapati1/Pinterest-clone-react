import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {MyProvider} from './useMyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MyProvider>
    <App />
  </MyProvider>
  </React.StrictMode>,
)
