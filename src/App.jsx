import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Services from './pages/app/Services'
import About from './pages/app/About'
import Partners from './pages/app/Partners'
import Contact from './pages/app/Contact'
import ProtectedRoute from './route/ProtectRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<AppLayout />}>
              <Route path='services' element={<Services />} />
              <Route path='aboutus' element={<About />} />
              <Route path='team' element={<Partners />} />
              <Route path='contactus' element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
