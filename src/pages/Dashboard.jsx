import React from 'react'

function Dashboard({ role, setRole }) {
  const logout = () => {
    localStorage.removeItem("role")
    setRole("")
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Vítejte v elektronické kartotéce ({role === 'ucitel' ? 'Učitel' : 'Žák'})</h1>
      <button onClick={logout}>Odhlásit se</button>

      <div className="card">
        <h2>Seznam pacientů</h2>
        <p>Zatím bez funkčnosti – připraveno pro další vývoj.</p>
      </div>
    </div>
  )
}

export default Dashboard