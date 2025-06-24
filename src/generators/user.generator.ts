import { faker } from '@faker-js/faker';

import { 
  NewUserData, 
  UserDataOverrides, 
  UserGeneratorOptions,
  UserTitle,
  SupportedCountry 
} from '../types/user.types';
import { 
  SUPPORTED_COUNTRIES, 
  DEFAULT_EMAIL_PROVIDER,
  DEFAULT_PASSWORD_PREFIX,
  DEFAULT_MOBILE_FORMAT,
  DEFAULT_BIRTH_YEAR_RANGE
} from '../constants/countries';

export class UserGenerator {
  /**
   * Gera um objeto de dados de usuário válido para o endpoint de criação de conta.
   * @param overrides - Um objeto com campos para sobrescrever os valores padrão gerados pelo Faker.
   * @param options - Opções de configuração para personalizar a geração de dados.
   * @returns Objeto de dados do usuário.
   */
  static generateNewFakeUser(
    overrides: UserDataOverrides = {},
    options: UserGeneratorOptions = {}
  ): NewUserData {

    // Configurações padrão com opções personalizáveis
    const emailProvider = options.emailProvider || DEFAULT_EMAIL_PROVIDER;
    const passwordLength = options.passwordLength || 10;
    const passwordPrefix = options.passwordPrefix || DEFAULT_PASSWORD_PREFIX;
    const mobileFormat = options.mobileFormat || DEFAULT_MOBILE_FORMAT;
    const birthYearRange = options.birthYearRange || DEFAULT_BIRTH_YEAR_RANGE;

    const defaultUserData: NewUserData = {
      name: faker.person.fullName(),
      email: faker.internet.email({
        provider: emailProvider
      }).toLowerCase(),
      password: faker.internet.password({
        length: passwordLength,
        memorable: false,
        prefix: passwordPrefix
      }),
      title: faker.helpers.arrayElement<UserTitle>(['Mr', 'Mrs']),
      birth_date: faker.number.int({
        min: 1,
        max: 28
      }).toString(),
      birth_month: faker.date.month(),
      birth_year: faker.number.int(birthYearRange).toString(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: faker.helpers.arrayElement<SupportedCountry>(SUPPORTED_COUNTRIES),
      zipcode: faker.location.zipCode(),
      state: faker.location.state(),
      city: faker.location.city(),
      mobile_number: faker.phone.number({style: 'international'})
    };

    return {
      ...defaultUserData,
      ...overrides
    };
  }

  /**
   * Gera usuário com país específico
   * @param country - País específico
   * @param overrides - Sobrescrever outros campos
   * @param options - Opções de configuração
   * @returns Dados do usuário
   */
  static generateUserForCountry(
    country: SupportedCountry,
    overrides: UserDataOverrides = {},
    options: UserGeneratorOptions = {}
  ): NewUserData {
    return this.generateNewFakeUser(
      { ...overrides, country },
      options
    );
  }

  /**
   * Gera usuário com email específico
   * @param email - Email específico
   * @param overrides - Sobrescrever outros campos
   * @param options - Opções de configuração
   * @returns Dados do usuário
   */
  static generateUserWithEmail(
    email: string,
    overrides: UserDataOverrides = {},
    options: UserGeneratorOptions = {}
  ): NewUserData {
    return this.generateNewFakeUser(
      { ...overrides, email },
      options
    );
  }

  /**
   * Gera usuário para teste de idade específica
   * @param age - Idade desejada
   * @param overrides - Sobrescrever outros campos
   * @param options - Opções de configuração
   * @returns Dados do usuário
   */
  static generateUserWithAge(
    age: number,
    overrides: UserDataOverrides = {},
    options: UserGeneratorOptions = {}
  ): NewUserData {
    const currentYear = new Date().getFullYear();
    const birthYear = (currentYear - age).toString();
    
    return this.generateNewFakeUser(
      { ...overrides, birth_year: birthYear },
      options
    );
  }
}