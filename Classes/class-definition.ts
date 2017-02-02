class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  introduce() { // class can have a method
    return "Hello, I'm " + this.name;
  }
}


class Car {
  maxSpeed: number;
  constructor(maxSpeed: number) {
    this.maxSpeed = maxSpeed;
  }
  drive() {
    console.log("I'm going this fast" + this.maxSpeed);
  }
}

var car = new Car(35);
car.drive();

var fasterCar = new Car(100);
fasterCar.drive();