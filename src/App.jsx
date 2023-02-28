import { useState } from 'react'
import React from 'react'
import SideNav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
