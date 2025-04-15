import React, { useState } from 'react'

function PatientDetail({ patient, updatePatient, index, role }) {
  const [tab, setTab] = useState("udaje")
  const [editData, setEditData] = useState({ ...patient })

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value })
  }

  const save = () => {
    updatePatient(index, editData)
  }

  return (
    <div className="card">
      <h2>Detail pacienta</h2>
      <div>
        {["udaje", "navstevy", "predpis", "poznamky"].map(t => (
          <button key={t} onClick={() => setTab(t)}>{t.toUpperCase()}</button>
        ))}
      </div>

      {tab === "udaje" && (
        <>
          <input name="name" value={editData.name} onChange={handleChange} placeholder="Jméno" />
          <input name="birthDate" value={editData.birthDate} onChange={handleChange} placeholder="Datum narození" />
          <input name="address" value={editData.address} onChange={handleChange} placeholder="Adresa" />
          <input name="phone" value={editData.phone} onChange={handleChange} placeholder="Telefon" />
          {role === 'ucitel' && <button onClick={save}>💾 Uložit</button>}
        </>
      )}

      {tab === "navstevy" && (
        <>
          <ul>
            {editData.visits?.map((v, i) => <li key={i}>{v.date} – {v.diagnosis}</li>)}
          </ul>
          <input name="visitDate" placeholder="Datum návštěvy"
                 onChange={e => setEditData({ ...editData, newVisitDate: e.target.value })} />
          <input name="visitDiag" placeholder="Diagnóza"
                 onChange={e => setEditData({ ...editData, newVisitDiag: e.target.value })} />
          <button onClick={() => {
            const visits = [...(editData.visits || []), { date: editData.newVisitDate, diagnosis: editData.newVisitDiag }]
            updatePatient(index, { ...editData, visits })
          }}>➕ Přidat návštěvu</button>
        </>
      )}

      {tab === "predpis" && (
        <>
          <textarea name="prescription" value={editData.prescription || ""} onChange={handleChange} />
          <button onClick={() => window.print()}>🖨️ Tisk</button>
          {role === 'ucitel' && <button onClick={save}>💾 Uložit</button>}
        </>
      )}

      {tab === "poznamky" && (
        <>
          <textarea name="notes" value={editData.notes || ""} onChange={handleChange} />
          {role === 'ucitel' && <button onClick={save}>💾 Uložit</button>}
        </>
      )}
    </div>
  )
}

export default PatientDetail