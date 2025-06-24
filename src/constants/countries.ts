import { SupportedCountry } from '../types/user.types';

export const SUPPORTED_COUNTRIES: readonly SupportedCountry[] = [
  'India',
  'United States',
  'Canada',
  'Australia',
  'Israel',
  'New Zealand',
  'Singapore',
] as const;

export const DEFAULT_EMAIL_PROVIDER = 'test.automationexercise.com';
export const DEFAULT_PASSWORD_PREFIX = 'P@ssWrd!';
export const DEFAULT_MOBILE_FORMAT = '##########';
export const DEFAULT_BIRTH_YEAR_RANGE = { min: 1900, max: 2021 };