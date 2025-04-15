import React, { useState } from 'react'
import './style.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [role, setRole] = useState(localStorage.getItem("role") || "")

  return (
    role ? <Dashboard role={role} setRole={setRole} /> : <Login setRole={setRole} />
  )
}

export default App