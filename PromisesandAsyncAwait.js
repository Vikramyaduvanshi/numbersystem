
// Q: 11
// L0 - Basic Callback Demonstration
function displayMessage(name){
    console.log('hello' +" "+ name)
  }
  
  
  function getUserInput(Callback){
    
    setTimeout(function() {
      
      Callback();
    }, 1000);
    
  }
  
  getUserInput(function(){
    displayMessage("alice")
  })
  
  
  
  // Q: 12
  // L0 - Asynchronous Timer with Callback
  
  
  
  function OnComplete(){
   
  }
  
  
  function timer(duration, Callback){
    
    setTimeout(function() {
      console.log(`Timer of ${duration} ms finished`)
      
      Callback();
      
    },duration);
    
  }
  
  timer(2000, function(){
    OnComplete();
  })
  
  
  
  // Q: 13
  // L1 - Simulating Sequential Async Tasks (Callback Hell
  
  function task1(Callback){
    setTimeout(function() {
      console.log("Task one complete")
      Callback()
    }, 1000);
  }
  function task2(Callback){
    setTimeout(function() {
      console.log("Task two complete")
      Callback()
    }, 3000);
  }
  function task3(Callback){
    setTimeout(function() {
      console.log("Task three complete")
      Callback()
    }, 4000);
  }
  function task4(Callback){
    setTimeout(function() {
      console.log("Task four complete")
      Callback()
    }, 2000);
  }
  
  task1(function(){
    task2(function(){
      task3(function(){
        task4(function(){
          console.log("All task completed")
        })
      })
    })
  })
  
  
  // Q: 14
  // Problem Statement:
  
  
  
  function fetchDataWithCallback(Callback){
    
    setTimeout(function() {
    const data= { id: 1, name: "Sample Data" }
      
      Callback(null,data);
    }, 3000);
  
  }
  
  fetchDataWithCallback((e,data)=>{
    
    if (e) {
      console.error(error); // Log the error
    } else {
      console.log("Fetched data:", data); // Log the fetched data
    }
    
  })
  
  
  
  // Q: 15
  // L2 - Building a Callback-Based Async Workflow
  
  
  
  
  function registerUser(Callback) {
    setTimeout(() => {
      let register = "User registration successful";
      try {
        console.log(register);
        Callback();
      } catch (e) {
        console.log(e);
      }
    }, 2000);
  }
  
  function sendVerification(Callback) {
    setTimeout(() => {
      let verification = Math.floor(Math.random() * 10000);
      try {
        console.log(verification);
        Callback();
      } catch (e) {
        console.log(e);
      }
    }, 2000);
  }
  
  function loginUser(Callback) {
    setTimeout(() => {
      let login = "User login successful";
      try {
        console.log(login);
        Callback();
      } catch (e) {
        console.log(e);
      }
    }, 2000);
  }
  
  function displayWelcomeMessage(Callback) {
    setTimeout(() => {
      let displayMessage = "Welcome to our platform!";
      try {
        console.log(displayMessage);
        Callback();
      } catch (e) {
        console.log(e);
      }
    }, 2000);
  }
  
  
  registerUser(function() {
    sendVerification(function() {
      loginUser(function() {
        displayWelcomeMessage(function() {
          console.log("The end");
        });
      });
    });
  });
  