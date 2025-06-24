import { UserGenerator, NewUserData, UserDataOverrides } from '../src';

// Uso básico (igual ao JavaScript original)
const user1: NewUserData = UserGenerator.generateNewFakeUser();
console.log('Usuário básico:', user1);

// Com overrides
const overrides: UserDataOverrides = {
  name: 'João Silva',
  email: 'joao@teste.com',
  country: 'Canada'
};
const user2: NewUserData = UserGenerator.generateNewFakeUser(overrides);
console.log('Usuário com overrides:', user2);

// Com opções personalizadas
const user3: NewUserData = UserGenerator.generateNewFakeUser({}, {
  emailProvider: 'meusite.com',
  passwordLength: 15,
  birthYearRange: { min: 1990, max: 2000 }
});
console.log('Usuário com opções:', user3);

// Usuário para país específico
const userCanada: NewUserData = UserGenerator.generateUserForCountry('Canada');
console.log('Usuário do Canadá:', userCanada);

// Usuário com idade específica
const user25Years: NewUserData = UserGenerator.generateUserWithAge(25);
console.log('Usuário de 25 anos:', user25Years);