const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

// Print prime numbers 

for(let i=1; i<numbers.length; i++){
let count=0;
for(let j=1; j<=numbers[i]; j++){

if(numbers[i]%j==0){
    count++;
}


}

if(count==2){
    console.log( numbers[i], "number is prime number ")
}

}


// Minimum , maximum and Sum 


let Minimum= Infinity;
let maximum=0;
let sum=0;

for(let v of numbers){

if(v<Minimum){
    Minimum=v;
}
if(v>maximum){
    maximum=v;
}

sum += v;

}

console.log("Minimum: ", Minimum, "maximum:", maximum, "sum:",sum);



// prime Array
let primearray=[]
for(let i=1; i<numbers.length; i++){
    let count=0;
    for(let j=1; j<=numbers[i]; j++){
    
    if(numbers[i]%j==0){
        count++;
    }
    
    
    }
    
    if(count==2){
        primearray.push(numbers[i]);
    }
    
    }
console.log(primearray);

// Find the maximum and minimum number in the primeArray.
let Minimump= Infinity;
let maximump=0;
let sump=0;

for(let v of primearray){

if(v<Minimum){
    Minimum=v;
}
if(v>maximum){
    maximum=v;
}

sum += v;

}
console.log("Minimum: ", Minimump, "maximum:", maximump, "sum:",sump);


