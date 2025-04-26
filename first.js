//   let firstname="Sonu Rajput"
//   let india="win"
//   let age=20
//   const x=null
//   let favmovies="The Seven"
//  let name="nandini"
//  let a;
//  console.log(age);
//  console.log(firstname);
//  console.log(favmovies);
//  console.log(x);
//  console.log(india);
//  console.log(name);
//  console.log(a);

// {
//     let a=10
//     console.log(a);
// }
// {
//     let a=20
//     console.log(a);
// }

// isfollow= false 


// const student = {
//     name: "nandini thakur",
//     age: 25,
//     cgpa : 9.5,
//     isPass : true,
// };

// console.log(student.name);      


// function sayhello() {
//     alert("Hello,JavaScript");
// }


// // let name  = "Alice";


// if (true) {
//     let name = "bob";   
//     console.log(name);
// }
// console.log(name);

// e = 18;

// if (age >= 18) {
//     console.log("You are eligible to vote! ");
// } else {
//     console.log("You are not eligible to vote. ");
// }
// let marks = 93;

// if (marks >= 90) {
//     console.log("Grade: A+ ");
// } else if (marks >= 80) {
//     console.log("Grade: A ");
// } else if (marks >= 70) {
//     console.log("Grade: B+ ");
// } else {
//     console.log("Grade: C ");
// }



// let username = "admi";
// let password = "1233";

// if (username === "admin") {
//     if (password === "1234") {
//         console.log("Login successful! ");
//     } else {
//         console.log("Incorrect password ");
//     }
// } else {
//     console.log("User not found ");
// }


// let temperature = 19;

// if(temperature>=30) {
//     console.log("It's hot outside! ");
// } else if (temperature >= 20) {
//     console.log("It's warm outside! ");
//     } else {
//         console.log("It's cold outside! ")
//     }



//     for (let i = 5; i <= 10; i++) {
//         console.log(i,"Hello! ");
//     }
    
        

       
//     let i = 1;  // Start point
//     while (i <= 5) {  // Condition
//         console.log(i);
//         i++;  // Increment
//     }
//     let count = 1;

// while (count <= 5) {
//     console.log("Count:", count);
//     count++;  // Count ko badhao, nahi toh loop infinite ho jayega
// }


// let favcolur = "blue";
// console.log(favcolur);

// // Data Type	Example
// // String	"Hello"
// // Number	25, 99.99
// // Boolean	true, false
// // Undefined	let x;
// // Null	let y = null;

// let isSunny = true;
// let isWarm = false;

// console.log(isSunny && isWarm); // false
// console.log(isSunny || isWarm); // true
// console.log(!isSunny); // false



// let num = 1;

// while (num <= 5) {
//     console.log("Number: " + num);
//     num++;  // num = num + 1
// }





// let number = 7;  

// if (number % 2 === 2) {
//     console.log(number + " is Even");
// } else {
//     console.log(number + " is Odd");
// }


// function greet() {
//     console.log("Hello,Welcome to javascript")
// }
// greet();


// function add(a, b) {
//     console.log("Sum:", a + b);
// }

// add(10, 5);  // Output: Sum: 15
// add(7, 3);   // Output: Sum: 10


// function subtract(a,b) {
//     console.log("Difference:", a - b);
// }

// subtract (50,105);



// function calculate(a, b) {
//     console.log("Sum:", a + b);
//     console.log("Difference:", a - b);
//     console.log("Multiply:", a * b);
//     console.log("Divide:", a / b);
// }

// calculate(10, 5);
// calculate(50, 25);
// calculate(80,189);


// function calculateAdvanced(a, b, operator) {

//         if (operator === "+") {
//             console.log("Sum:", a + b);
//         } else if (operator === "-") {
//             console.log("Difference:", a - b);
//         } else if (operator === "*") {
//             console.log("Multiply:", a * b);
//         } else if (operator === "/") {
//             console.log("Divide:", a / b);
//         } else {
//             console.log("Invalid Operator");
//         }
//     }

    

//     calculateAdvanced(10, 5, "+"); 
//     calculateAdvanced(8, 2, "*");   
//     calculateAdvanced(20, 5, "/");  
//     calculateAdvanced(100, 50, "-"); 
//     calculateAdvanced(10, 3, "%");



//     let numbers = [10,20,30,40,50,100,200,10000];
//     console.log(numbers);



//     let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
//     console.log(fruits[0]);
//     console.log(fruits[3]);
//     console.log(fruits[4]); 


