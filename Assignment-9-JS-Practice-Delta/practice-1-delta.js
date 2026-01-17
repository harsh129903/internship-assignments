// ================================
// Q1: Variables and Scope
// ================================
function variableScopeTest() {
    if (true) {
        var a = "I am var (Function Scoped)";
        let b = "I am let (Block Scoped)";
        const c = "I am const (Block Scoped)";
    }
    console.log(a);
    // console.log(b); // Error (block scoped)
    // console.log(c); // Error (block scoped)
}

// ================================
// Q2: Second Fruit from Array
// ================================
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];

function getSecondFruit() {
    return fruits[1];
}

// ================================
// Q3: Push and Pop
// ================================
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}

// ================================
// Q4: Square Numbers using map()
// ================================
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

// ================================
// Q5: Filter Odd Numbers
// ================================
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// ================================
// Q6: Object Greeting
// ================================
const person = {
    name: "Harsh",
    age: 25,
    occupation: "Developer"
};

function logGreeting(p) {
    console.log(
        `Hello, my name is ${p.name}, I am ${p.age} years old and I work as a ${p.occupation}.`
    );
}

// ================================
// Q7: Area of Rectangle
// ================================
function getArea(rect) {
    return rect.width * rect.height;
}

// ================================
// Q8: Object Keys
// ================================
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// ================================
// Q9: Merge Objects
// ================================
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// ================================
// Q10: Sum using reduce()
// ================================
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// ================================
// TEST CALLS (OUTPUT)
// ================================
console.log("Q1:");
variableScopeTest();

console.log("\nQ2:", getSecondFruit());

console.log("\nQ3:", modifyArray([1, 2, 3]));

console.log("\nQ4:", squareNumbers([1, 2, 3, 4]));

console.log("\nQ5:", filterOddNumbers([1, 2, 3, 4, 5, 6]));

console.log("\nQ6:");
logGreeting(person);

console.log("\nQ7:", getArea({ width: 10, height: 5 }));

console.log("\nQ8:", getObjectKeys({ a: 1, b: 2, c: 3 }));

console.log("\nQ9:", mergeObjects({ x: 1 }, { y: 2 }));

console.log("\nQ10:", sumArray([10, 20, 30, 40]));
