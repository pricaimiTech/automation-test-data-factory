# Commons Test Data Generator

🎲 A comprehensive test data generator library for automation projects using Faker.js

# 🚀 Características

- 👤 Geração completa de dados de usuário (perfis, endereços, contatos)
- 🌍 Suporte multi-idioma com Faker.js
- 🔧 Altamente customizável com overrides e opções
- 📦 Fácil integração com projetos WebDriverIO
- 🎯 TypeScript nativo com tipagem completa
- ⚡ Múltiplos métodos para diferentes cenários de teste
- 🧪 Totalmente testado com Jest

# 📦 Instalação

```bash
# No seu projeto principal WebDriverIO
git submodule add https://github.com/seu-usuario/webdriverio-test-data-generator.git shared/test-data

# Navegar para o submodule
cd shared/test-data

# Instalar dependências
npm install

# Compilar o TypeScript
npm run build
```

### Como Pacote NPM

```bash
npm install automation-test-data-factory
```

# 🛠️ Desenvolvimento

1. Estrutura Recomendada


```bash
seu-projeto-webdriverio/
├── config/
│   └── wdio.conf.js
├── shared/                    # Submodules
│   └── test-data/            # Este submodule
│       ├── src/
│       ├── dist/             # Arquivos compilados
│       └── package.json
├── src/                      # Código específico do projeto
│   ├── pages/
│   └── elements/
├── test/
│   └── specs/
└── package.json
```
 
2. Configuração do Ambiente

```js
# Clonar o repositório
git clone https://github.com/pricaimiTech/automation-test-data-factory.git
cd automation-test-data-factory

# Instalar dependências
npm install

# Compilar TypeScript
npm run build

# Executar testes
npm test

# Executar exemplos
npm run examples
```

## 🔄 Atualizações

Quando Houver Atualizações no Submodule


```bash
# No seu projeto principal
cd shared/test-data

# Puxar as últimas mudanças
git pull origin main

# Reinstalar dependências (se package.json mudou)
npm install

# Recompilar
npm run build

# Voltar para o projeto principal
cd ../..

# Commitar a atualização do submodule
git add shared/test-data
git commit -m "Update test-data submodule"
```

## 🧪 Testes

Executar Testes do Submodule

```bash
# No diretório do submodule
cd shared/test-data

# Todos os testes
npm test

# Com coverage
npm run test:coverage

# Watch mode para desenvolvimento
npm run test:watch
```

## 🤝 Contribuição

Adicionando Novos Geradores

- Criar o tipo:

```ts
// src/types/product.types.ts
export interface Product {
  name: string;
  price: number;
  category: string;
}
```

- Criar o gerador:
```ts
// src/generators/product.generator.ts
export class ProductGenerator {
  static generateProduct(): Product {
    return {
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      category: faker.commerce.department()
    };
  }
}
```

- Exportar:
```ts
// src/index.ts
export * from './generators/product.generator';
```

- Testar: 
```ts
// tests/product.generator.test.ts
describe('ProductGenerator', () => {
  it('should generate valid product', () => {
    const product = ProductGenerator.generateProduct();
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
  });
});
```

# 🎯 Uso Básico

### JavaScript (Projeto Principal)

```js
// Importar do submodule compilado
const { UserGenerator } = require('./shared/test-data/dist');

// Gerar usuário básico
const user = UserGenerator.generateNewFakeUser();
console.log(user);
/*
{
  name: "John Doe",
  email: "john.doe@test.automationexercise.com",
  password: "P@ssWrd!abc123xyz",
  title: "Mr",
  birth_date: "15",
  birth_month: "January",
  birth_year: "1990",
  firstname: "John",
  lastname: "Doe",
  company: "Tech Corp",
  address1: "123 Main Street",
  address2: "Apt 4B",
  country: "United States",
  zipcode: "12345",
  state: "California",
  city: "Los Angeles",
  mobile_number: "5551234567"
}
*/
```

### TypeScript (Projeto Principal)

```js
// Importar com tipos
import { UserGenerator, NewUserData, UserDataOverrides } from './shared/test-data/dist';

// Gerar usuário com tipos
const user: NewUserData = UserGenerator.generateNewFakeUser();

// Com overrides tipados
const overrides: UserDataOverrides = {
  name: 'João Silva',
  email: 'joao@teste.com',
  country: 'Canada'
};
const customUser: NewUserData = UserGenerator.generateNewFakeUser(overrides);
```

## 🔧 Uso Avançado

1. Overrides (Sobrescrever Campos)

```js
const { UserGenerator } = require('./shared/test-data/dist');

// Sobrescrever campos específicos
const user = UserGenerator.generateNewFakeUser({
  name: 'Maria Silva',
  email: 'maria.silva@teste.com',
  country: 'Canada',
  title: 'Mrs'
});
```

2. Opções Personalizadas
```js
const user = UserGenerator.generateNewFakeUser({}, {
  locale: 'pt_BR',                    // Idioma brasileiro
  emailProvider: 'meusite.com.br',    // Provedor de email customizado
  passwordLength: 15,                 // Senha mais longa
  passwordPrefix: 'MinhaSenh@!',      // Prefixo da senha
  mobileFormat: '(##) #####-####',    // Formato brasileiro
  birthYearRange: { min: 1990, max: 2000 } // Faixa de idade específica
});
```

3. Métodos Especializados
```js
// Múltiplos usuários
const users = UserGenerator.generateMultipleUsers(5, {
  country: 'United States'
});

// Usuário de país específico
const canadianUser = UserGenerator.generateUserForCountry('Canada');

// Usuário com email específico
const testUser = UserGenerator.generateUserWithEmail('teste@automation.com');

// Usuário com idade específica
const user25 = UserGenerator.generateUserWithAge(25);
```

----

**Feito com ❤️ para a comunidade de automação de testes**


