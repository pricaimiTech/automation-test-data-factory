import { faker } from '@faker-js/faker';

// Configurar seed para testes determinísticos
beforeEach(() => {
  faker.seed(12345);
});

// Configurações globais de timeout
jest.setTimeout(10000);

// Adicionar matchers customizados se necessário
declare global {
  namespace jest {
    interface Matchers<R> {
      // Você pode adicionar matchers customizados aqui se precisar
    }
  }
}