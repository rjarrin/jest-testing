/* eslint-disable no-undef */
import { capitalize, reverseString } from '../stringUtils';

test('capitalize the first character of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});
