import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Landing from './components/landing'
import About from './components/about'
import Team from './components/team'
import Goals from './components/goals'
import Contact from './components/contact'
import Resources from './components/resources'

function App() {

  return (
    <>
      <NavBar/>
      <Landing/>
      <About/>
      <Team/>
      <Goals/>
      <Resources/>
      <Contact/>
    </>
  )
}

export default App
