const sum = (a: number, b: number): number => a + b;

test('test example', () => {
  expect(sum(5, 4)).toEqual(9);
})