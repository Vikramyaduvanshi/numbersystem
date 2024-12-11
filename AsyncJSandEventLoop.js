// Q: 11
// Title:
// L0 - Understanding Synchronous Code Execution

console.log("Task 1"); 
console.log("Task 2"); 
console.log("Task 3");

// Q: 12
// Title:
// L0 - Implementing setTimeout for Delayed Messages

console.log("Message 1")
  
setTimeout(function() {
  console.log("Message 2 after 2 seconds")
  
}, 2000);

console.log("Message 3")


// Q: 13
// Title:
// L1 - Simulating a Loading Screen with setInterval


let count = 0; 

let setintervalid = setInterval(() => {
  console.log("Loading");

  count++; 

  if (count === 5) {
    clearInterval(setintervalid); 
    console.log("Stopped Loading"); 
  }
}, 1000);


// Q: 14
// Title:
// L1 - Debugging Event Loop Order

console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task");

 }, 0); 
 Promise.resolve().then(() => { console.log("Promise Task"); }); 
console.log("End");

// Q: 15
// Title:
// L2 - Building a Countdown Timer with Both setTimeout and setInterval

let count5= prompt("Enter countdown value in second")

let setid=setInterval(()=>{
 
    console.log(count5)
    if(count5 == 0){
    
    clearInterval(setid)
    console.log("Timeout completed")
    
       }
    count5--

}, 1000);


function checkForKeyPress() {
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "s") {
      clearInterval(setid)
      console.log("Countdown stopped by user")
    }
  })
};


setTimeout(checkForKeyPress, 3)

