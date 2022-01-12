class Airport {
  constructor(name) {
    this.name = name
  }

  sayHello(){
    console.log('This airport is called ' + this.name)
  }

}

let heathrow = new Airport('Heathrow');  

console.log(heathrow)
console.log(heathrow.name)
console.log(heathrow.sayHello())

module.exports = Airport