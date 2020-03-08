const {sqrt} = require('../src/calculation');

test("Square Root of 4 is 2", () => {
    expect(sqrt(4)).toBe(2);
});

test("Square Root of 2 is 1.41421..", () =>{
    expect(sqrt(2)).toBeGreaterThan(1.41421);
    expect(sqrt(2)).toBeLessThan(1.42);
});

