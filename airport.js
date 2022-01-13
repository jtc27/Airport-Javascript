class Airport {
  constructor(name) {
    this.name = name,
    this.hangar = []
  }

  sayHello(){
    console.log('This airport is called ' + this.name)
  }

  addPlane(plane){
    this.hangar.push(plane)
  }

}

let heathrow = new Airport('Heathrow');  

console.log(heathrow)
console.log(heathrow.name)
console.log(heathrow.sayHello())

console.log(heathrow.hangar)
console.log(heathrow.hangar.length)

heathrow.addPlane('Airbus 920')

console.log(heathrow.hangar)
console.log(heathrow.hangar.length)

heathrow.addPlane('Airbus 922')

console.log(heathrow.hangar)
console.log(heathrow.hangar.length)

module.exports = Airport