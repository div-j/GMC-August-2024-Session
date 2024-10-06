
let mayowa_spec: string = "colabo"
let ayo_spec:string = "chest"
let alex_spec:string = "straight"
let oma_spec:string = "broad_sholder"&&"tall"&&'dark'
let lady:string[] = ["tall", 'colabo',"straight","chest"]
let guy:string[] = ["medium", "broad_sholder","fair","fat"]

    

if(lady[0]==ayo_spec){
    console.log("Wow! My spec. God you are great: says Ayo"); 
    console.log("She's mine");
    
}

else if(lady[0] ==mayowa_spec && lady[1]==mayowa_spec) {
    console.log("Wow! My spec. That's Massive baby : says Maywoa"); 
}


else if(alex_spec==lady[3]){
    console.log("amaizing! My spec. That's straight baby : says Alex"); 
}
else if (guy.includes(oma_spec)) {
    console.log("Blush, shy😍, uhnn so romantic");
    
}

else{
    console.log("Opps Damn, Not my spec, God where are you? ");
    
}


//ternary ?
let stephen:string = "Will you maary me?"
let lady_res:string ="yes";

(lady_res =="yes") ? console.log("Marriage, eat rice, make babies") : console.log("Heart break");

//switch case
// let Monday:number = 1
// let Tuesday:number = 2
// let Wednessday:number = 3

// let today:number  = 2

// switch(today){
//     case Monday:
//         console.log("I'll wear blue  today");
//     case Tuesday:
//         console.log("I'll wear white today");
//     case Wednessday:
//         console.log("I'll wear black today");

        
// }

// const date = new Date()
interface stud_inf{
    name:string,
    dob: Date
}
const today_info:stud_inf = {
    name:"Chikamso",
    dob: new Date("2024-9-18")
}


// const date:Date = new Date()
const year:number = new Date().getFullYear() 
const month:number = 9

switch (month){
    case 0:
        console.log("January");
        break
    case 1:
        console.log("Feb");
        break
    case 8:
        console.log("Sept");
        break
    case 9:
        console.log("Oct");
        break
    default:
        console.log("No match");
          
}


