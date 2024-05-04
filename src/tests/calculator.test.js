/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import calculator from '../calculator';

test('add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
    expect(calculator.subtract(10, 2)).toBe(8);
});

test('multiply two numbers', () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});

test('divide two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});