//     let colors = ["Red", "Blue"];
//     colors.pop();
// colors.push("Green");  ;
// console.log(colors);  
// colors.pop();



// let students = ["ali","alisha","ahmed"];
// students.push("sonu")
// console.log(students);


// let teachers = ["adhiraj","subash","aisha","aditya","sailash","sandep"];
// for (let i = 0; i < teachers.length; i++) {
//     if(teachers[i]==="aisha") {
//         console.log("aisha is my fav student");
//     } else {
//         console.log (teachers[i]); 
//     }
// }


// let person = {
//     name: "rahul",
//     age : 25,
//     city: "banaras",
//     grade:"A+"
// }
// person.job ="developer";
// for (let key in person) {
//     console.log(key, person[key]); 
// }





//  let hightech = {
//      name: "Aisha",
//      age: 20,
//      course: "JavaScript",
//      grade: "A"
//  }

//  for (let key in hightech) {
//      console.log(key + ":", hightech[key]);
//  }



//  let sonu = {
//     self:"raghav",
//     age:"39",
//     course:"java",
//     city:"banaras",
//     introduce:function() {
//         console.log("hi,my name is " + this.self+ " and i am learning " + this.course + " i live in " + this.city);
//     }
//  };

//  sonu.introduce();



// //  let cars = ["BMW", "AUDI", "LAMBO"];

// // for (let i = 0; i < cars.length; i++) {
// //     console.log(cars[i]);
// // }



// let cars = ["BMW", "AUDI", "LAMBO"];

// cars.forEach(function(car) {
//     if (car === "LAMBO") {
//         console.log("LAMBO is my dream car!");
//     } else {
//         console.log(car);
//     }
// });




// let movie = ["seven","prisoners","shawshank redepmtion",];

// movie.forEach(function(movie) {
//     if(movie === "seven"){
//         console.log("seven is my favorite movie");
//     } else {
//         console.log(movie);
//     }
// })



// let DIGITS = [10, 25, 30, 45, 50, 60];

// let greaterThan50 = DIGITS.filter(function(DIGITS) {
//     return DIGITS > 50;
// });

// console.log(greaterThan50);




// let umars =[12,18,22,15,30,40];

// let greaterThan18 = umars.filter(function(umar) {
//     return umar >= 18;
//     })
//     console.log(greaterThan18);



//     let prices = [100, 250, 400, 150, 500];

// let firstGreaterThan200 = prices.find(function(prices) {
//     return prices > 200;
// });

// console.log(firstGreaterThan200);



// let score = [99, 85, 75, 95, 80];

// score.sort(function(a, b) {
//     return b - a; // Bada se chhota
// });

// console.log(score);



// let vegetables = ["Apple", "Mango", "Banana", "Orange"];

// console.log(vegetables.includes("Mango")); // true
// console.log(vegetables.includes("Grapes")); // false




// let doc = ["Ali", "Aisha", "Rahul", "Sonu", "Zara", "Ahmed"];

// // Middle ke 3 students nikalna (Index 1 se 4 tak, 4 exclude hoga)
// let middledoc = doc.slice(1, 4);

// console.log(middledoc);  let ag




// let tasks = []; // Empty array to store tasks

// function addTask() {
//     let taskInput = document.getElementById("taskInput");
//     let taskText = taskInput.value.trim();

//     if (taskText !== "") {
//         tasks.push(taskText); // Add task to array
//         displayTasks();
//         taskInput.value = ""; // Clear input field
//     } else {
//         alert("Please enter a task!");
//     }
// }

// function displayTasks() {
//     let taskList = document.getElementById("taskList");
//     taskList.innerHTML = ""; // Clear existing list

//     tasks.forEach(function(task, index) {
//         let li = document.createElement("li");
//         li.innerHTML = `${task} <button onclick="removeTask(${index})">Delete</button>`;
//         taskList.appendChild(li);
//     });
// }

// function removeTask(index) {
//     tasks.splice(index, 1); // Remove task from array
//     displayTasks(); // Refresh list
// }


// let count = 0; // Counter ki value

// function increase() {
//     count++; // 1 se badhaye
//     document.getElementById("countDisplay").innerText = count; // Display update kare
// }

// function decrease() {
//     count--; // 1 kam kare
//     document.getElementById("countDisplay").innerText = count; // Display update kare
// }

// function reset() {
//     count = 0; // 0 set kare
//     document.getElementById("countDisplay").innerText = count; // Display update kare
// }

//   console.log("hello")
// alert("sonu ")


// document.body.childNodes[3].innerText = "Hello, World!";

    
    
