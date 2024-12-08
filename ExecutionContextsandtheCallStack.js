// Q: 11
// Title: L0 - Understanding Global and Function Execution Context
let age= 23

function displayage(){

    console.log(age)

    function changeage(){

        age= 24

        console.log(age);
    }
    changeage()
}
displayage()

// Q: 12
// Title:
// L0 - Fixing Array and Object Operations

const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
  
    addBook: function (book) {
      if (!book.title || !book.author || !book.year) {
        console.log("Book information is incomplete. Missing fields:");
        if (!book.title) console.log("- Title is missing");
        if (!book.author) console.log("- Author is missing");
        if (!book.year) console.log("- Year is missing");
        return;
      }
      this.books.push(book);
      console.log(`Book "${book.title}" added successfully.`);
    },
  
   
    findBookByTitle: function (title) {
      const foundBook = this.books.find((book) => book.title === title);
      if (foundBook) {
        return foundBook;
      } else {
        console.log(`Book titled "${title}" not found.`);
        return null;
      }
    },
  
    removeBook: function (title) {
      const index = this.books.findIndex((book) => book.title === title);
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1);
        console.log(`Book titled "${removedBook[0].title}" removed successfully.`);
      } else {
        console.log(`Book titled "${title}" not found.`);
      }
    },
  };
  
  library.addBook({ author: "George Orwell", year: 1949 });
  console.log(library.books.length); 
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
  console.log(library.books.length); 
  
  console.log(library.findBookByTitle("The Hobbit")); 
  console.log(library.findBookByTitle("Nonexistent Book")); 
  
  library.removeBook("1984"); 
  console.log(library.books.length); 
  
  library.removeBook("Nonexistent Book"); 

//   Q: 13
//   Title:
//   L1 - ES6 Syntax Errors and Type Coercion


  const checkout = {
    items: [],
    total: 0,
  
   
    addItem(item) {
      
      if (typeof item.price !== 'number' || isNaN(item.price)) {
        console.log(`Invalid price for item "${item.name}". Price must be a valid number.`);
        return;
      }
  
     
      this.items.push(item);
      this.total += item.price;
      console.log(`Item "${item.name}" added successfully.`);
    },
  
   
    getTotal() {
      return `Total: $${parseFloat(this.total).toFixed(2)}`;
    },
  };

  checkout.addItem({ name: "Coffee Maker", price: "99.95" }); 
  
  checkout.addItem({ name: "Milk", price: 3.50 }); 
  
  checkout.addItem({ name: "Bread" }); 
  
  console.log(checkout.getTotal());
  


//   Q: 14
//   Title:
//   L1 - Debugging Object Methods


  const userProfile = {
    name: "Alice",
    age: 28,
  
  
    details() {
      return `${this.name} is ${this.age} years old.`;
    },
  
  
    updateAge(newAge) {
      if (newAge <= 0) {
        console.log("Invalid age.");
        return;
      }
  
      
      this.age = newAge;
      console.log(this.details());
    },
  };
  userProfile.updateAge(30); 
  console.log(userProfile.details()); 


//   Title:
//   L2 - Preventing Stack Overflow in Recursion


  function factorial(num) {
    if (typeof num !== "number" || num < 0) {
      console.log("Invalid input");
      return null; 
    }
  
    if (num === 0) {
      return 1;
    }
  
    
    return num * factorial(num - 1);
  }
  
  // Test Cases
  console.log(factorial(5)); 
  console.log(factorial(0)); 
  console.log(factorial(-5)); 
  console.log(factorial("hello")); 
  