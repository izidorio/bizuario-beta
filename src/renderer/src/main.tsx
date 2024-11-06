import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

import { ThemeProvider } from '@renderer/components/theme-provider'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
