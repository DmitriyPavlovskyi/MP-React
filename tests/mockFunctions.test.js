function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
describe('Mock test forEach function', () => {
  test('Test', () => {
    const mockCallback = jest.fn();
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
});

describe('Mock returning values', () => {
  test('Test', () => {
    const myMock = jest.fn();
    // console.log(myMock());
    // > undefined

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    // console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
  });
});
