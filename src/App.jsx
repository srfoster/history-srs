import { useState } from 'react'
import './App.css'
import DatesList from './components/DatesList'
import AddDateForm from './components/AddDateForm'
import CenturyGrid from './components/CenturyGrid'
import { getFormattedDates } from './data/historical-dates'

function App() {
  const [dates, setDates] = useState(getFormattedDates())

  const addDate = (newDate) => {
    const dateWithId = {
      ...newDate,
      id: Date.now() // Simple ID generation
    }
    setDates([...dates, dateWithId])
  }

  const deleteDate = (id) => {
    setDates(dates.filter(date => date.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Historical Dates SRS</h1>
        <p>Study and memorize important historical dates</p>
      </header>
      
      <main className="app-main">
        <CenturyGrid dates={dates} />
        <AddDateForm onAddDate={addDate} />
        <DatesList dates={dates} onDeleteDate={deleteDate} />
      </main>
    </div>
  )
}

export default App
