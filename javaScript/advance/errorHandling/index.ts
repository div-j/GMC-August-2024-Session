let a:number = 5
let b:number = 14

console.log(a);


try {
console.log(`a x b = ${c}`)
    
} catch (error) {
 console.log(error.message);
    
}finally{
    console.log("other code below will still run below despite the errors");
}

let d:number = 12


let e:number = d%a
console.log(`Modulo of d and a = ${e}`);

let Userage:number = 16

try {
    if (Userage<18) {
        throw 'You are not up to age'
    }else{
        console.log('Wow will you marry me?');
    
    }
} catch (error) {
console.log("Sorry", error);

}


console.log();

console.log('Babe');


