
console.log("-------------Exercise 1-------------\n");



let arrayOfNumbers = [1, 2, 3, 4, 5];
console.log ( arrayOfNumbers );


console.log("\n-------------Exercise 2-------------\n");

let user1 = {
    name: "Lydia",
    surname:"Karapatsakidi",
    email: "lydiaksj@yahoo.com",
    age: 27,
};

console.log (user1);


console.log("\n-------------Exercise 3-------------\n");


user1.hasDrivingLicense = false;

console.log (user1);



console.log("\n-------------Exercise 4-------------\n");

delete user1.age;

console.log (user1);



console.log("\n-------------Exercise 5-------------\n");

let user2 = {
    name: "David",
    surname: "Adams",
    email: "davidadams@example.com"
};

console.log (user2)

if (user1.email === user2.email && user2.email === user1.email) {
    console.log ( "User 1 and user 2 have the same email.");
    } else {
        console.log ("User 1 and user 2 have different emails.");
    }


console.log("\n-------------Exercise 6-------------\n");


let totalShoppingCart = (85);

if (totalShoppingCart >= 50) {
   console.log ( "User is eligible for free shipping. ");
} else { 
console.log (" User has to pay 10 for shipping.");
}


console.log("\n-------------Exercise 7-------------\n");
// 20 % off 85euros is 17 euros

let discount = 17

let totalCost = totalShoppingCart - discount;
console.log (totalCost);
if (totalCost >= 50) {
    console.log ( "User is eligible for free shipping. ");
 } else { 
 console.log (" User has to pay 10 for shipping.");
 };


 console.log("\n-------------Exercise 8-------------\n");


 let car= {
    brand: "Nissan",
    model: "Skyline",
    licensePlate:"KK-1234"
 }
 console.log (car);

 let car2 = car;
 car2.licensePlate = "KK-1235";

console.log (car2);

let car3 = car;
car3.licensePlate = "KK-1236";
console.log (car3);

let car4 = car;
car4.licensePlate = "KK-1237";
console.log (car4);

let car5 = car;
car5.licensePlate = "KK-1238";
console.log (car5);

let car6 = car;
car6.licensePlate = "KK-1239";
console.log (car6);



console.log("\n-------------Exercise 9-------------\n");


let carsForRent = [car, car2, car3, car4, car5, car6];
console.log (carsForRent);

console.log("\n-------------Exercise 10-------------\n");

carsForRent.pop (0);
carsForRent.pop (5);

console.log (carsForRent);


console.log("\n-------------Exercise 12-------------\n");

let carsForSale = [];
car7 = {
    brand:"KIA",
    model: "Picando"
}
carsForSale.push (car7);
car8 = {
    brand: "Toyota",
    model: "Prius",
}
carsForSale.push (car8);
car9 = {
    brand:"Hyundai",
    model:"Kona"
}
carsForSale.push (car9);
console.log (carsForSale);

totalCars = (carsForSale.length + carsForRent.length);
console.log (totalCars);


console.log("\n-------------Exercise 13-------------\n");

for ( let i=0; i < carsForSale.length; i +=1) {

    let dataCarsForSale = carsForSale [i];
    console.log (dataCarsForSale);
}


