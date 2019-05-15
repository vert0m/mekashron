import { LoginModel } from './loginModel';

describe('LoginModel', () => {
  it('should create an instance', () => {
    expect(new LoginModel(null, null)).toBeTruthy();
  });
});
