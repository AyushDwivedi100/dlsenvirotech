/**
 * Company founding year
 */
const FOUNDING_YEAR = 2015;

/**
 * Calculate years of experience from founding year to current year
 * @returns Number of years since company founding
 */
export const getYearsOfExperience = (): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - FOUNDING_YEAR;
};

/**
 * Get formatted years of experience string (e.g., "16+")
 * @returns Formatted string like "16+"
 */
export const getYearsOfExperienceString = (): string => {
  return `${getYearsOfExperience()}+`;
};
