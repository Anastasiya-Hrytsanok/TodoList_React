import { isEmpty, startWithUpperCase } from '../utils';

describe('utils', () => {
  it('should return true if the string is empty', () => {
    const emptyString = '    ';
    expect(isEmpty(emptyString)).toEqual(true);
  });

  it('should return false if the string is not empty', () => {
    const emptyString = '    hello ';
    expect(isEmpty(emptyString)).toEqual(false);
  });

  it('should return true if the string starts with upper case', () => {
    const stringWithUpperCase = 'Hello';
    expect(startWithUpperCase(stringWithUpperCase)).toEqual(true);
  });

  it('should return false if the string do not start with upper case', () => {
    const stringWithUpperCase = 'hello';
    expect(startWithUpperCase(stringWithUpperCase)).toEqual(false);
  });
});
