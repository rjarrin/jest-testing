/* eslint-disable no-undef */
import { capitalize } from '../stringUtils';

test('capitalize the first character of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});
