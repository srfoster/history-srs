import './DatesList.css'

function DatesList({ dates, onDeleteDate }) {
  if (dates.length === 0) {
    return (
      <div className="dates-list">
        <h2>Your Historical Dates</h2>
        <div className="empty-message">
          <p>No dates added yet. Add your first historical date above!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="dates-list">
      <h2>Your Historical Dates ({dates.length})</h2>
      <div className="table-container">
        <table className="dates-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dates.map(date => (
              <tr key={date.id} className="date-row">
                <td className="date-cell">{date.date}</td>
                <td className="description-cell">{date.description}</td>
                <td className="actions-cell">
                  <button 
                    className="delete-btn"
                    onClick={() => onDeleteDate(date.id)}
                    aria-label="Delete date"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DatesList
