import { UserGenerator, NewUserData, UserDataOverrides } from '../src';

console.log('🚀 Exemplos de Uso do WebDriverIO Test Data Generator\n');

// 1. Uso básico
console.log('1. Usuário básico:');
const basicUser: NewUserData = UserGenerator.generateNewFakeUser();
console.log(JSON.stringify(basicUser, null, 2));
console.log('\n' + '='.repeat(50) + '\n');

// 2. Com overrides
console.log('2. Usuário com overrides:');
const overrides: UserDataOverrides = {
  name: 'João Silva',
  email: 'joao.silva@teste.com',
  country: 'Canada',
  title: 'Mr'
};
const userWithOverrides: NewUserData = UserGenerator.generateNewFakeUser(overrides);
console.log(JSON.stringify(userWithOverrides, null, 2));
console.log('\n' + '='.repeat(50) + '\n');

// 3. Com opções personalizadas
console.log('3. Usuário com opções personalizadas:');
const customUser: NewUserData = UserGenerator.generateNewFakeUser({}, {
  locale: 'pt_BR',
  emailProvider: 'meusite.com.br',
  passwordLength: 15,
  passwordPrefix: 'MinhaSenh@!',
  mobileFormat: '(##) #####-####',
  birthYearRange: { min: 1990, max: 2000 }
});
console.log(JSON.stringify(customUser, null, 2));
console.log('\n' + '='.repeat(50) + '\n');

// 5. Usuário para país específico
console.log('5. Usuário do Canadá:');
const canadianUser: NewUserData = UserGenerator.generateUserForCountry('Canada');
console.log({
  name: canadianUser.name,
  email: canadianUser.email,
  country: canadianUser.country,
  address: `${canadianUser.address1}, ${canadianUser.city}, ${canadianUser.state}`
});
console.log('\n' + '='.repeat(50) + '\n');

// 6. Usuário com idade específica
console.log('6. Usuário de 30 anos:');
const user30: NewUserData = UserGenerator.generateUserWithAge(30);
console.log({
  name: user30.name,
  birth_year: user30.birth_year,
  age: new Date().getFullYear() - parseInt(user30.birth_year)
});