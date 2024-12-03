let sentenceBuilder ={
    subject:"The cat",
    verb:"is running",
    object:"on the roof",
    
    buildSentence : function(){
    return this.subject && this.verb && this.object ? `${this.subject} ${this.verb} ${this.object}` : "Incomplete sentence";
    },
    updateProperty :function(property,value){
        if(!property || property.trim() === ""|| !value || value.trim() === ""  ){
        console.log("Incomplete sentence");
      }
       else if(this[property]){
        this[property]=value;
      }
    
      else{
        console.log("Invalid property");
      }
    }
    }
    
      console.log(sentenceBuilder.buildSentence()); 
      
    sentenceBuilder.updateProperty("subject","i")
    sentenceBuilder.updateProperty("verb","am learning")
    sentenceBuilder.updateProperty("object","coding")
     console.log(sentenceBuilder.buildSentence());
     
      sentenceBuilder.updateProperty("verb", "");
      
    sentenceBuilder.updateProperty("mood", "happy");
  

  



  


  
  