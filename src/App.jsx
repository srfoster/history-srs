import { useState } from 'react'
import './App.css'
import DatesList from './components/DatesList'
import CenturyGrid from './components/CenturyGrid'
import TodayInHistory from './components/TodayInHistory'
import { getFormattedDates } from './data/historical-dates'

function App() {
  const [currentView, setCurrentView] = useState('table')
  const dates = getFormattedDates()

  return (
    <div className="app">
      <header className="app-header">
        <h1>Historical Dates SRS</h1>
        <p>Study and memorize important historical dates</p>
        
        <nav className="view-nav">
          <button 
            className={`nav-btn ${currentView === 'grid' ? 'active' : ''}`}
            onClick={() => setCurrentView('grid')}
          >
            Grid View
          </button>
          <button 
            className={`nav-btn ${currentView === 'table' ? 'active' : ''}`}
            onClick={() => setCurrentView('table')}
          >
            Table View
          </button>
        </nav>
      </header>
      
      <main className="app-main">
        <TodayInHistory />
        
        {currentView === 'grid' ? (
          <CenturyGrid dates={dates} />
        ) : (
          <DatesList dates={dates} />
        )}
      </main>
    </div>
  )
}

export default App
