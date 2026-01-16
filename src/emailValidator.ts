/**
 * Validates if a string is a valid email address
 * @param email - The email string to validate
 * @returns true if valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  // Rule 1a: Cannot be empty
  if (email.length === 0) {
    return false;
  }

  // Find @ position and count occurrences
  let atPosition = -1;
  let atCount = 0;
  
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      atCount++;
      if (atCount === 1) {
        atPosition = i;
      }
    }
    
    // Rule 1c: Cannot contain spaces
    if (email[i] === ' ') {
      return false;
    }
  }

  // Rule 1d: Must contain exactly one @ and have text before and after @
  if (atCount !== 1) {
    return false;
  }

  if (atPosition === 0) {
    return false;
  }

  if (atPosition === email.length - 1) {
    return false;
  }

  // Parse domain part (after @)
  const domainStart = atPosition + 1;
  let dotCount = 0;
  let lastDotPosition = -1;

  for (let i = domainStart; i < email.length; i++) {
    if (email[i] === '.') {
      dotCount++;
      lastDotPosition = i;
    }
  }

  // Rule 1b: Domain must contain at least one dot and cannot be the last character
  if (dotCount === 0) {
    return false;
  }

  if (lastDotPosition === email.length - 1) {
    return false;
  }

  return true;
}