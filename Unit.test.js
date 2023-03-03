const getMonth = require('./getMonth');
describe("", () => 
  it('Ввод месяца под номером 2', () => {
    expect(getMonth(2)).toBe('Февраль');
  }),
it('Ввод числа вне диапазона от 1 до 12', () => {
  expect(getMonth(22)).toBe(false);
  }),
it('Ввод не числа', () => {
  expect(getMonth("не число")).toBe(false);
  })
)