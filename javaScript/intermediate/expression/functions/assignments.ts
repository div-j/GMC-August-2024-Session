let products:product[] = []

interface product {
    product:string, 
    model:string, 
    price:number, 
    qty:number
}
//creating
function addProduct(item:product):void {
    products.push(item) 
      
}

//read
function viewPrduct():void {
    console.log( products );
}


addProduct({product:'Iphone', model:"iphone-x", price:450, qty:4})
addProduct({product:'Samsung', model:"samsung-s10", price:350, qty:2})
addProduct({product:'Samsung', model:"samsung-s12", price:390, qty:4})

viewPrduct()

function remove( index:number,  count:number) {
    products.splice(index, count)
}
console.log();


addProduct({product:'Iphone', model:"iphone-x", price:450, qty:4})
addProduct({product:'Samsung', model:"samsung-s10", price:350, qty:2})
addProduct({product:'Samsung', model:"samsung-s12", price:390, qty:4})

console.log();
viewPrduct()

remove(1,1);

console.log();
viewPrduct()

remove(1,2)

console.log();
viewPrduct()


function sum(x:number, y:number, z?:number):number {
    return  x+y+(z||0)
}

function mult(x:number , y:number):number {
 return x*y   
}

console.log(sum(3500,2,5))


 console.log( mult(4,5))


 function DtoN(dollar:number):number{
return dollar *1600
 }

 console.log(DtoN(50));
 
function CtM(cent:number) {
    return cent / 100
}

console.log(CtM(1000));


function isEven(value:number) {
    return value %2 ==0
}

console.log(isEven(9));
console.log(isEven(6));

function rWords(words:string){
      return  words.split(' ').reverse().join(" ")
}

console.log(rWords("i am Divne"))
console.log(rWords("Monday we go to school. right? Divne"))


//Palindrome
function isPalindrom(word:string) {
    var newword:string = word.toLowerCase()
    var reWord:string = word.split('').reverse().join('').toLowerCase()
    return reWord == newword
}

console.log(isPalindrom("Dady"));


// Loops
