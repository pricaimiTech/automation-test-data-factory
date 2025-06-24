// Export all types
export * from './types';

// Export all generators
export * from './generators';

// Export constants
export * from './constants';

// Default export for backward compatibility
import { UserGenerator } from './generators/user.generator';

/**
 * @deprecated Use UserGenerator.generateNewFakeUser instead
 * Mantido para compatibilidade com versão JavaScript
 */
export const generateNewFakeUser = UserGenerator.generateNewFakeUser;

export default {
  UserGenerator,
  // Função legacy para compatibilidade
  generateNewFakeUser: UserGenerator.generateNewFakeUser
};