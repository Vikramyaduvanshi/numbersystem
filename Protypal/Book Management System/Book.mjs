// Define the Book constructor function
function Book(title, author, year) {
    this.title = title;     // Title of the book
    this.author = author;   // Author of the book
    this.year = year;       // Year of publication
}


Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Export the Book constructor
export default Book;