//  let heading = document.getElementById("heading");
//   console.log(heading);


//   let name = "Ali"
//   let age = 21;

//   let message = `Hello, my name is ${name} and I am ${age} years old.`;
//   console.log(message)



//   let a = 89, b = 69;
//   console.log(`sum of ${a} and ${b} is ${a+b}`);



//   let city = "Karachi"; 
//   let country = "Pakistan";

//   console.log(`I live in ${city} and my country is ${country}`);


//   let sandesh = `Hello,
// This is a multi-line string
// using Template Literals!`;
// console.log(sandesh);


// let reason = `i am learning and i want to do something in my life

// 1. this is great javascript 
// 2. i want to do in my office great`
//  console.log(reason);



//  const add = (a,b)=>  {
//     return a+b;
//  };
//  console.log(add(5,7));


//  const add = (a, b) => a + b;
// console.log(add(5, 3)); // Output: 8

  
// const greet = () => "Hello, World!";
// console.log(greet()); // Output: Hello, World!


// const multiply = (a, b) => a * b;
// console.log(multiply(4, 5)); // Output: 20



// const greet = (name) => `Hello, ${name}! Welcome to JavaScript.`;
// console.log(greet("Ali")); // Output: Hello, Ali! Welcome to JavaScript.


// const greet = (name )=> `namste, ${name}! wlecome to jjj.`;
// console.log(greet("sonu"));



// const multiply = (a,b,c) => a*b*c;
// console.log(multiply(2,3,4));




// let elements = document.querySelector("p"); // first element
// console.log(elements); // Output: <p>...</p>


  // const p01 = document.getElementById("para-01");
  // console.log(p01.firstChild.nodeName);


  // dom elemets ko select kar rhe hain
  
//   let taskCount = 0;
//   let isEditing = false;
//   let currentRow = null;
  
//   document.getElementById("addTaskBtn").addEventListener("click", function () {
//       const taskInput = document.getElementById("taskInput");
//       const task = taskInput.value.trim();
  
//       if (task === "") {
//           alert("Please enter a task!");
//           return;
//       }
  
//       const tasks = document.querySelectorAll("#taskTable tbody .task-text");
//       for (let i = 0; i < tasks.length; i++) {
//           if (tasks[i].textContent === task) {
//               alert("This task already exists!");
//               return;
//           }
//       }
  
//       if (isEditing) {
        
//           const taskCell = currentRow.cells[1];
//           taskCell.textContent = task;
//           taskCell.classList.add("task-text");
//           isEditing = false;
//           currentRow = null;
//       } else {
        
//           taskCount++;
//           const table = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
//           const newRow = table.insertRow();
  
//           const cell1 = newRow.insertCell(0);
//           const cell2 = newRow.insertCell(1); 
//           const cell3 = newRow.insertCell(2); 
  
//           cell1.textContent = taskCount;
//           cell2.textContent = task;
//           cell2.classList.add("task-text");



//           const toggleSwitch = document.getElementById('theme-toggle');
//           const body = document.body;
  
//           function applyTheme(isDark) {
//               if (isDark) {
//                   body.classList.add('dark-mode');
//                   localStorage.setItem('theme', 'dark');
//               } else {
//                   body.classList.remove('dark-mode');
//                   localStorage.setItem('theme', 'light');
//               }
//           }
  
//           toggleSwitch.addEventListener('change', () => {
//               applyTheme(toggleSwitch.checked);
//           });
  
//           window.addEventListener('DOMContentLoaded', () => {
//               const savedTheme = localStorage.getItem('theme');
//               const isDark = savedTheme === 'dark';
//               toggleSwitch.checked = isDark;
//               applyTheme(isDark);
//           });
             
//           const viewBtn = document.createElement("button")
//           viewBtn.textContent = "View"
//           viewBtn.classList.add("view-btn")
//           viewBtn.addEventListener("click", function () {
//             const taskText=cell2.textContent;
//             alert("Task Details:" + taskText)
//           })
  
         
//           const deleteBtn = document.createElement("button");
//           deleteBtn.textContent = "DELETE";
//           deleteBtn.classList.add("delete-btn");
//           deleteBtn.addEventListener("click", function () {
//               table.deleteRow(newRow.rowIndex - 1);
//               updateSerialNumbers();
//           });
  
          
//           const editBtn = document.createElement("button");
//           editBtn.textContent = "EDIT";
//           editBtn.classList.add("edit-btn");
//           editBtn.addEventListener("click", function () {
//               const taskText = cell2.textContent;
//               taskInput.value = taskText;
//               taskInput.focus();
//               taskInput.select();
//               isEditing = true;
//               currentRow = newRow;
//           });
  
