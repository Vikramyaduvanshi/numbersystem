function vPattern(N){
 
  
    let x= 2*N-2;
    
    for(let i=0; i<N; i++){
    
    let bag = "";
    
    for(let j=1; j<=i ; j++){
    
          bag += " ";
    }
    
    bag += "\\";
    
    
    for(let k=1; k<=x; k++){
    
    bag += " ";
    
    }
    
    bag += "/";
    
    x  -= 2;
    
    console.log(bag);
    
    
    
    
    }
    
      
    }

    vPattern(1);