import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import PageNotFound from './pages/pagenotfound'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/auth/login'
import Logout from './pages/auth/logout'
import Dashboard from './pages/admin/dashboard'
import PortfolioProjects from './pages/admin/portfolio/projects'
import AdminLayout from './components/layout/adminLayout'
import AddEditProject from './pages/admin/portfolio/projects/addEditProject'
import Projects from './pages/projects'
import Layout from './components/layout'
import ProjectDetail from './pages/projects/projectDetail'

function App() {

  return (
    <Routes>
      {/* Auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/logout" element={<Logout />} />

      {/* Public */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
        <Route path="/projects/:id" element={<ProjectDetail />} />

      {/* Admin - Protected */}
      <Route path="/admin" element={
        <ProtectedRoute>
          {/* <AdminLayout1 /> */}
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />  {/* Default admin page */}

        {/* Portfolio */}
        <Route path="portfolio/about" element={<div>About</div>} />

        {/* Projects */}
        <Route path="portfolio/projects" element={<PortfolioProjects />} />
        <Route path="portfolio/projects/:id" element={<div>Project detail</div>} />
        <Route path="portfolio/projects/add" element={<AddEditProject />} />
        <Route path="portfolio/projects/:id/edit" element={<div>Edit project</div>} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
