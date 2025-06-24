export type UserTitle = 'Mr' | 'Mrs';

export type SupportedCountry = 
  | 'India'
  | 'United States'
  | 'Canada'
  | 'Australia'
  | 'Israel'
  | 'New Zealand'
  | 'Singapore';

export interface NewUserData {
  name: string;
  email: string;
  password: string;
  title: UserTitle;
  birth_date: string;
  birth_month: string;
  birth_year: string;
  firstname: string;
  lastname: string;
  company: string;
  address1: string;
  address2: string;
  country: SupportedCountry;
  zipcode: string;
  state: string;
  city: string;
  mobile_number: string;
}

export type UserDataOverrides = Partial<NewUserData>;

export interface UserGeneratorOptions {
  locale?: string;
  emailProvider?: string;
  passwordLength?: number;
  passwordPrefix?: string;
  mobileFormat?: string;
  birthYearRange?: {
    min: number;
    max: number;
  };
}