// Question no 11
// Extract and Reverse a Portion of an Array

function extractAndReverse(arr){
  
    let abstractarray= arr.slice(3,5)
    
    let reves=[]
    
    for(let v of abstractarray){
      
      reves.unshift(v)
      
    }
    console.log(reves)
  }
  
  let arr=[15, 30, 45, 60, 75, 90]
  extractAndReverse(arr)

//   question no 12
//   Modify and Merge Arrays with splice and concat

function mergearray(arr1, arr2){
  
    if(arr1.includes("bike")){
      let index= arr1.indexOf('bike')
      arr1.splice(index, 1, "bus", "scooter")
    
    }
    
    let arr3= arr1.concat(arr2)
    return arr3;
    
  }
  
  let arr1 = ["car", "bike", "train"]
 let  arr2 = ["plane", "ship"]
  
  console.log(mergearray(arr1,arr2))
  

// Question 13
//   L1 - Implementing Multiple Custom Methods for Array Operations

function EvenNumber(arr){
let EvenNumber= arr.filter((v) => v%2==0)
return EvenNumber
}

function sumofarray(arr){
  let sumOfarray= arr.reduce((acc,v) => acc+v )
  return sumOfarray;
}

function sortAndConcat(arr1, arr2){
arr1= arr1.sort();
arr2= arr2.sort()
let arr3= arr1.concat(arr2)
return arr3
}
console.log(sortAndConcat([1,2,3,4,5],[7,8,9,18]))
console.log(EvenNumber([1,2,3,4,5,6,7,8]))
console.log(sumofarray([1,2,3,4,5,6,7,8]))


// Question no 14
// Debugging an Array and String Manipulation Program


function manageStudents() {
  let students = ["Alice", "Bob", "Charlie"];

  // Add "David" at index 1
  students.splice(1, 0, "David");

  // Check if "Eve" is in the list
  console.log(students.includes("Eve"));  // Should return false

  // Convert the array to a string with names separated by commas
  console.log(students.join(","));  // Expected: "Alice,David,Bob,Charlie"
}

manageStudents();


// Question no 15
// L2 - Library System with Multiple Methods


// Digital Library System

class DigitalLibrary {
  constructor() {
      this.books = [];
  }

  // 1. Add a book to the library
  addBook(bookTitle) {
      this.books.push(bookTitle);
      console.log(`${bookTitle} has been added to the library.`);
      this.displayBooks();
  }

  // 2. Remove a book by its name
  removeBook(bookTitle) {
      const index = this.books.indexOf(bookTitle);
      if (index !== -1) {
          this.books.splice(index, 1);
          console.log(`${bookTitle} has been removed from the library.`);
      } else {
          console.log(`${bookTitle} is not found in the library.`);
      }
      this.displayBooks();
  }

  // 3. Search for a book
  searchBook(bookTitle) {
      if (this.books.includes(bookTitle)) {
          console.log(`${bookTitle} is available in the library.`);
      } else {
          console.log(`${bookTitle} is not available in the library.`);
      }
  }

  // 4. Find the first and last occurrence of a book
  findOccurrences(bookTitle) {
      const firstIndex = this.books.indexOf(bookTitle);
      const lastIndex = this.books.lastIndexOf(bookTitle);

      if (firstIndex !== -1) {
          console.log(`First occurrence of ${bookTitle} is at index ${firstIndex}.`);
          console.log(`Last occurrence of ${bookTitle} is at index ${lastIndex}.`);
      } else {
          console.log(`${bookTitle} is not found in the library.`);
      }
  }

  // 5. Extract a sublist of books
  extractSublist(start, end) {
      const sublist = this.books.slice(start, end);
      console.log(`Extracted sublist: ${sublist.join(", ")}`);
  }

  // 6. Sort books alphabetically
  sortBooks() {
      this.books.sort((a, b) => a.localeCompare(b));
      console.log("Books have been sorted alphabetically.");
      this.displayBooks();
  }

  // 7. Replace a book
  replaceBook(index, newBookTitle) {
      if (index >= 0 && index < this.books.length) {
          const oldBook = this.books.splice(index, 1, newBookTitle);
          console.log(`${oldBook[0]} has been replaced with ${newBookTitle}.`);
      } else {
          console.log("Invalid index provided.");
      }
      this.displayBooks();
  }

  // 8. Join book titles into a string
  joinBooks() {
      const bookList = this.books.join(", ");
      console.log(`Books in the library: ${bookList}`);
  }

  // Display all books
  displayBooks() {
      console.log("Current books in the library:", this.books);
  }
}

// Example usage
const library = new DigitalLibrary();

library.addBook("The Great Gatsby");
library.addBook("1984");
library.addBook("To Kill a Mockingbird");
library.addBook("1984");
library.searchBook("1984");
library.findOccurrences("1984");
library.extractSublist(1, 3);
library.sortBooks();
library.replaceBook(2, "Pride and Prejudice");
library.removeBook("1984");
library.joinBooks();


