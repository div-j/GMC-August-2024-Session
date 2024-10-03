//arrow
let msg;
msg = function (name){
return "How are you doing "+name
}

console.log(msg('Oma'));


let resp =  (name)=> {
    return "I am good, "+name+ " and you?"
}

console.log(resp('Ayo'));

let DtoN =  (dollar)=> {
    let rate = dollar *1671
    return `${rate}NGN `
}

console.log(DtoN(300));

//forEach method
let numbers = [1, 2, 3, 4, 5, 6,]

numbers.forEach( (value)=>{ console.log(value);
})
console.log();

//Destructuring
bluetooth1 =   {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 49.99,
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise-cancelling feature and up to 20 hours of battery life.'
}
bluetooth2 = {...bluetooth1,price:56.999, name:'JBL',id:2 }
console.log(bluetooth2);


bluetooth1.name
bluetooth1.price
let {name, price } = bluetooth1
console.log(name, price);

let firstItem = numbers[0]
let secItem = numbers[1]

let [,,,,item5] = numbers
// console.log(item3);
// console.log(item5);





//spread ...
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2,...q3, ...q4];
// console.log(year);




//products
let products = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 49.99,
        category: 'Electronics',
        description: 'High-quality wireless headphones with noise-cancelling feature and up to 20 hours of battery life.'
    },
    {
        id: 2,
        name: 'Smart LED TV 50 inch',
        price: 399.99,
        category: 'Electronics',
        description: '50-inch 4K Ultra HD Smart LED TV with built-in apps and streaming services.'
    },
    {
        id: 3,
        name: 'Stainless Steel Water Bottle',
        price: 19.99,
        category: 'Home & Kitchen',
        description: 'Reusable stainless steel water bottle with a 750ml capacity and leak-proof lid.'
    },
    {
        id: 4,
        name: 'Gaming Laptop',
        price: 1299.99,
        category: 'Computers',
        description: 'High-performance gaming laptop with 16GB RAM, 512GB SSD, and NVIDIA GeForce RTX graphics.'
    },
    {
        id: 5,
        name: 'Running Shoes',
        price: 69.99,
        category: 'Sports & Outdoors',
        description: 'Lightweight and durable running shoes with cushioned soles for extra comfort.'
    },
    {
        id: 6,
        name: 'Coffee Maker',
        price: 89.99,
        category: 'Home & Kitchen',
        description: 'Automatic drip coffee maker with programmable settings and a 12-cup capacity.'
    },
    {
        id: 7,
        name: 'Wireless Mouse',
        price: 24.99,
        category: 'Computers',
        description: 'Ergonomic wireless mouse with adjustable DPI and long-lasting battery life.'
    },
    {
        id: 8,
        name: 'Electric Standing Desk',
        price: 299.99,
        category: 'Furniture',
        description: 'Height-adjustable electric standing desk with memory presets and a spacious desktop.'
    },
    {
        id: 9,
        name: 'Organic Cotton Bed Sheets',
        price: 59.99,
        category: 'Home & Kitchen',
        description: 'Soft and breathable organic cotton bed sheets, available in queen and king sizes.'
    },
    {
        id: 10,
        name: 'Portable Bluetooth Speaker',
        price: 39.99,
        category: 'Electronics',
        description: 'Compact and waterproof Bluetooth speaker with a 10-hour battery life and powerful bass.'
    }
];

products.forEach(({name, price})=>{console.log(name, price)
});

//map

let x = numbers.map( (item) => {
   let result =  item*item
   return result
    
})

products = products.map( (product) => {
   let discount =  product.price *(10/100)
   newPrice = product.price - discount
   return {...product, price:newPrice }
}) 

// console.log(products);

console.log(x);


let y = x.filter(function (item) {
    return item < 18
})

console.log(y);

let highProducts = products.filter(function (product) {
   let highProduct = product.price>80
    return highProduct
})


console.log(highProducts);

var scores = [45, 4, 9, 16, 25];
sum  =scores.reduce((a,b)=>{return a+b})
console.log(sum);









