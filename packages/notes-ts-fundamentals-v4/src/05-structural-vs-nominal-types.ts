//* Nominal vs Structural

//* Nominal typing
// Based on the name of the type (java, c#)

//* Structural typing: 
// Based on the structure of the type (typescript). Can be
// used to define nominal types.

class Car {
  make: string
  model: string
  year: number
  isElectric: boolean
}

class Truck {
  make: string
  model: string
  year: number
  towingCapacity: number
}

class Vehicle {
  make: string
  model: string
  year: number
}

const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2017,
}

//* Class names can be used as types
function printVehicle(vehicle: Vehicle) {
  console.log(`${vehicle.make} ${vehicle.model} (${vehicle.year})`)
}

printVehicle(new Car()) //✔️ Fine
printVehicle(new Truck()) //✔️ Fine
printVehicle(vehicle) //✔️ Fine

//* Defining the type STRUCTURE inline
function printCar(car: {
  make: string
  model: string
  year: number
}) {
  console.log(`${car.make} ${car.model} (${car.year})`)
}

printCar(new Car()) //✔️ Fine
printCar(new Truck()) //✔️ Fine
printCar(vehicle) //✔️ Fine

export default {}
