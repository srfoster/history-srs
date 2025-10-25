import React, { useState, useEffect } from 'react';
import './TodayInHistory.css';
import { getTodaysEvents } from '../data/historical-dates';

const TodayInHistory = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  // Helper function to get events for a specific date
  const getEventsForDate = async (date) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const monthName = months[date.getMonth()];
    const dayNumber = date.getDate();
    const dateKey = `${monthName} ${dayNumber}`;
    
    try {
      // Import the historical data
      const module = await import('../data/historical-dates');
      const historicalDatesData = module.historicalDatesData;
      const dayEvents = historicalDatesData[dateKey];
      
      if (!dayEvents || !Array.isArray(dayEvents)) {
        setEvents([]);
        return;
      }
      
      const formattedEvents = dayEvents.map((event, index) => ({
        id: `${dateKey}-${index}`,
        year: event.year,
        event: event.event,
        date: `${dateKey}, ${event.year}`
      }));
      
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error loading historical data:', error);
      setEvents([]);
    }
  };

  // Load events when date changes
  useEffect(() => {
    getEventsForDate(currentDate);
  }, [currentDate]);

  // Navigation functions
  const goToPreviousDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setCurrentDate(prevDay);
  };

  const goToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = () => {
    const today = new Date();
    return currentDate.toDateString() === today.toDateString();
  };

  const currentDateString = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="today-in-history">
      <div className="history-header">
        <h2>📅 {isToday() ? 'Today' : 'This Day'} in History</h2>
        
        <div className="date-navigation">
          <button className="nav-arrow" onClick={goToPreviousDay} title="Previous day">
            ◀
          </button>
          
          <div className="date-display">
            <p className="current-date">{currentDateString}</p>
            {!isToday() && (
              <button className="today-btn" onClick={goToToday}>
                Back to Today
              </button>
            )}
          </div>
          
          <button className="nav-arrow" onClick={goToNextDay} title="Next day">
            ▶
          </button>
        </div>
      </div>
      
      {(!events || events.length === 0) ? (
        <p className="no-events">No recorded historical events for this date.</p>
      ) : (
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <div className="event-year">{event.year}</div>
              <div className="event-description">{event.event}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodayInHistory;