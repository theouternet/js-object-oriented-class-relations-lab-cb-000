 let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id
    })
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}


class Passenger {
  constructor(name) {
    this.id ++passengerId
    this.name
    
      store.passengers.push(this)
  }

trips() {
  return store.trips.filter(trip => {
    return trip.passengerId == this.id
  })
}

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driverId
    this.passengerId = passengerId
    this.id = ++tripId;

    store.trips.push(this)
  }
  
  driver() {
    return this.driver()
  }
  
}