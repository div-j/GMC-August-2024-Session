//Inbuilt Functions
//consel.log()
//Number()
//Alert()
//String()
//Boolean()
//

//usage by casting

[
    {name:'John', age:24, course:'SD'}
]


function Greet2():string{
    return "Hello my people how una dey"
}

console.log(Greet2());

function number():number{
    return 45
}

console.log(number());
console.log(number());
console.log(number());

function Salutation(name:string):string {

    return "Hello "+ name + ", how you dey"
}

//usage by calling function
console.log( Salutation("Chioma"))
console.log( Salutation("John"))
console.log( Salutation("Perry"))


//anonymous: a function without a name
let msg = function(name:string): string {
    let me = `Hello ${name}! How are doing its being a while`
    return me
    
}

console.log(msg("Mayo"));




