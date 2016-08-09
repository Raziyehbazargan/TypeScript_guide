

//2- Function Interfaces

interface Salute {
	(name:string) : string;      //input and ouptut are strings
}

var bonjour: Salute = function(n:string):string {return "bonjour" + name}



interface Farewall {
	(name:string):string;
}

var goodbye: Farewall;
var aurevior: Farewall;

goodbye = function(name){ return "Goodbye, " + name };

//it has error  input should be string
//aurevior = function(numb:number){ return "Goodbye, " + name };

//fixed
aurevior = function(n:string){ return "aurevior"  };

