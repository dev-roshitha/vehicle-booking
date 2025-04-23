import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
