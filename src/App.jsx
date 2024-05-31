import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login, Users } from './pages'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
