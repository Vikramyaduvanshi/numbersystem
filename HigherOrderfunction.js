// question No 11
// Transforming and Filtering with map() and forEach()
function processProducts(products) {
   
    const productNames = products.map(product => product.name);

 
    products.forEach(product => {
        const message = product.price > 50 ? 'above $50' : 'below $50';
        console.log(`${product.name} is ${message}`);
    });

    return productNames; 
}


const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 60 },
    { name: "Monitor", price: 40 }
];


const productNames = processProducts(products);
console.log("Product Names:", productNames);


// Question No 12
// Filter and Sort Data with Higher-Order Functions

function processStudents(arr){

    let filterstudent= arr.filter((value) =>  value.marks>60)

filterstudent.sort((a,b) => a.marks-b.marks)

let studentName= filterstudent.map((v) => v.name)
console.log(studentName)
}

let Input= [ { name: "Alice", marks: 58 },{ name: "Bob", marks: 85 },{ name: "Charlie", marks: 92 },{ name: "David", marks: 45 } ];
processStudents(Input)

// Question No 13
// Grouping and Summing with reduce()

function GroupingSumming(arr){
    let countProduct = arr.reduce((acc, category)=>{
      
  acc[category]==undefined ?acc[category]=1 : acc[category]=acc[category]+1;
  
  return acc
      
    },{} )
   
  console.log(countProduct)
    let entries= Object.entries(countProduct);
   return entries.sort((a,b)=> a[1]-b[1])
  
  }
  
  let Input3= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
  console.log(GroupingSumming(Input3))
  

//   question 14
//   Employee Performance Evaluation System

function EmployeePerformanceEvaluationSystem(arr){
  
    let filteredarr=arr.filter((v) => v.tasksCompleted>5)
   
    let levelemployee= filteredarr.map((v)=>{
      
      if(v.rating>4.5){
        delete v.tasksCompleted;
        delete v.rating;
        v.performance="Excellent";
        return v
      }
      else if(v.rating>3 && v.rating<=4.5){
        delete v.tasksCompleted;
        delete v.rating;
        v.performance="Good";
        return v
      }
      else{
        delete v.tasksCompleted;
        delete v.rating;
        v.performance="Needs Improvement";
        return v
      }
    })
   
    
    
    return levelemployee.sort((a,b)=>{
  const performaceorder={"Excellent": 1, "Good": 2, "Needs Improvement": 3};
   return performaceorder[a.performance] - performaceorder[b.performance];
  
    })
  }
  
  
  Input=[
  
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  
  ]
  console.log(EmployeePerformanceEvaluationSystem(Input))


  // Questionn no 15
  // L2 - Inventory Management System: Tracking Low Stock and Reordering
  function ManagementSystem(arr){
  
    let stock_is_less_than_100= arr.filter((v) => v.stock<100)
    
    let reordercost = stock_is_less_than_100.map((v) => ({
        name: v.name,
        category: v.category,
        cost: v.pricePerUnit * (100 - v.stock)
      })
    )
    
    let group = reordercost.reduce((acc, v)=>{
      
      if(acc[v.category]==undefined){
        acc[v.category]= v.cost
      }
      else{
        acc[v.category] += v.cost;
      }
      
      return acc
    }, {})
    
  const sortedcategory= Object.entries(group)
  
  sortedcategory.sort((a,b)=> a[1]-b[1]).forEach((v)=> console.log(`${v[0]} : ${v[1]}`))
  
  }
  
  let Input5 = [
  
  { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
  
  { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
  
  { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
  
  { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
  
  { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } ]
  
  
  ManagementSystem(Input5)
