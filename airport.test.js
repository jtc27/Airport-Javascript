const Airport = require('./airport')

test('new airport is called Heathrow', () => {
  let heathrow = new Airport('Heathrow');

  expect(heathrow.name).toEqual('Heathrow')  
  expect(heathrow.name).not.toBe('JFK')  
})

