// Q: 8
// Title
// Prototypes and Prototypical Inheritance Syntax Practice

function Animal(){

}

Animal.prototype.sound=function(){
    console.log(`sound`)
}


function Dog(){

}

Dog.prototype= Object.create(Animal.prototype);

Dog.prototype.constructor=Dog;

Dog.prototype.sound=function(){
    console.log(`bark`)
}

let mydog= new Dog();
mydog.sound();




// Q: 9
// Problem:
// Title
// Basic Person Management System with Prototypical Inheritance

function Person(name, age){
    this.name=name;
    this.age=age;
}

Person.prototype.introduce=function(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name,age,title){
Person.call(this,name,age);
this.title=title;

}

Employee.prototype=Object.create(Person.prototype)

Employee.prototype.work = function () {
    console.log(`${this.name} is working as a ${this.title}.`);
};


let person= new Person("Vikram",23)
let employee= new Employee("Bob", 30, "Software Developer")

person.introduce()
employee.introduce()
employee.work()

// Q: 10
// Title
// Prototypical Inheritance and Constructor Functions - I

function Car(make,model, year,type, isAvailable=true){
this.make=make;
this.model=year;
this.year=year;
this.isAvailable=isAvailable;
}

function Customer(name){
this.name=name;
this.rentedCars=[];
}


Customer.prototype.rentCar = function(car){

if(car.isAvailable){
this.rentedCars.push(car);
car.isAvailable=false;
console.log(` ${this.name} has been rented ${car.make} ${car.model}`)
}
else{
    console.log(`${car.make} ${car.model} is already rented`)
}
}

function PremiumCustomer(name,discountrate){
    Customer.call(this, name)
    this.discountrate=discountrate;
}
PremiumCustomer.prototype= Object.create(Customer.prototype)

function CalculatRentalPrice(car, days, customer){



let n=1;
let totalPrice = 50*days*n;

if(car.type=="Toyata"){
    n=2;
}
else if(car.type=="Sedan"){
    n=3;
}

if(customer instanceof PremiumCustomer){
    totalPrice -= (totalPrice*customer.discountrate)/100;
}
console.log(`Total rent of ${car.make} for ${days} is ${totalPrice} `);
}





Customer.prototype.returnCar = function (car){

setTimeout(()=>{
let index= this.rentedCars.findIndex((car)=> car.make);
if(!car.isAvailable){
    car.isAvailable=true;
    this.rentedCars.splice(index, 1);
    console.log(`${this.name} returned the car ${car.make}`)
}
else {
            console.log(`${this.name} did not return the ${car.make} ${car.model}.`);
        }

},2000)

}

function Maintenance(car,delay){
    console.log(`The ${car.make} ${car.model} is under maintenance.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`The ${car.make} ${car.model} is now available.`);
    }, delay);

}


const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Ford", "Explorer", 2019, "SUV");
const car3 = new Car("Honda", "Civic", 2021, "Sedan");



const customer1 = new Customer("Alice");

const customer2 = new PremiumCustomer("Bob", 10);


customer1.rentCar(car1); // Alice rents Toyota Corolla
customer2.rentCar(car2); 
customer2.rentCar(car3);

let calculte= new CalculatRentalPrice(car1,10,customer1)
let calculte1= new CalculatRentalPrice(car1,10,customer2)




// Q: 11
// Problem Statement

function Product(name, price, quantity){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
}


function Electronic(name, price, quantity){
    Product.call(this, name, price,quantity);
    this.isProductpower=true;
}

Electronic.prototype.power= function(){
    if(isProductpower){
        console.log(`${this.name} has been off`)
        this.isProductpower=false;
    }
    else{
console.log(`${this.name} has been on`)
this.isProductpower=true;
    }
}


function Clothes(){
    
    this.clothe=[];
}

Clothes.prototype.addstore=function(product){
if(this.clothe.some((obj)=> obj.name==product.name)){
let index= this.clothe.findIndex(()=> product.name)
this.clothe[index].quantity += product.quantity
console.log(`new quantity is : ${this.clothe[index].quantity}`)

}
else{
    this.clothe.push(product)
    console.log(`${product.name} ${product.quantity} has been added`)
}
}
Clothes.prototype.buy=function(name,quantity){

   if(this.clothe.some((obj)=> obj.name==name)){
    let index= this.clothe.findIndex((obj)=> obj.name);
this.clothe[index].quantity -= quantity
console.log(`Thankyou for purchasing `)

   }
   else{
    console.log("product is not available")
   }

}


function Books(name, price, quantity){
    // Product.call(this,name, price, quantity)
    this.book=[];
}

Books.prototype.addstore=function(product){
if(this.book.some((obj)=> obj.name==product.name)){
let index= this.book.findIndex(()=> product.name)
this.book[index].quantity += product.quantity
console.log(`${product.name} ${product.quantity} has been added`)
}
else{
    this.book.push(product)
    console.log(`${product.name} has been added`)
}
}


let product1= new Product("T-shirt", 500, 10)

let clothe1= new Clothes();
clothe1.addstore(product1);
clothe1.addstore(product1);
clothe1.buy("T-shirt",2)

let bookp= new Product(" Bhagwat Geeta", 500, 10)

let book1= new Books();


book1.addstore(bookp)
book1.addstore(bookp)



