import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/index.css"
import { RouterProvider } from 'react-router'
import router from './Router'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
