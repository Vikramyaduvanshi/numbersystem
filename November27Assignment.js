
// question no 11
// Title: L0 - Determine Senior Citizen Discount Eligibility

function eligibilityforDiscount(age){
    let Discount= age>=60 ? "Eligible for Senior Discount" : age==0||age<0 ? "Invalid Age" :"Not Eligible for Senior Discount";

    console.log(Discount);
}

eligibilityforDiscount(65)
eligibilityforDiscount(-1)


// question 12
// Find Largest of Three Numbers Using Ternary Operator

function maxnumber(num1,num2,num3){

let finalnumber= num1>num2 && num1>num3 ? num1 :  num2>num1 && num2>num3 ? num2 : num3;
console.log(finalnumber);
}
let num1 = 45, num2 = 78, num3 = 33
maxnumber(num1,num2,num3);


// question 13
// - Product Price Category Based on Multiple Conditions

function classify(price){

let result= price>=1000 ? "Expensive" : price>500 && price<999 ? "Moderate" : price<500 && price>0 ? "Affordable" : price==0 ? "Free" : "Invalid Price"
console.log(result);

}
let price = 750;
classify(price)
price = 0;

classify(price)

// question 14
// Dynamic User Role Message with Object Properties

function generateMessage(user){

let message=  user.role === "admin" && user.status ? "Admin Access Granted!": user.role === "admin" && !user.status ?  "Admin Access Revoked" : user.role === "user" && user.status ? "User Access Granted!" : user.role === "user" && !user.status ? "User Access Revoked" :"Access Denied";

console.log(message);


}

let user = { name: "Alice", role: "admin", active: false };
generateMessage(user)
 user = { name: "Bob", role: "user", active: true };
 generateMessage(user)


//  Question no 15
//  Advanced User Privilege Management System

function accessPrivileges(obj1){

if(obj1.role=="admin"){

    let result= obj1.experience >=5 && obj1.department=="IT" && obj1.active? "Full IT Admin Access" : obj1.experience >=5 && obj1.department !== "IT" && obj1.active? "Full General Admin Access" : obj1.experience <=5  && obj1.active ?"Limited Admin Access": "Admin Access Revoked";
console.log(result);
}
else if(obj1.role=="manager"){

    let result= obj1.experience >=3 && obj1.department=="Sales" && obj1.active ? "Full Sales Manager Access" : obj1.experience >=3 && obj1.department !== "Sales" && obj1.active? "Full Manager Access" : obj1.experience <=3  && obj1.active ?"Limited Manager Access": "Manager Access Revoked";
console.log(result)
}
else if(obj1.role=="user"){
    let result= obj1.department=="Support" && obj1.active?"Priority Support Access" : obj1.department !== "Support" && obj1.active ? "User Access" : "User Access Revoked";
console.log(result)
}
else{
    console.log("Invalid Role")
}

}


let person = { role: "admin", experience: 7, active: true, department: "IT" };
 accessPrivileges(person);

 person = { role: "manager", experience: 4, active: true, department: "Marketing" };
 accessPrivileges(person);


 person = { role: "user", experience: 2, active: true, department: "Support" };
 accessPrivileges(person);

 person = { role: "admin", experience: 3, active: false, department: "Finance" };
 accessPrivileges(person);