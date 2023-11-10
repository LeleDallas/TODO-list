import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import en_GB from 'antd/locale/en_GB';
import { store } from './store.ts'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={en_GB}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
