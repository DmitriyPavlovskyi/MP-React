// ------BASICS------
describe('BASICS', () => {
  // test.only will execute only one test in describe block
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  // toEqual recursively checks every field of an object or array.
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;

    expect(data).toEqual({one: 1, two: 2});
  });

  test('null', () => {
    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

// ------NUMBERS------
describe('NUMBERS', () => {
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  // For floating point equality use .toBeCloseTo() insted .toBe() to avoid rounding error
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
});

// ------STRING------
describe('STRING', () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
});

// ------ARRAYS------
describe('ARRAYS', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });
});

// ------EXCEPTIONS------
describe('EXCEPTIONS', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });
});