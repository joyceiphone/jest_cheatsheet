const {
  TestScheduler,
} = require('jest');

test('test toBe', () => {
  const a = { one: 1 };
  expect(a).toBe({ one: 1 });
});

test('test equal', () => {
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});

test('test tobenull', () => {
  const a = undefined;
  expect(a).toBeUndefined();
});

test('toContain', () => {
  const arr = ['dell', 'lee', 'imooc'];
  const data = new Set(arr);
  expect(data).toContain('dell');
});

//string
test('toMatch', () => {
  const str = 'http://www.dell-lee.com';
  expect(str).toMatch(/dell-lee/);
});

const throwNewErrorFunc = () => {
  throw new Error('this is an error');
};

test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow(
    /this is an error/
  );
});
