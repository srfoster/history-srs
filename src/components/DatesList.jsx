import './DatesList.css'

function DatesList({ dates }) {
  // Sort dates chronologically (earliest first)
  const sortedDates = [...dates].sort((a, b) => {
    const getYear = (dateStr) => {
      if (dateStr.includes('BCE')) {
        return -parseInt(dateStr.replace('BCE', ''))
      }
      return parseInt(dateStr)
    }
    
    return getYear(a.date) - getYear(b.date)
  })

  return (
    <div className="dates-list">
      <h2>Historical Dates ({sortedDates.length})</h2>
      <div className="table-container">
        <table className="dates-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event Description</th>
            </tr>
          </thead>
          <tbody>
            {sortedDates.map((date, index) => (
              <tr key={index} className="date-row">
                <td className="date-cell">{date.date}</td>
                <td className="description-cell">{date.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DatesList
