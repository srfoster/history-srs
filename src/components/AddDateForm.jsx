import { useState } from 'react'
import './AddDateForm.css'

function AddDateForm({ onAddDate }) {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!date.trim() || !description.trim()) {
      alert('Please fill in both date and description')
      return
    }

    onAddDate({
      date: date.trim(),
      description: description.trim()
    })

    // Clear form
    setDate('')
    setDescription('')
  }

  return (
    <div className="add-date-form">
      <h2>Add New Historical Date</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="e.g., Aug 13, 1942"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">What happened:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Manhattan Project Begins"
            className="form-input"
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Add Historical Date
        </button>
      </form>
    </div>
  )
}

export default AddDateForm
