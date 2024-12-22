// Import the array of Book instances from books.js
import books from '/books.mjs';

// Use Array.prototype.map to create an array of book summaries
const bookSummaries = books.map(book => book.getSummary());

// Log the array of book summaries to the console
console.log("Book Summaries:");
bookSummaries.forEach(summary => console.log(summary));
