interface Person {
	age: number;
}

//class class_Name implements  interface_name
class stark implements Person {
	// we should add the interface property here and also add other properties
	age: number;   
	dance: string;	 
}


//cool things is : we can combine interfaces and classes

interface Student {
	fullName: string;
	age: number;
	gender: string;
}

interface Course {
	courseName: string;
}


//class class_Name implements  interface_name
class college implements Student,Course {
	
	fullName: string;
	age: number;
	gender: string;	 
	courseName: string;
	
	cohort: string;	
}
