let origDogs=["Bulldog","Beagle","Labrador"];
let cat=new Array("American Curl,Bengal");
let birds=new Array("Falcon","Flamingos");

//Array copy Elements
let sliceDogs=origDogs.slice(1,2);
let copyDogs=[...origDogs];
let dogs=origDogs.slice(0);

console.log(sliceDogs);
console.log(copyDogs);
console.log(dogs);

//Stack Function(Lifo)Push and pop
let pushDog=dogs.push("Golden Retriever");
console.log("E"+dogs);
console.log("E"+pushDog);
let popDog=dogs.pop();
console.log("F"+dogs);
console.log("F"+popDog);

//Add and Remove from First
let addFirst =dogs.unshift("Golden Retriever");
console.log("W"+dogs);
let shiftDog=dogs.shift();
console.log("W"+dogs);

//Array Function -concat slice sort
let animals =dogs.concat(cat,birds);
console.log("animals:"+animals);
let newAnimals=[...dogs, ...cat, ...birds].toString();
let sortDog=dogs.slice(0).sort();
function scanArray([first,second]){console.log("Scan: "+first+" "+second);}
scanArray(animals);

let joinAnimals=animals.join(" ");
let allAnimals=" ";
for(let animal of animals)allAnimals +=animal + " ";
console.log("Animals :"+allAnimals);
