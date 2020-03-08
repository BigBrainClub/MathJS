const {abs, sqrt} = require('../src/calculation');

test("Absolute value of 2 is 2", () => {
    expect(abs(-2)).toBe(2);
});

test("Absolute value of -1.414 is 1.414", () => {
    expect(abs(-1.414)).toBe(1.414);
});

test(`Absolute value of ${Number.MIN_SAFE_INTEGER} is ${Number.MAX_SAFE_INTEGER}`, () => {
    expect(abs(Number.MIN_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
});

test("Square Root of 4 is 2", () => {
    expect(sqrt(4)).toBe(2);
});

test("Square Root of 2 is 1.41421..", () =>{
    expect(sqrt(2)).toBeGreaterThan(1.41421);
    expect(sqrt(2)).toBeLessThan(1.42);
});

