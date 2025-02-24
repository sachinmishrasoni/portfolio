import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './context/theme/themeProvider.tsx'
import Loader from './components/common/Loader/index.tsx'
import './index.css'

const AppLazy = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <AppLazy />
      </Suspense>
    </ThemeProvider>
  </StrictMode>,
)
