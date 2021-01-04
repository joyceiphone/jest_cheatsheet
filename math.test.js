//common js
// const MathFn = require('./math.js');
import MathFn from './math.js';

test('test add', () => {
  expect(MathFn.add(3, 7)).toEqual(10);
});

test('test minus', () => {
  expect(MathFn.minus(3, 3)).toEqual(0);
});

test('test multi', () => {
  expect(MathFn.multi(3, 3)).toEqual(9);
});

test('10 is equal to 10', () => {
  expect(10).toEqual(10);
});

//toBeNull
//toBeEqual check the value of object
//toBe exact equality
