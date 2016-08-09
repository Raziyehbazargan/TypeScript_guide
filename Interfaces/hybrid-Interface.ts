// Hybrid Interfaces : TypeScript interfaces can describe something that is a function and an object at the same time.

interface Jump {
	(distance:number): string;    // function interface
	height: number;               // object interface
} 

var j:Jump;
	j(50);
	j.height = 12;