import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './layouts'
import { fetchAuth } from './services/api-service'
import { customTheme } from './themes'

const App: React.FC = () => {
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchAuth('senobiot')
      } catch (error) {
        console.error('API Error:', error)
      }
    }

    loadData()
  }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
