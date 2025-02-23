import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppThemeProvider from './context/AppThemeProvider.tsx'
import Loader from './components/common/Loader/index.tsx'

const AppLazy = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <Suspense fallback={<Loader />}>
        <AppLazy />
      </Suspense>
    </AppThemeProvider>
  </StrictMode>,
)
