import React, { useState, useEffect } from 'react'
import PatientList from '../components/PatientList'
import PatientDetail from '../components/PatientDetail'

function Dashboard({ role, setRole }) {
  const [patients, setPatients] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem("patients")
    if (data) setPatients(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients))
  }, [patients])

  const addPatient = () => {
    const name = prompt("Jméno pacienta:")
    const birthDate = prompt("Datum narození:")
    if (name && birthDate) {
      setPatients([...patients, { name, birthDate }])
    }
  }

  const deletePatient = (index) => {
    if (window.confirm("Opravdu smazat pacienta?")) {
      const newList = [...patients]
      newList.splice(index, 1)
      setPatients(newList)
      setSelectedIndex(null)
    }
  }

  const updatePatient = (index, updated) => {
    const newList = [...patients]
    newList[index] = updated
    setPatients(newList)
  }

  const logout = () => {
    localStorage.removeItem("role")
    setRole("")
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Elektronická kartotéka ({role})</h1>
      <button onClick={logout}>Odhlásit se</button>
      {role === 'ucitel' && <button onClick={addPatient}>➕ Nový pacient</button>}
      <PatientList patients={patients} selectPatient={setSelectedIndex} deletePatient={deletePatient} role={role} />
      {selectedIndex !== null && (
        <PatientDetail patient={patients[selectedIndex]} index={selectedIndex} updatePatient={updatePatient} role={role} />
      )}
    </div>
  )
}

export default Dashboard