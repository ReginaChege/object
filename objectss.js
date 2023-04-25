//Write a function that takes an array of objects, where each object represents a product with
// a name, price, and category property. The function should return an object that groups the 
//products by their categories, with the category names as keys and the arrays of products as values.
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  function groupProducts(products) {
    const result = {};
    products.forEach((product) => {
      const category = product.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(product);
    });
    return result;
  }
  console.log(groupProducts(products))
  
  
  //Given an array of objects, where each object represents a student with a name and an array of scores, 
  //write a function that returns a new array containing the names of all students whose average score is
  // greater than or equal to 85.
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  function studentTop(projects) {
    const students = [];
    for (let project of projects) {
      const name = project.name;
      const scores = project.scores;
      const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
      if (averageScore >= 85) {
        students.push(name);
      }
    }
    return students;
  }
   const student_Performance = [
    { name: 'John',
     scores: [90, 80, 85] },
    { name: 'Jane',
     scores: [95, 92, 88] },
    { name: 'Jim', 
    scores: [70, 80, 75] },
    { name: 'Jill', 
    scores: [85, 90, 84] },
  ];
  const topStudents =studentTop(student_Performance);
  console.log(topStudents); 
  
  //Given an object representing a car, with properties for the make, model, year, and a method to
  // display the car's information, write a function that takes the car object and adds a new method
  // to the object called age. The age method should return the current age of the car based on the 
  //current year and the car's year property.
  const carrr = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  function addAge(carrr) {
    var currentYear = new Date();
    carrr.age = function() {
      console.log( currentYear - this.year);
    }
    console.log(carrr.age());
  }
  addAge(carrr)