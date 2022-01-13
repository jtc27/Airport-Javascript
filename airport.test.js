const Airport = require('./airport')

const heathrow = new Airport('Heathrow');

test('new airport is called Heathrow', () => {
  expect(heathrow.name).toEqual('Heathrow')  
  expect(heathrow.name).not.toBe('JFK')  
});

test('add plane', () => {
  heathrow.addPlane('Airbus 920')

  expect(heathrow.hangar).toEqual(['Airbus 920'])  
});


