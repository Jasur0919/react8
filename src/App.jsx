import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Login, Users } from './pages'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
    <>
     <div className="App">
      <AnimatedCursor 
         color='245, 241, 241'
      />
    </div>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
