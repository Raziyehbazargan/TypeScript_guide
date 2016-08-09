//----------Type : Number ---------------
var n: number;
	n = 6;
	n = 4 + 6 + 3;
	n = Math.PI;



//----------Type : String ---------------
var s: string;
	s = "Raziye";
	s = "Raziyeh" + " Bazargan";



//----------Type : Boolean ---------------
var isItTrue: boolean;
	isItTrue = true;
	isItTrue = false;
	isItTrue = undefined;
	isItTrue = null;



//----------Type : Array ------------------------------
var numbers: number[] = [];   //it's a array of number
numbers[0] = 1;
//numbers.push("two");         // it'll cause  an error


//Another syntax
var strings: Array<string> = [];
	strings.push("Hello");


var things: any[] = [];        //with type of any we can save any type of data in array
	things.push(1);
	things.push("two");



//----------Type : Enum------------------------------
enum orderStatus {complete,pending,declined};
var xy:orderStatus;   

	xy = orderStatus.complete;
	xy = orderStatus.pending;
	xy = orderStatus.declined;
// n = "text";   // it'll cause  an error



enum Stark {Bran, Robb, Rickon, Eddard, Sansa};
var person :Stark = Stark.Bran;
	console.log(person === Stark.Bran);
	console.log(person === Stark.Sansa);

	person = Stark.Sansa;



enum MessageStatus{read,unread,pending};
var status: MessageStatus = MessageStatus.read;

	status = MessageStatus.pending;


//----------Type : Void------------------------------

function nothing(): void{
	var g = "I don't return anything";
}



//----------Type : Any------------------------------

var w:any;
	w = "string";
	w = 8;
	w = false;
	w = [];
	w = {};





