class Vehicle {
  speed: number;
  constructor(speed) {
    this.speed = speed;
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Going " + this.speed + " MPH!");
  }
}


// ---------------

class Horse {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class RaceHorse extends Horse {
  race() {
    console.log(this.name + " am running really fast!");
  }
}
 
class ChampionsRaceHorse extends RaceHorse {
  race() {
    super.race();
    console.log(this.name + " won the race, of course!");
  }
}
var cal = new Horse("Cal");
var rocko = new RaceHorse("Rocko");
rocko.race();

var secretTariat = new ChampionsRaceHorse("SecretTariat");
secretTariat.race();