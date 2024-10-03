//Types of variables or Data Types

//number
age = 30
height = 17.5

//strings //texts wrapped in backticks, signle, or double quote


student_name = "Mayowa"
sex = "male"
ctry = `Nigeria`
state ='Lagos'
address = "12 adam's street"

first_name = "Divine"
lastName = "John"

fullname = first_name+" "+lastName
console.log(fullname);

console.log("Student Biography");
console.log("------------------");

console.log("Name: "+student_name);
console.log("Sex:"+" "+sex)
console.log(`Age: ${age}`);
console.log("Height:",height);
console.log();


//Arrays // wrapped with square braces

student_info = [27, 17.5, "Alex", "male","12 Carbon's Street", "lagos", "Nigeria"]

console.log("Student Biography");
console.log("------------------");

console.log("Name:",student_info[2]);
console.log(`Age: ${student_info[0]}`);
console.log(`Sex: ${student_info[3]}`);
console.log("Height: "+student_info[1]);
console.log("Address:",student_info[4]);
console.log("State:",student_info[5]);
console.log("Country:",student_info[6]);


// console.log("Name: "+student_info[2]);

//two, three or more dimentional arrays
header =["ID","Name", "Age", "Address", "State"]
row_one = [1,"Ayo", 28, "Mowe", "Ogun" ]
row_two =[2,"Alex", 28, "Magboro","Edo"]

students = [header,row_one, row_two ]

console.log("---------------------");

console.log("Student Details");
console.log(students[0][0],': ',students[1][0]); //Id
console.log(students[0][1]+": "+students[1][1]); //name
console.log(`${students[0][2]}: ${students[1][2]}`); //age
console.log(`${students[0][3]}: ${students[1][3]}`); //Address
console.log(`${students[0][4]}: ${students[1][4]}`); //State

console.log();
console.log(students[0][0],': ',students[2][0]); //Id
console.log(students[0][1]+": "+students[2][1]); //name
console.log(`${students[0][2]}: ${students[2][2]}`); //age
console.log(`${students[0][3]}: ${students[2][3]}`); //Address
console.log(`${students[0][4]}: ${students[2][4]}`); //State

console.log();

console.log("Total Students: ",students.length-1);


//addig new student row

students.push([3, "Mayowa",28, "Magodo", "Edo"])

row_four = [4, "Olumide", 40, "Ayobo", "Osun"]
row_five = [5, "Francis", 65, "Ikeja", "Anambra"]
row_six = [6, "Chinasa", 25, "Ikoyi", "Anambra"]
students.push(...[row_four,row_four, row_five, row_six])

console.log("Total Students: ",students.length-1);

//update
students[4][2] = 35
students[4][1] = "Olumaintain"

//delete
students.splice(4,1)

students.pop()
console.log(students);


//Objects
//creating objects
employee = {
    id:1, 
    name: "Divine",
    age:32,
    dept: "Engineering",
    address:{
        num:34,
        street:"Onike",
        city:"Yaba",
        state:"Lagos",
        ctry:"Nigeria"

    }
}

console.log();

console.log("Employee Detail");
console.log("--------------------");

console.log("Id: ", employee.id);
console.log("Name: ", employee.name);
console.log("Age: ", employee.age);
console.log("Dept: ", employee.dept);
console.log("Address: ", employee.address.num, employee.address.street, employee.address.city,employee.address.state,employee.address.ctry,    );



employees =[
    employee,
    {
        id:2,
        name: "Chinasa",
        age: 25,
        dept: "Marketing",
        address:{
            num: 45,
            street: "Ikeja",
            city: "Lagos",
            state: "Lagos",
            ctry: "Nigeria"
            }
    },
    {
        id:3,
        name: "Chibuike",
        age: 30,
        dept: "Finance",
        address:{
            num: 67,
            street: "wuse",
            city: "Abuja",
            state: "Abuja",
            ctry: "Nigeria"
            }
    },
    "address",
    9,
    [4]
]


console.log();

console.log("Array or list of employee");

console.log(typeof(employees));
console.log(employees.length);

// update
// employees[2].address.city = "Gwarinpa"
console.log(employees[2].address.city ="Gwarinpa");
console.log(employees[2].role = "admin");
console.log(employees[2].sex = "Male");
console.log(employees[2]);


// employees[2].role = "Financial secretary"
// employees[2].cars = 4
// employees[1]["role"] = "Director"


// delet or romove

delete employees[2].sex

console.log(employees[2])


x = 45
y = 40
z = {name:"david"}
k = "words"
console.log(typeof(y));
console.log(typeof(x));
console.log(typeof(z));
console.log(typeof(k));






































