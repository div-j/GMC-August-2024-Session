// number
let age:number = 56

console.log(age);
console.log(typeof(age));

const height:number = 34.7
console.log(height);
console.log("type",typeof(height));


//string
const fullName:string= "John Doe"
const email:string = "john@xample.com"
console.log(email);
console.log("type",typeof(email));



//Bolean
const married:boolean = true
const working:boolean = false
console.log(married);
console.log("type",typeof(married));

//Array of strings
const hobbies:string[]= ["reading","singing","sleeping"]
console.log(hobbies);
console.log("type",typeof(hobbies));

//Array of numbers
const shoeSize:number[] =[34,34.5, 35] 
console.log(shoeSize);


//Array of objects 
const children:object[] = [
    {name:"Dan",age:10},
    {name:"Timi",age:12},
    {name:"Tayo",age:15}
]
console.log(children);

//tuple
const x:[string,number, [number]] = ["lagos", 2024, [56], ]

//Object type

const address:object  = {
    street:"123 Main St",
    city:"Anytown",
    state:"Lagos",
    zip:"12345",
    country:'Nigeria'
}

const others:{} = {
    school:'UNN',
    course:'Computer Science',
}

const  workExp:{comp:string, year:number, date:string} = {
    comp:'Gomycode',
    year:2020,
    date:'2020-01-01',
}


enum cardinalPoints {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}

console.log(typeof(cardinalPoints.North));
console.log(cardinalPoints.South);
console.log(cardinalPoints.East);
console.log(cardinalPoints.West);



//Alias
type CarYear = number;
type CarName = string;

type vehicle = {
    year: number,
    type: string,
    model: string
  }

const car: vehicle ={
    year:2024,
    type:'SUV',
    model:"suv12"   
}
const Bike:vehicle ={
    year:2019,
    type:'Motorcycle',  
    model:"Bajaj"
}

const year: CarYear = 2022
const myCarname:CarName = "Benz"

console.log(year);
console.log(myCarname);


//Inteface
interface User{
    id:number,
    firstName:string,
    lastName:string,
    dob:  string,
    country: string
}

const userOne:User = {
    id:1,
    firstName:'alison',
    lastName:'chukwudi',
    dob:"12/07/2021",
    country:'Nigeria'
}

const userTwo: User = {
    id:2,
    firstName:'john',
    lastName:'Doe',
    dob:"12/07/2021",
    country:'USA',
}

const userThree: object =  {
id:3,
firstName:'pinky',
lastName:'brain',
dob:"12/07/2021",
country:'USA',
address:"12, main strret"
}

console.log(userOne);
console.log(typeof(userOne));





