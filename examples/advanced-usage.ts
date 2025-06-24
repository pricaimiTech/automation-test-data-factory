import { UserGenerator, NewUserData, SupportedCountry } from '../src';
import { SUPPORTED_COUNTRIES } from '../src/constants';

console.log('🔥 Exemplos Avançados\n');

// 1. Gerar usuários para todos os países suportados
console.log('1. Usuários de todos os países:');
SUPPORTED_COUNTRIES.forEach(country => {
  const user = UserGenerator.generateUserForCountry(country);
  console.log(`${country}: ${user.name} (${user.email})`);
});
console.log('\n' + '='.repeat(50) + '\n');

// 2. Gerar usuários com diferentes idades
console.log('2. Usuários de diferentes idades:');
const ages = [18, 25, 35, 45, 65];
ages.forEach(age => {
  const user = UserGenerator.generateUserWithAge(age);
  console.log(`${age} anos: ${user.name} (nascido em ${user.birth_year})`);
});
console.log('\n' + '='.repeat(50) + '\n');

// 3. Cenário de teste: Família
console.log('3. Cenário: Família Silva');
const familyLastName = 'Silva';
const familyAddress = '123 Main Street';
const familyCity = 'São Paulo';

const father = UserGenerator.generateNewFakeUser({
  name: `João ${familyLastName}`,
  lastname: familyLastName,
  title: 'Mr',
  address1: familyAddress,
  city: familyCity,
  country: 'India' // Usando India como exemplo
});

const mother = UserGenerator.generateNewFakeUser({
  name: `Maria ${familyLastName}`,
  lastname: familyLastName,
  title: 'Mrs',
  address1: familyAddress,
  city: familyCity,
  country: 'India'
});

const child = UserGenerator.generateUserWithAge(10);
child.lastname = familyLastName;
child.address1 = familyAddress;
child.city = familyCity;

console.log('Pai:', { name: father.name, email: father.email });
console.log('Mãe:', { name: mother.name, email: mother.email });
console.log('Filho:', { name: child.name, age: new Date().getFullYear() - parseInt(child.birth_year) });
console.log('\n' + '='.repeat(50) + '\n');

// 4. Dados para diferentes tipos de teste
console.log('4. Dados para diferentes cenários de teste:');

// Usuário para teste de cadastro
const signupUser = UserGenerator.generateNewFakeUser({}, {
  emailProvider: 'signup-test.com',
  passwordLength: 12
});

// Usuário para teste de login
const loginUser = UserGenerator.generateNewFakeUser({
  email: 'login.test@automation.com',
  password: 'TestPassword123!'
});

// Usuário para teste de checkout
const checkoutUser = UserGenerator.generateNewFakeUser({
  country: 'United States'
}, {
  mobileFormat: '(###) ###-####'
});

console.log('Signup Test:', { email: signupUser.email, password: signupUser.password });
console.log('Login Test:', { email: loginUser.email, password: loginUser.password });
console.log('Checkout Test:', { 
  name: checkoutUser.name, 
  country: checkoutUser.country,
  mobile: checkoutUser.mobile_number 
});