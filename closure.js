// Question no 11
// Title:
// L0 - Basic Closure Example

function outerFunction(){
    let message="Inner scop";
    return function inner(){
      console.log(message)
    }
  }
  
  let fisrt= outerFunction();
  fisrt();

  // question no 12 

  function createCounter(){
  
    let count=1;
    
    return {
   increament:  function (){
    count += 1
    return count
    },
   getCount:  function(){
      return count;
    }
    }
  }
  const counter= createCounter();
  console.log(counter.increament())
  console.log(counter.getCount())


//   Q: 13
// Title:
// L1 - Encapsulating Bank Account using Closures
  function createBankAccount(){
  
    let balance=50000;
    
    
    return {
      
      deposit:function(n){
        balance +=n;
        return `Balace deposit successufully updated balance : ${balance}`
      },
      withdraw :function(n){
        balance -=n;
        return `Balace withdraw successufully updated balance : ${balance}`
      },
      getBalance:function(n){
        
        return `Your current Balace is balance : ${balance}`
      }
      
      
    }
    
    
  }
  const account = createBankAccount(100);
  
  console.log(account.deposit(50));
  
  console.log(account.withdraw(30)); 
  
  console.log(account.getBalance()); 


//   Q: 14
// Title:
// L1 - Debugging Incorrect Closure Value Retention

function createFunctionList() {

  let functions = [];
  
  for (let i = 0; i < 5; i++) {
  
  functions.push(function () {
  
  console.log("Index:", i);
  
  });
  
  }
  
  return functions; }
  
  const functionList = createFunctionList();
  
  functionList[0](); // Expected Output: "Index: 0", 
  functionList[1](); // Expected Output: "Index: 1", 
   functionList[2](); // Expected Output: "Index: 2", 
  functionList[3](); // Expected Output: "Index: 3", 
   functionList[4](); // Expected Output: "Index: 4", 

  //  let creates a new scope for each iteration of the loop, causing a closure over the i value at that point in time.When the function is executed from the functionList, it retains the captured value of i at the time the function was created, not at the time of execution.

  //  var does not create a new block scope for each iteration of the loop. Instead, it reuses the same variable i across all iterations.
  //  Due to this, when the function is executed, it reads the i value from the last iteration of the loop where i is 5


// Q: 15
// Title:
// L2 - Debugging Memory Leak in Closures

function createHeavyDataHandler() {
  let largeData = new Array(1000000).fill(0); 
  return {
    
    processData: function () {
      
      console.log("Processing data of size:", largeData.length);
    },
    
    
    clearData: function () {
      console.log("Clearing data")
      
      largeData = null; 
      
    }
  }
}

const handler = createHeavyDataHandler();
handler.processData(); // Output: Processing data of size: 1000000
handler.clearData(); // Output: Clearing data

// After calling handler.clearData(), the largeData should be eligible for garbage collection.
