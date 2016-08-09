//3- Array Interfaces

interface NameList{
	[index:number]:string;
}

//error : all items should be string
//var list2:NameList = ['Jon',1,'Bran'];



interface ColorList {
	[index:number]: string;
}
var colors: ColorList = ['Red','Green','Blue'];



interface NumberList {
	[index:number]: number;
}
var safeCombo: NumberList = [100,200,300];


interface ColorsCount {
	[index:string]: number;
}
var colorsSaw: ColorsCount = {};     
	colorsSaw['blue'] = 5;
	colorsSaw['green'] = 7;



