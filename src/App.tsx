import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Projects from './sections/projects'
import PageNotFound from './pages/pagenotfound'
import Admin from './pages/admin'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/auth/login'
import Logout from './pages/auth/logout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth/logout" element={<Logout />} />
      <Route path="/admin/*" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
