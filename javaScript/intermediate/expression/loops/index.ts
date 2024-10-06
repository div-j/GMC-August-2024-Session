//for loop
// erand variable is optional
//conditon given is
//increemtor or decreementor

let a:number=0

for(;a<=3; ){
    console.log("Alex");   
    a+=2
}


let numbers:number[]=[18, 1,56,7,25,8,9,5,6,4,0,3,2,8,128,13,17,8];

//print out the items in the array
//print the even numbers
//print out the highest value
//print out the lowest value


for (let a = 1; a <=10; a++) {
console.log(a);  
}

console.log();

for(let i=0;i<numbers.length;i++){
console.log(numbers[i]);

}
// console.log(numbers.length);
console.log();

//print the even numbers
let i:number = 0 

let evenNum:number[] = []
for(;i<numbers.length;i++){
if (numbers[i]%2==0 && numbers[i]>0){
    evenNum.push(numbers[i])
}
}
console.log(evenNum);

//print out the highest value
let max:number = numbers[0]
for (let i = 0; i < numbers.length; i++) {
  if( numbers[i] > max){
    max = numbers[i]
  }
    
}
console.log(max);


//print out the minimum value
console.log(numbers);


let min:number = numbers[0]
for (; i < numbers.length; ) {
  if( numbers[i] < min){
    min = numbers[i]
  }
  i++ 
}
console.log(min);




let oddNum:number[] = []
let b:number = 1
while (b <numbers.length) {
    oddNum.push(numbers[b])
    b+=2
}

console.log(oddNum);

//Do while loop : printing first 20 even numbers

let c = 2;
do{
    console.log(c);
    c+=2   
}
while(c<=20);

console.log();

//For in loop: returns index of the items in an array

let Cars:string[] = ['BMW', 'Lexus', 'Lambo', "Benz"]

for(let ayo in Cars){
console.log(ayo);

}
console.log();

//For of loop: returns the items in an array
for(let mayo of Cars){
    console.log(mayo);
    
}




