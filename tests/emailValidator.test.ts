import { isValidEmail } from '../src/emailValidator';

describe('Email Validator', () => {
  
  // Test 1: Valid emails
  test('should accept a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    expect(isValidEmail('firstname+lastname@example.com')).toBe(true);
  });

  // Test 2: Must contain at least one @
  test('should reject email without @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
    expect(isValidEmail('test.example.com')).toBe(false);
  });

  // Test 3: Must contain at least one dot in domain
  test('should reject email without dot in domain', () => {
    expect(isValidEmail('test@example')).toBe(false);
    expect(isValidEmail('test@examplecom')).toBe(false);
  });

  // Test 4: Dot cannot be the last character
  test('should reject email with dot as last character', () => {
    expect(isValidEmail('test@example.')).toBe(false);
    expect(isValidEmail('test@example.com.')).toBe(false);
  });

  // Test 5: Cannot contain any spaces
  test('should reject email with spaces', () => {
    expect(isValidEmail('test @example.com')).toBe(false);
    expect(isValidEmail('test@ example.com')).toBe(false);
    expect(isValidEmail('test@example .com')).toBe(false);
    expect(isValidEmail(' test@example.com')).toBe(false);
  });

  // Test 6: Must have text before and after @
  test('should reject email without text before @', () => {
    expect(isValidEmail('@example.com')).toBe(false);
  });

  test('should reject email without text after @', () => {
    expect(isValidEmail('test@')).toBe(false);
  });

  // Test 7: Edge cases
  test('should reject empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  test('should reject multiple @', () => {
    expect(isValidEmail('test@@example.com')).toBe(false);
    expect(isValidEmail('test@test@example.com')).toBe(false);
  });
});