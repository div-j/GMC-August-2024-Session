function Move(speed: number): string {
  return "I am the fastest man alive i move at the speed of light " + speed;
}
Move(300000)
//class

class Vehicle {
  tires: number ;
  mirror: number;
  color: string;
  name: string;
  model: string ;

  constructor(numTires:number,numMirror:number, color:string,name:string,model:string){
    this.tires = numTires
    this.mirror = numMirror
    this.color = color
    this.name = name
    this.model = model
  }
 
}

//object of car
let car = new Vehicle(4,2,"red","Benz","E400");
let bike = new Vehicle(2,2,"black","Bajaj","ab400")
let maruwa = new Vehicle(3,2,"yellow", "TVS", "tvs2012")

console.log("i have a " + car.name + " car of " + car.color + " color");
console.log("i have a " + bike.name + " bike of " + bike.color + " color"+ " of model "+bike.model);

class Apartment{
    name:string;
    location:string;
    rooms:number;
    storey:number;

    constructor(aptName: string,location: string, rooms: number, storey: number){
        this.name = aptName;
        this.location = location;
        this.rooms = rooms;
        this.storey = storey;

    }

    benefits():string{
        return "this apartment has " + this.rooms + " rooms and " + this.storey +" storey Is a nice place to live or have"
    }
}


let Bungalow = new Apartment("Bongalow", "Apapa", 4, 0)

console.log(Bungalow.benefits());

