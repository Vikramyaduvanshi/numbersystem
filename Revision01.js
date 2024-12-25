// question no 3

function delayedFetch(arr) {

  return arr.map((data, index) => {
 return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data); 
      }, 2000 *index); 
    });
  
  });
}

async function executeFetch(promises) {
  for (let promise of promises) {
    const result = await promise; 
    console.log(result); 
  }
}


const promises = delayedFetch([20, 30, 50, 70, 40]); 
executeFetch(promises); 





// question no 4


function createProduct(name, price, category) {
  return {
    name,
    price,
    category,
    applyDiscount(discountPercentage) {
      this.price -= (this.price * discountPercentage) / 100;
    },
  };
}

function createCategoryManager(categoryName) {
  return {
    categoryName,
    products: [],

    addProduct(product) {
      if (product.category === this.categoryName) {
        this.products.push(product);
        console.log(`${product.name} added to category ${this.categoryName}`);
      } else {
        console.log(
          `${product.name} does not belong to the ${this.categoryName} category`
        );
      }
    },

    removeProduct(productName) {
      this.products = this.products.filter((p) => p.name !== productName);
      console.log(`${productName} removed from category ${this.categoryName}`);
    },

    listProducts() {
      console.log(`Products in category ${this.categoryName}:`);
      this.products.forEach((product) => {
        console.log(
          `- ${product.name}: $${product.price.toFixed(2)}`
        );
      });
    },

    applyCategoryDiscount(discountPercentage) {
      this.products.forEach((product) => {
        product.applyDiscount(discountPercentage);
      });
      console.log(
        `A discount of ${discountPercentage}% has been applied to all products in the ${this.categoryName} category`
      );
    },
  };
}


const product1 = createProduct("Laptop", 1000, "Electronics");
const product2 = createProduct("Smartphone", 800, "Electronics");
const product3 = createProduct("T-shirt", 20, "Clothing");


const electronicsManager = createCategoryManager("Electronics");
const clothingManager = createCategoryManager("Clothing");

electronicsManager.addProduct(product1);
electronicsManager.addProduct(product2);
clothingManager.addProduct(product3);

electronicsManager.listProducts();
clothingManager.listProducts();

product1.applyDiscount(10);
console.log(`${product1.name} price after discount: $${product1.price.toFixed(2)}`);

electronicsManager.applyCategoryDiscount(5);

electronicsManager.listProducts();
clothingManager.listProducts();
