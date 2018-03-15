describe('Repeating setup for many tests', () => {
  const data = ['Almost empty array'];

  beforeEach(() => {
    data.length = 0;
  });

  afterEach(() => {
    data.length = 0;
  });

  test('Expect data to be empty after beforeEach function', () => {
    expect(data).toEqual([]);
  });
});

describe('Repeating setup for many tests', () => {
  const data = ['Almost empty array'];

  beforeEach(() => {
    data.length = 0;
    data.push('New data');
  });

  afterEach(() => {
    data.length = 0;
  });

  test('Expect data to be changed after beforeEach function', () => {
    expect(data).toEqual(['New data']);
  });
});
