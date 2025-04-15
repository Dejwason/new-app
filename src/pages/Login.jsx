import React, { useState } from 'react'

function Login({ setRole }) {
  const [inputPass, setInputPass] = useState("")

  const handleLogin = (role) => {
    if (role === "ucitel") {
      if (inputPass === "ucitel123") {
        localStorage.setItem("role", "ucitel")
        setRole("ucitel")
      } else {
        alert("Špatné heslo")
      }
    } else {
      localStorage.setItem("role", "zak")
      setRole("zak")
    }
  }

  return (
    <div className="card" style={{ maxWidth: 400, margin: 'auto', marginTop: 100 }}>
      <h2>Vyberte roli</h2>
      <button onClick={() => handleLogin("zak")}>Žák</button>
      <div style={{ marginTop: 10 }}>
        <input
          type="password"
          placeholder="Heslo pro učitele"
          value={inputPass}
          onChange={e => setInputPass(e.target.value)}
        />
        <button onClick={() => handleLogin("ucitel")}>Učitel</button>
      </div>
    </div>
  )
}

export default Login