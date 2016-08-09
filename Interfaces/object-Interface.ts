//1- Object Interfaces

interface Friend {
	name: string;
	age: number;
}

var joe: Friend = { name:"Raziyeh" , age:30 };

// var brad: Person = { name:"Raziyeh" };  --> it cause error- missing property 'age'

// var brad: Person = { name:"Raziyeh" ,age:30 , married:true};  --> it cause error- additonal property 'married'




//Object Interfaces with optional properties (?)
interface Person {
	name: string;
	age: number;
	married?:boolean;
}

//it ok because married property is optional
var rozi: Person = { name:"Raziyeh" , age:30 };  
