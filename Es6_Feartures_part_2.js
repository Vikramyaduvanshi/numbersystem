// Question No 11

let  multiply=(a =1, b =1)=> {

    return a * b;
 }
 console.log(multiply(3,4));
 console.log(multiply());


 // Question No 12

 let squareCube =(a)=>{
   let square=a**2 
   let  cube=a**3
return { square, cube};
 }

console.log(squareCube(5))


 // Question No 13

    const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];


 function addressdetails(people){
let result=[]

for(let v of people){

    const{name, address:{city, street: {name: streetname}}}=v

    result.push(`${name} lives in ${city} on ${streetname}`)
}
return result;

 }
 console.log(addressdetails(people))



//  question no 14
const profile = { 
    name: "Charlie", 
    age: 29,
    address: { 
        city: "San Francisco",
        zipcode: "94101" 
    }
};

const updates = { 
    age: 30, 
    address: { 
        zipcode: "94109",
        country: "USA" 
    }
};

let mergeobj = { ...updates, ...profile,  address : {...profile.address, ...updates.address  } }
console.log(mergeobj)

// Question No 15

// Nested Object Destructuring for API Response with Optional Chaining


function formatUserDetails(user){
  
  const{id="Information not available", profile:{name="Information not available", address:{city="Information not available",zipcode="Information not available"}={}}={}}=user ?? {};
  
  return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`
  
}

const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } }
const user1= { id: 123, profile: { name: "John Doe" } }
console.log(formatUserDetails(user))
console.log(formatUserDetails(user1));
