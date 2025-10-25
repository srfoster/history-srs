import React from 'react';
import './TodayInHistory.css';

const TodayInHistory = ({ events }) => {
  const today = new Date();
  const todayString = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  if (!events || events.length === 0) {
    return (
      <div className="today-in-history">
        <h2>📅 Today in History</h2>
        <p className="today-date">{todayString}</p>
        <p className="no-events">No recorded historical events for today.</p>
      </div>
    );
  }

  return (
    <div className="today-in-history">
      <h2>📅 Today in History</h2>
      <p className="today-date">{todayString}</p>
      
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <div className="event-year">{event.year}</div>
            <div className="event-description">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayInHistory;