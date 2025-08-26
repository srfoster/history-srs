import { useState } from 'react'
import './DatesList.css'

function DatesList({ dates }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOrder, setSortOrder] = useState('forward') // 'forward', 'reverse', 'unsorted'
  const itemsPerPage = 50

  // Enhanced chronological sorting function
  const getSortedDates = () => {
    if (sortOrder === 'unsorted') {
      return dates // Return original order from YAML
    }

    const getYear = (dateStr) => {
      // Handle cases where dateStr is just a year (for Unknown dates)
      if (!dateStr.includes(',')) {
        if (dateStr.includes('BCE')) {
          return -parseInt(dateStr.replace('BCE', '').trim())
        }
        return parseInt(dateStr.replace('CE', '').trim())
      }
      
      // Handle formatted dates like "Aug 9, 48BCE" or "Jul 28, 1914"
      const parts = dateStr.split(',')
      if (parts.length >= 2) {
        const yearPart = parts[parts.length - 1].trim() // Get the last part (year)
        if (yearPart.includes('BCE')) {
          return -parseInt(yearPart.replace('BCE', '').trim())
        }
        return parseInt(yearPart.replace('CE', '').trim())
      }
      
      // Fallback: try to extract any number from the string
      const match = dateStr.match(/-?\d+/)
      return match ? parseInt(match[0]) : 0
    }
    
    const sorted = [...dates].sort((a, b) => {
      const yearA = getYear(a.date)
      const yearB = getYear(b.date)
      return yearA - yearB
    })

    return sortOrder === 'reverse' ? sorted.reverse() : sorted
  }

  const sortedDates = getSortedDates()

  // Pagination calculations
  const totalPages = Math.ceil(sortedDates.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDates = sortedDates.slice(startIndex, endIndex)

  const goToPage = (page) => {
    setCurrentPage(page)
    // Scroll to top of table when changing pages
    document.querySelector('.dates-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  const changeSortOrder = (newSortOrder) => {
    setSortOrder(newSortOrder)
    setCurrentPage(1) // Reset to first page when changing sort order
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  return (
    <div className="dates-list">
      <div className="table-header">
        <h2>Historical Dates</h2>
        <div className="table-info">
          <span>Total: {sortedDates.length} events</span>
          <span>Page {currentPage} of {totalPages}</span>
        </div>
      </div>
      
      <div className="sort-controls">
        <span className="sort-label">Sort by:</span>
        <button 
          className={`sort-btn ${sortOrder === 'forward' ? 'active' : ''}`}
          onClick={() => changeSortOrder('forward')}
        >
          Chronological (BCE → CE)
        </button>
        <button 
          className={`sort-btn ${sortOrder === 'reverse' ? 'active' : ''}`}
          onClick={() => changeSortOrder('reverse')}
        >
          Reverse (CE → BCE)
        </button>
        <button 
          className={`sort-btn ${sortOrder === 'unsorted' ? 'active' : ''}`}
          onClick={() => changeSortOrder('unsorted')}
        >
          Original Order
        </button>
      </div>
      
      <div className="table-container">
        <table className="dates-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event Description</th>
            </tr>
          </thead>
          <tbody>
            {currentDates.map((date, index) => (
              <tr key={startIndex + index} className="date-row">
                <td className="date-cell">{date.date}</td>
                <td className="description-cell">{date.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn" 
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          <div className="pagination-numbers">
            {getPageNumbers().map((page, index) => (
              page === '...' ? (
                <span key={index} className="pagination-ellipsis">...</span>
              ) : (
                <button
                  key={page}
                  className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              )
            ))}
          </div>
          
          <button 
            className="pagination-btn" 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default DatesList
