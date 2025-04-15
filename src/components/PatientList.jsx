import React from 'react'

function PatientList({ patients, selectPatient, role, deletePatient }) {
  return (
    <div className="card">
      <h2>Pacienti</h2>
      {patients.length === 0 ? (
        <p>Žádní pacienti</p>
      ) : (
        <ul>
          {patients.map((p, index) => (
            <li key={index}>
              <b>{p.name}</b> ({p.birthDate})
              <button onClick={() => selectPatient(index)}>Detail</button>
              {role === 'ucitel' && (
                <button onClick={() => deletePatient(index)}>🗑️</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PatientList