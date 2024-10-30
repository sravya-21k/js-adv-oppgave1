/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//1. Use .filter() to extract all products that cost less than 200

// creating new array priceProducts and this array includes only price less than 200
const priceProducts = products.filter((name) => name.price < 200);
//priceProducts to console to view the result
console.log(priceProducts);

//2. Use .map() to make a list that only contain the product names

//creating new array productNames and each product object  should have name property which stores name of products
const productNames = products.map((product) => product.name);
//productNames to console to view the result
console.log(productNames);

// 3. Use a chained combination of .filter() and .map() to list only  the names of all products in a specific category (e.g. 'electronics')

//created new array productCategory
const productCategory = products

  //filtered product array with specific category electronics and
  .filter((product) => product.category === "electronics")
  //map over the filtered products with new array with tha name of each product
  .map((product) => product.name);
//console productCategory to view the result
console.log(productCategory);

//4. Use .some() to check if there are any products that cost more than 1000

//some() checks if at least one element in the products array to meet specific condition
const greaterPrice = products.some((products) => products.price > 1000);
//if it meets the condition shows true otherwise false
//console greaterPrice to view the result
console.log(greaterPrice);

//5. Use .reduce() to find the total cost of all the products.
//add the price each product to running total
const productTotal = products.reduce(
  (total, products) => total + products.price,
  0
); //Initial value of total is set to 0
//console productTotal to view the result
console.log(productTotal);
