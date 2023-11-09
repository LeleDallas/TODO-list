import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import en_GB from 'antd/locale/en_GB';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={en_GB}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
