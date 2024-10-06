let sName:string = "Daniel"
let sAge:number = 25
let sHeight:unknown = "17.4"
let sWeight:unknown = "70.5"
let sYear:string = "2024"
let isAdmin = "true"


//Type Assertions (as syntax):
let newHeight:number = sHeight as number
console.log(typeof(newHeight));

//Angle Bracket (<> syntax):
let newWeight:number = <number>sWeight
console.log("old Age data type",typeof(sAge));
console.log("current Age data type",typeof(String(sAge)));
//Casting Between Basic Types:
let year:number = Number(sYear)
let newAge:string = String(sAge) 
console.log(typeof(newAge));

let newStudents = Array(sName)
newStudents.push("Alex")
console.log(newStudents);

let sObj = Object(newStudents)
console.log(sObj);



let NewIsAdmin = Boolean(isAdmin) 