//           cell3.appendChild(deleteBtn);
//           cell3.appendChild(editBtn);
//           cell3.appendChild(viewBtn)
//       }
  
//       taskInput.value = "";
//   });
  

//   function updateSerialNumbers() {
//       const table = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
//       const rows = table.rows;
//       taskCount = 0;
//       for (let i = 0; i < rows.length; i++) {
//           taskCount++;
//           rows[i].cells[0].textContent = taskCount;
//       }
//   }

//   document.getElementById("taskInput").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("addTaskBtn").click();
//     }
// });           
  
// const fruits = ["apple", "banana", "mango"];
// fruits.forEach(fruit => {
//   console.log(fruit);
// });


// const nums = [1, 2, 3];
// const double = nums.map(n => n * 2); 
// console.log(double); // [2, 4, 6]


// // para.innerText = "Hi, there!";
// // para.innerHTML = "<strong>Bold Hello!</strong>";


// const para =document.querySelector("#text");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click",()=> {
//     para.innerText = "you clicked the button";
// });

let firstName = "Amit";
const birthYear = 2000;


console.log("Name:"+firstName)
console.log("Year of Birth" + birthYear )



let name = "Rahul";         // String
let age = 22;               // Number
let isStudent = true;       // Boolean
let salary = null;          // Null
let city;                   // Undefined
let numbers = [1, 2, 3];    // Array
let person = { name: "Ali", age: 30 }; // Object


// +   // Add
// -   // Subtract
// *   // Multiply
// /  // Divide
// %   // Modulus (remainder)
// **  // Exponentiation (power)



// chapter 1 q1
// let a="sonu"
// let b = 9
// console.log(a + b)


// // chapter 1 q2

// console.log(typeof (a+b))



// const dict = {
//     appericate: "recognize the full worth of.",
//     dictation: "spoken words that somebody else must write or type"
// }
// console.log(dict.appericate) 
// console.log(dict.dictation)


// operators in  js 

console.log("operators in  js")
let a = 45;
let b = 4;
console.log("a + b= ",a+b)
console.log("a - b= ",a-b)
console.log("a / b= ",a/b)
console.log("a * b= ",a*b)
console.log("a % b= ",a%b)
console.log("a ** b= ",a**b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)



let s = 10
// yaha par s m 10 assign kiya gya h


let y = 5;
y += 789;  // means a = a + 3
console.log(y);  // Output: 794


let n = 18;
n -= 847;
console.log(n);


let num = 10;

// Arithmetic only
console.log(num + 5);  // Output: 15 (but num is still 10)

// Assignment
num += 5;
console.log(num);      // Output: 15 (num is now changed)


let umar = 20;

