import { useState } from 'react'
import React from 'react'
import SideNav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {

  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Projects />
    </div>
  )
}

export default App
