// Some tests to check CI workflow functionality:

beforeAll(() => {
  console.log('beforeAll', 'init before all tests'. toUpperCase());
});

afterAll(() => {
  console.log('afterAll', 'cleaning after all tests'. toUpperCase());
});

// test(test description, test function) or it(test description, test function)
test('This is not a test suite but an individual test', () => {
  console.log('Test', 'just some test');
})

it('This is another test, not in test suite', () => {
  console.log('it', 'just another test');
})