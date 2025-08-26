import { useState } from 'react'
import './CenturyGrid.css'

function CenturyGrid({ dates }) {
  const [hoveredYear, setHoveredYear] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  // Parse dates and group by year
  const eventsByYear = {}
  dates.forEach(dateEntry => {
    // Extract year from date string (handle formats like "Aug 13, 1942", "48BCE", etc.)
    const dateStr = dateEntry.date
    let year
    
    if (dateStr.includes('BCE')) {
      year = -parseInt(dateStr.match(/\d+/)[0])
    } else {
      const yearMatch = dateStr.match(/(\d{1,4})$/)
      if (yearMatch) {
        year = parseInt(yearMatch[1])
      }
    }
    
    if (year) {
      if (!eventsByYear[year]) {
        eventsByYear[year] = []
      }
      eventsByYear[year].push(dateEntry.description)
    }
  })

  // Determine which centuries to show based on available data
  const years = Object.keys(eventsByYear).map(y => parseInt(y)).filter(y => !isNaN(y))
  const minYear = Math.min(...years)
  const maxYear = Math.max(...years)
  
  const minCentury = Math.floor(minYear / 100)
  const maxCentury = Math.floor(maxYear / 100)
  
  const centuries = []
  for (let c = minCentury; c <= maxCentury; c++) {
    centuries.push(c)
  }

  const handleMouseEnter = (year, event) => {
    if (eventsByYear[year]) {
      setHoveredYear(year)
      setTooltipPos({ x: event.clientX, y: event.clientY })
    }
  }

  const handleMouseLeave = () => {
    setHoveredYear(null)
  }

  const getCenturyLabel = (century) => {
    if (century < 0) {
      const centuryNum = Math.abs(century)
      // For BCE: century -1 = 1st Century BCE (100-1 BCE)
      // century -2 = 2nd Century BCE (200-101 BCE), etc.
      const endYear = Math.abs(century) * 100
      const startYear = endYear - 99
      let suffix = 'th'
      if (centuryNum === 1) suffix = 'st'
      else if (centuryNum === 2) suffix = 'nd'
      else if (centuryNum === 3) suffix = 'rd'
      
      return `${centuryNum}${suffix} Century BCE (${endYear} - ${startYear} BCE)`
    } else if (century === 0) {
      return `1st Century CE (1 - 100)`
    } else {
      const centuryNum = century + 1
      const startYear = century * 100
      let suffix = 'th'
      if (centuryNum === 1) suffix = 'st'
      else if (centuryNum === 2) suffix = 'nd'
      else if (centuryNum === 3) suffix = 'rd'
      else if (centuryNum === 21) suffix = 'st'
      
      return `${centuryNum}${suffix} Century (${startYear}s)`
    }
  }

  const renderCentury = (century) => {
    const startYear = century * 100
    const cells = []
    
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const year = startYear + (row * 10) + col
        const hasEvents = eventsByYear[year]
        const isYearZero = year === 0
        // For 1st Century BCE (century -1), the last cell would be year -1 (1 BCE)
        // but since there's no year 0, this creates a gap
        const isLastBCECell = century === -1 && row === 9 && col === 9
        const isGrayedCell = isYearZero || isLastBCECell
        
        let title = year.toString()
        if (isYearZero) {
          title = 'Year 0 (does not exist)'
        } else if (isLastBCECell) {
          title = '1 BCE (transitions to 1 CE)'
        }
        
        cells.push(
          <div
            key={year}
            className={`century-cell ${hasEvents ? 'has-events' : ''} ${isGrayedCell ? 'year-zero' : ''}`}
            title={title}
            onMouseEnter={isGrayedCell ? undefined : (e) => handleMouseEnter(year, e)}
            onMouseLeave={isGrayedCell ? undefined : handleMouseLeave}
          />
        )
      }
    }
    
    return (
      <div key={century} className="century-container">
        <div className="century-label">
          {getCenturyLabel(century)}
        </div>
        <div className="century-grid">
          {cells}
        </div>
      </div>
    )
  }

  return (
    <div className="century-grid-component">
      <h2>Historical Timeline</h2>
      <p className="grid-description">
        Each grid represents a century. Colored cells indicate years with recorded events.
      </p>
      
      <div className="centuries-container">
        {centuries.map(renderCentury)}
      </div>
      
      {hoveredYear && eventsByYear[hoveredYear] && (
        <div 
          className="tooltip"
          style={{ 
            left: tooltipPos.x + 10, 
            top: tooltipPos.y - 10,
            position: 'fixed',
            zIndex: 1000
          }}
        >
          <div className="tooltip-year">{hoveredYear}</div>
          <ul className="tooltip-events">
            {eventsByYear[hoveredYear].map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CenturyGrid
