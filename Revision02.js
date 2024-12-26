function customArray(){

    this.usemap = function(arr){
    
     return arr.map((value)=>{
      return value*value;
    
      })
    }
    this.usefilter = function(arr){
    
      return arr.filter((v)=> v>2);
    }
    
    this.usereduce = function(arr){
    return arr.reduce((acc,value)=> acc+value, 0)
    
    }
    this.usesort = function(arr){
    return arr.sort((a,b)=> a-b)
    
    }
    
    }
    
    let CA= new customArray();
    let arr=[5, 2, 9, 1, 5, 6]
    console.log(CA.usemap(arr))
    console.log(CA.usefilter(arr))
    console.log(CA.usereduce(arr))
    console.log(CA.usesort(arr))
    



// uestion no 4


function flattenProfile({name,age, address: {city, country, postalCode,coordinates:{lat,long}}, contact:{phone,email:emailaddres},preferences:{newsletter,notifications:{email,sms}}}){


return {
  
  name: name,
  city: city,
  country: country,
  phone: phone,
  email: emailaddres,
  coordinates: {
    lat: lat,
    long: long
  },
  notifications: {
    email: email,
    sms: sms
  }

}

}





const userProfile = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
    postalCode: '10001',
    coordinates: {
      lat: 40.7128,
      long: -74.0060
    }
  },
  contact: {
    phone: '123-456-7890',
    email: 'john@example.com'
  },
  preferences: {
    newsletter: true,
    notifications: {
      email: true,
      sms: false
    }
  }
};

console.log(flattenProfile(userProfile));

