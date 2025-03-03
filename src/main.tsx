import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './context/theme/themeProvider.tsx'
import Loader from './components/common/Loader/index.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/common/ErrorBoundary/index.tsx'

const AppLazy = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <AppLazy />
          </Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)
