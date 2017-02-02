// Interfaces can extend other interfaces

interface Person {
	age:number;
}

interface Musician extends Person{
	instrument: string;
}

//using generic syntax
var ginger = <Musician>{};


interface Game {
	name: string;
	color:string;
}

interface ActionGame extends Game{
	speed: number;
}

//using GENERIC SYNTAX
var myGame = <ActionGame>{};
	myGame.name = "xxxx";
	myGame.color = "blue"; 
	myGame.speed = 10;