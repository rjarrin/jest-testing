/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import caesarCipher from '../cipher';

test('shifts characters correctly', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
    expect(caesarCipher('world', 3)).toBe('zruog');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
