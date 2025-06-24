import { UserGenerator, NewUserData, SupportedCountry } from '../src';

describe('UserGenerator', () => {
  describe('generateNewFakeUser', () => {
    it('should generate a valid user object', () => {
      const user: NewUserData = UserGenerator.generateNewFakeUser();
      
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('password');
      expect(user.email).toContain('test.automationexercise.com');
      expect(['Mr', 'Mrs']).toContain(user.title);
    });

    it('should apply overrides correctly', () => {
      const overrides = {
        name: 'Test User',
        email: 'test@example.com'
      };
      
      const user: NewUserData = UserGenerator.generateNewFakeUser(overrides);
      
      expect(user.name).toBe('Test User');
      expect(user.email).toBe('test@example.com');
    });

    it('should use custom options', () => {
      const user: NewUserData = UserGenerator.generateNewFakeUser({}, {
        emailProvider: 'custom.com',
        passwordLength: 20
      });
      
      expect(user.email).toContain('custom.com');
      expect(user.password.length).toBeGreaterThanOrEqual(20);
    });
  });

  describe('generateUserForCountry', () => {
    it('should generate user for specific country', () => {
      const country: SupportedCountry = 'Canada';
      const user: NewUserData = UserGenerator.generateUserForCountry(country);
      
      expect(user.country).toBe('Canada');
    });
  });

});