// factory fanction 
// question no 11

function createEmployee(name,role,sallery){

    return {
    
    name:name,
    role:role,
    sallery:sallery,
    introduce(){
        console.log(`Hello, I am ${name}, working as a ${role}.`);
    }
    
    }
    }
    
    let employee= createEmployee("Rahul", "developer",70000)
    
    
    employee.introduce()
    
    
    // question no 12
    
    
    function createCar(make, model, year){
    
    
       return  {
    
    make:make,
    model:model,
    year:year,
    describeCar(){
        console.log(` This car is a ${year} ${make} ${model}.`)
    }
        }
    }
    
    let car=createCar("Toyota", "Camry", 2022)
    car.describeCar()
    
    
    // Q: 13
    // Title:
    // L1 - Factory Functions with Dynamic Property Addition
    
    function createInventoryItem(name, category, price){
    return {
        name,
        category,
        price,
        describeItem(){
    console .log(` Item: ${name}, Category: ${category}, Price: ${price}`)
        }
    }
    }
    
    
    
    function addItemDiscount(item, discountPercent){
    
        let discountedrice= item.price-((item.price*discountPercent)/100)
    
    
    item.applyDiscount = function(){
    console.log(`Discounted Price for ${item.name}: ${discountedrice}`);
    }
    return  item;
    }
    
    const item = createInventoryItem("Laptop", "Electronics", 1500);
    item.describeItem();
    
    let discountedItem= addItemDiscount(item, 10)
    
    discountedItem.applyDiscount();
    
    
    
    
    // Q: 14
    // Title:
    // L1 - Debugging this in Factory Function Methods
    
    
    function createBook(title, author) {
      return {
        title: title,
        author: author,
        printInfo(){
          console.log("Book: " + this.title + ", Author: " + this.author);
        }
      };
    }
    
    let books= createBook("shrikrishna","Geeta")
    books.printInfo();
    
    
    
    
    // Q: 15
    // Title:
    // L2 - Building a Library Management System Using Factory Functions
    
    
    function Book(title, authore){
        
    return {
    title, 
    authore, 
    details(){
       console.log(`Title:${this.title}, Authore: ${this.authore}`) ;
    }
    
    }
    
    }
    
    let CollectionBook=[];
    
    function Creatliberary(){
    
    
    return {
    
    add(book){
    
    if(CollectionBook.some((book1)=> book1.title.toLowerCase()==book.title.toLowerCase())){
        console.log("This book is already added, cant add")
    }else{
    CollectionBook.push(book);
    }
    },
    
    removeBook(title){
    
    let index= CollectionBook.findIndex((book)=> book.title==title)
    
    if(index !== -1){
        CollectionBook.splice(index, 1)
    }
    else{
        console.log(`${title} is not available in liberary ,Please Enter Currect Name `)
    }
    
    },
    
    listBook(){
    if(CollectionBook.length==0){
        console.log("No books available in liberary")
    }
    else{
    CollectionBook.forEach((book)=> book.details());
    }
    
    }
    
    
    }
    
    
    }
    let creatliberary= Creatliberary(); 
    
    const book1 = Book("The Great Gatsby", "F. Scott Fitzgerald");
    const book2 = Book("To Kill a Mockingbird", "Harper Lee");
    const book3 = Book("1984", "George Orwell");
    
    creatliberary.add(book3)
    creatliberary.add(book2)
    creatliberary.add(book1)
    creatliberary.listBook()