if (umar >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


let temperature = 28;

if (temperature > 35) {
  console.log("It's too hot!");
} else if (temperature > 20) {
  console.log("Nice weather!");
} else {
  console.log("It's cold!");
}



// loops

for (let i = 1; i <= 10; i++) {
  console.log("For Loop: " + i);
}
//Best jab tumhe pata ho kitni baar repeat karna hai.


//while Loop – Jab condition pe repeat karna ho


let i = 1;
while (i <= 5) {
  console.log("While Loop: " + i);
  i++;
}

// Jab tumhe pehle check karna ho ke "kaam karna bhi hai ya nahi".


// . do...while Loop – Jab kam se kam 1 baar chalana ho
let count = 10;
do {
  console.log("Do While Loop: " + count);
  count++;
} while (i <= 3);


// Even though condition false hai (10 <= 3 ❌), phir bhi ek baar chalega.


// Traffic signal light change ho 3 baar
for (let i = 1; i <= 3; i++) {
  console.log("Change light " + i);
}




// while loop understanding
// Tumne ek online shopping website pe kuch items add kiye hain – like shoes, jeans, t-shirt.

// Ye sab ek cart naam ke array mein store hain.

let cart = ["shoes", "jeans", "t-shirt"];


while (cart.length > 0) {
  let removedItem = cart.pop();  // last item hat gaya
  console.log("Removed:", removedItem);
}

// Ab tum chahte ho:

// "Ek-ek item cart se hataate jao jab tak cart khali na ho jaye."

// Usi ke liye hum while loop lagate hain:



// cart.length > 0 ➡️ check karta hai: kya cart mein abhi bhi koi item hai?

// cart.pop() ➡️ last item hata deta hai (aur return bhi karta hai)

// Jab cart khali ho jata hai (length = 0), loop ruk jaata hai.




let bag = ["samosa1","samosa2","samosa3" ,"samosa4", "SAMOSA55"];


while (bag.length > 0){
  let eaten =bag.pop();
  console.log("kha gaya", eaten)
}

let number = 1;

while (number <= 5) {
  console.log("Hello " + number);
  number++;
}

       

let dabba = ["laddo1","laddo2","laddo3","laddo4"];

while (dabba.length > 0){
  let bite=dabba.shift();
  console.log("kha gya",bite)
}



// functions 

//Soch le ek dabba (box) jisme tumne koi kaam daal diya —
// Ab jab bhi chahiye, us dabbe ko bulao aur kaam ho jaaye!

// Function = Code ka reusable dabba 💡


function naamRakho() {
  // yeh kaam hoga jab function call hoga
}
naamRakho(); // function chala diya



 function sayHello(){
   console.log("Hello Bhai");
 }

 sayHello()
 sayHello()
 sayHello()

// let naam = "Amit";
// console.log(naam);



function greet(name){
  console.log("hello "+ name + "! ")

}
greet("ragav");
greet("vijay");
greet("sonu");
greet("adityA");


function banwaoChai(sugar) {
  console.log("Chai ready with "+ sugar + "spoons of sugar. ");
}

banwaoChai(2);
banwaoChai(0)
banwaoChai(5)


function orderShoes(size) {
  console.log("Aapka shoe size " + size + " ka order place ho gaya!");
}

orderShoes(9);  // Output: Aapka shoe size 9 ka order place ho gaya!
orderShoes(7);  // Output: Aapka shoe size 7 ka order place ho gaya!
orderShoes(10); 
orderShoes(4); // Output: Aapka shoe size 10 ka order place ho gaya!
orderShoes(15);
orderShoes(3);
orderShoes(2);
orderShoes(1);


// calculator ka add() function

function add(a,b) {
  return a%b;
  
}
let ank = add(5,3);
console.log("Result is ", ank);



// real life pizza price return

function getPizzaPrice(slices) {
  return slices *50; //har 50; // each slice costs 50   

}
let price = getPizzaPrice(2); // 
console.log ("Total price: rate " + price)



function getLadooPrice(laddoo) {
  return laddoo *10 // each laddoo costs 10
}
let rate = getLadooPrice(5);
console.log("Total price: rate " + rate);




function generateBill() {
  // phela 1 ye h ki quantity le na h input feilds se
  let samosaQty = parseInt(document.getElementById("samosaQty").value) || 0;
  let chaiQty = parseInt(document.getElementById("chaiQty").value) || 0;
  let ladduQty = parseInt(document.getElementById("ladduQty").value) || 0;
  let pohaQty = parseInt(document.getElementById("pohaQty").value) || 0;
  let parathaQty = parseInt(document.getElementById("parathaQty").value) || 0;
  let pastaQty = parseInt(document.getElementById("pastaQty").value) || 0;
  let maggieQty = parseInt(document.getElementById("maggieQty").value) || 0;
  let cholebhatureQty = parseInt(document.getElementById("cholebhatureQty").value) || 0;
  let lassiiQty = parseInt(document.getElementById("lassiiQty").value) || 0;



// dusra step price fix hai item ka

  let samosaPrice = 10;
  let chaiPrice = 5;
  let ladduPrice = 7;
  let pohaPrice = 99;
  let parathaPrice = 39;
  let pastaPrice = 99;
  let maggiPrice = 24;
  let cholebhaturePrice = 70;
  let lassiiPrice = 28;


// step 3 individual items ka total

let samosaTotal = samosaQty * samosaPrice;
  let chaiTotal = chaiQty * chaiPrice;
  let ladduTotal = ladduQty * ladduPrice;
  let pohaTotal = pohaQty * pohaPrice;
  let parathaTotal = parathaQty * parathaPrice;
  let pastaTotal = pastaQty * pastaPrice;
  let maggiTotal = maggieQty * maggiPrice;
  let cholebhatureTotal = cholebhatureQty * cholebhaturePrice;
  let lassiiTotal = lassiiQty * lassiiPrice;
// step 4 sab ka total

let total = samosaTotal + chaiTotal + ladduTotal + pohaTotal + parathaTotal + pastaTotal + maggiTotal + cholebhatureTotal + lassiiTotal;

// step 5 show reuslts

document.getElementById("totalBill").innerText = "Total: ₹" + total;
}