import { FilterOptions } from '../components/TrailFilters';
import { HikingTrail, TimeUnit } from '../types';

/**
 * Parse range string (e.g., "10-20") into min and max values
 * @param range Range string in format "min-max" or "min+"
 * @returns Tuple of [min, max] where max is null for "min+" ranges
 */
export const parseRange = (range: string): [number, number | null] => {
  if (range === 'all') return [0, null];
  if (range.endsWith('+')) {
    const min = parseInt(range.replace('+', ''));
    return [min, null];
  }
  const [min, max] = range.split('-').map(Number);
  return [min, max];
};

/**
 * Filter trails based on provided filter options
 * @param trails Array of hiking trails to filter
 * @param filters Filter options
 * @returns Filtered array of hiking trails
 */
export const filterTrails = (trails: HikingTrail[], filters: FilterOptions): HikingTrail[] => {
  return trails.filter((trail: HikingTrail) => {
    // Search filter (title or tags)
    if (filters.search && !trail.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !trail.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()))) {
      return false;
    }

    // Difficulty filter
    if (filters.difficultyLevel !== 'all' && trail.difficulty.level !== filters.difficultyLevel) {
      return false;
    }

    // Length/distance filter
    if (filters.lengthRange !== 'all') {
      const [minLength, maxLength] = parseRange(filters.lengthRange);
      if (maxLength === null) {
        if (trail.length < minLength) return false;
      } else if (trail.length < minLength || trail.length > maxLength) {
        return false;
      }
    }

    // Time filter
    if (filters.timeRange !== 'all') {
      const [minTime, maxTime] = parseRange(filters.timeRange);
      const trailTimeInHours = trail.estimatedTime.timeUnit === TimeUnit.Days
        ? trail.estimatedTime.maximum * 24 // Convert days to hours
        : trail.estimatedTime.maximum;

      if (maxTime === null) {
        if (trailTimeInHours < minTime) return false;
      } else if (trailTimeInHours < minTime || trailTimeInHours > maxTime) {
        return false;
      }
    }

    // Region filter
    if (filters.region !== 'all' && trail.region !== filters.region) {
      return false;
    }

    return true;
  });
};
