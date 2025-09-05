import yaml from 'js-yaml';

// Import the YAML file as text
import yamlText from './historical-dates.yml?raw';

// Parse the YAML data
const parseHistoricalData = () => {
  try {
    const data = yaml.load(yamlText);
    return data.dates;
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return {};
  }
};

// Get the historical dates data from YAML
export const historicalDatesData = parseHistoricalData();

// Convert the data to the format expected by the app
export const getFormattedDates = () => {
  const formattedDates = [];
  let id = 1;

  Object.entries(historicalDatesData).forEach(([month_day, events]) => {
    events.forEach(event => {
      // For "Unknown" dates, just show the year
      // For known dates, show "Month Day, Year"
      let dateString;
      if (month_day === "Unknown") {
        dateString = event.year.toString();
      } else {
        dateString = `${month_day}, ${event.year}`;
      }
      
      formattedDates.push({
        id: id++,
        date: dateString,
        description: event.event
      });
    });
  });

  return formattedDates;
};
