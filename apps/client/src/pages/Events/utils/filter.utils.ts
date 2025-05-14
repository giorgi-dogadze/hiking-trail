import { HikingEvent } from '../types';
import { EventFilterOptions } from '../components/EventFilters';

// Helper to check if a number is within a range (format: "min-max" or "min+")
const isInRange = (value: number, range: string): boolean => {
  if (range === 'all') return true;
  
  // Handle "X+" format
  if (range.endsWith('+')) {
    const min = parseInt(range.replace('+', ''), 10);
    return value >= min;
  }
  
  // Handle "min-max" format
  const [min, max] = range.split('-').map(Number);
  return value >= min && value <= max;
};

// Helper to check if a date is within a specified range
const isDateInRange = (date: Date, startDate: Date | null, endDate: Date | null): boolean => {
  if (!startDate && !endDate) return true;
  
  const eventDate = new Date(date).getTime();
  
  if (startDate && endDate) {
    return eventDate >= startDate.getTime() && eventDate <= endDate.getTime();
  }
  
  if (startDate && !endDate) {
    return eventDate >= startDate.getTime();
  }
  
  if (!startDate && endDate) {
    return eventDate <= endDate.getTime();
  }
  
  return true;
};

// Main filter function
export const filterEvents = (events: HikingEvent[], filters: EventFilterOptions): HikingEvent[] => {
  return events.filter(event => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const title = event.title.toLowerCase();
      const description = event.description.toLowerCase();
      const shortDescription = event.shortDescription.toLowerCase();
      const tags = event.tags.join(' ').toLowerCase();
      
      const matchesSearch = 
        title.includes(searchTerm) || 
        description.includes(searchTerm) || 
        shortDescription.includes(searchTerm) ||
        tags.includes(searchTerm);
        
      if (!matchesSearch) return false;
    }
    
    // Difficulty level filter
    if (filters.difficultyLevel !== 'all' && event.difficulty !== filters.difficultyLevel) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange !== 'all' && !isInRange(event.price, filters.priceRange)) {
      return false;
    }
    
    // Distance range filter
    if (filters.distanceRange !== 'all' && !isInRange(event.distance, filters.distanceRange)) {
      return false;
    }
    
    // Duration range filter
    if (filters.durationRange !== 'all' && !isInRange(event.duration.days, filters.durationRange)) {
      return false;
    }
    
    // Status filter
    if (filters.status !== 'all' && event.status !== filters.status) {
      return false;
    }
    
    // Date range filters
    if (filters.startDate || filters.endDate) {
      // Check if the event's date range overlaps with the filter date range
      const eventStartOverlaps = isDateInRange(event.startDate, filters.startDate, filters.endDate);
      const eventEndOverlaps = isDateInRange(event.endDate, filters.startDate, filters.endDate);
      
      // Either the start date or end date needs to be within the filter range
      if (!eventStartOverlaps && !eventEndOverlaps) {
        return false;
      }
    }
    
    // If all filters pass, include this event
    return true;
  });
};
