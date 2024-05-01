export default [
  {
    question: "What will the following code output?",
    codeSnippet: `console.log('1' + 2 + 3);`,
    options: ["'123'", "'6'", "undefined", "An error"],
    correctAnswer: "'123'",
    explanation:
      "In JavaScript, the '+' operator concatenates strings with numbers as strings, resulting in '123'.",
  },
  {
    question:
      "What does the following function return when called with `null`?",
    codeSnippet: `function checkType(value) {
  return typeof value;
}

checkType(null);`,
    options: ["'null'", "'object'", "'undefined'", "'string'"],
    correctAnswer: "'object'",
    explanation:
      "In JavaScript, 'typeof null' is historically a bug and returns 'object'.",
  },
  {
    question: "What is the value of 'foo' after this code runs?",
    codeSnippet: `var foo = 10;
foo += '5';`,
    options: ["15", "'105'", "'155'", "Error"],
    correctAnswer: "'105'",
    explanation:
      "The '+=' operator concatenates the number with a string, converting the number to a string first.",
  },
  {
    question: "Identify the output of the following code:",
    codeSnippet: `var x = 1;
function add() {
  x++;
}
add();
console.log(x);`,
    options: ["1", "2", "undefined", "NaN"],
    correctAnswer: "2",
    explanation:
      "The function 'add()' increments 'x' by 1, so the output will be 2.",
  },
  {
    question: "What does the following JavaScript code return?",
    codeSnippet: `Array.isArray([1, 2, 3]);`,
    options: ["true", "false", "'array'", "'object'"],
    correctAnswer: "true",
    explanation:
      "`Array.isArray()` checks if the passed value is an array, and returns 'true' for [1, 2, 3].",
  },

  {
    question: "What will this JavaScript code output to the console?",
    codeSnippet: `for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}`,
    options: [
      "0, 1, 2, 3, 4",
      "5, 5, 5, 5, 5",
      "undefined, undefined, undefined, undefined, undefined",
      "An error occurs",
    ],
    correctAnswer: "5, 5, 5, 5, 5",
    explanation:
      "Due to the nature of var and closures in loops, the logged value is the last value 'i' takes, which is 5 for all iterations.",
  },
  {
    question: "Examine the code snippet. What will it display in the console?",
    codeSnippet: `let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);`,
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 3, 4, 4]", "undefined"],
    correctAnswer: "[1, 2, 3, 4]",
    explanation:
      "Since 'b' is a reference to 'a', any modification to 'b' also modifies 'a'. Adding 4 to 'b' adds it to 'a'.",
  },
  {
    question: "What does the following code output?",
    codeSnippet: `console.log(typeof undefined === typeof jayant);`,
    options: ["true", "false", "ReferenceError", "undefined"],
    correctAnswer: "true",
    explanation:
      "The 'typeof' operator returns 'undefined' for both an explicitly undefined value and an undeclared variable. Since 'jayant' is not declared, 'typeof jayant' safely returns 'undefined', and the comparison 'typeof undefined === typeof jayant' evaluates to true.",
  },

  {
    question: "What will the following variable declarations result in?",
    codeSnippet: `let apple = 'fruit';
var apple = 'red';`,
    options: ["SyntaxError", "TypeError", "'red'", "No error"],
    correctAnswer: "SyntaxError",
    explanation:
      "Declaring a variable with `let` and then trying to redeclare it within the same scope using `var` or `let` again leads to a SyntaxError. JavaScript does not allow redeclaring a variable with `let` or `const` that has already been declared in the same scope.",
  },
  {
    question: "What will this code print?",
    codeSnippet: `const fruits = ['apple', 'banana'];
fruits.push('mango');
console.log(fruits);`,
    options: [
      "['apple', 'banana']",
      "['apple', 'banana', 'mango']",
      "TypeError",
      "ReferenceError",
    ],
    correctAnswer: "['apple', 'banana', 'mango']",
    explanation:
      "The code correctly appends 'mango' to the `fruits` array and prints `['apple', 'banana', 'mango']`. This is because the `const` declaration in JavaScript prevents reassignment of the variable `fruits` to a new value, but it does not prevent modification of the object (in this case, an array) that `fruits` references.",
  },
  {
    question: "What does the following code snippet output?",
    codeSnippet: `console.log(true + false);`,
    options: ["1", "0", "true", "undefined"],
    correctAnswer: "1",
    explanation:
      "In JavaScript, the boolean values `true` and `false` are coerced into numbers when used with arithmetic operators. Here, `true` is coerced to `1` and `false` to `0`. Therefore, `true + false` results in `1`.",
  },
  {
    question: "What will happen when this code is executed?",
    codeSnippet: `console.log('5' + 3);`,
    options: ["'53'", "8", "TypeError", "undefined"],
    correctAnswer: "'53'",
    explanation:
      "In JavaScript, using the `+` operator with a string and a number results in concatenation, not arithmetic addition. The number `3` is coerced into a string, resulting in the string `'53'`.",
  },
  {
    question: "What output does this code generate?",
    codeSnippet: `console.log('5' - 3);`,
    options: ["2", "'2'", "TypeError", "NaN"],
    correctAnswer: "2",
    explanation:
      "Unlike the `+` operator, the `-` operator does not concatenate strings. It coerces string operands into numbers if possible. Here, `'5'` is coerced to `5`, and `5 - 3` results in `2`.",
  },
  {
    question: "What does this code return?",
    codeSnippet: `console.log(typeof null);`,
    options: ["'null'", "'object'", "'undefined'", "TypeError"],
    correctAnswer: "'object'",
    explanation:
      "In JavaScript, `typeof null` is a historical bug that returns `'object'`. This is a well-known issue in ECMAScript, the standard on which JavaScript is based.",
  },
  {
    question: "What does the following function call show?",
    codeSnippet: `function sayHello() {
  console.log(arguments[0]);
}
sayHello('Hello', 'World');`,
    options: ["'Hello'", "'World'", "'Hello World'", "undefined"],
    correctAnswer: "'Hello'",
    explanation:
      "The `arguments` object is an array-like object accessible inside functions that contains the values of the arguments passed to that function. `arguments[0]` refers to the first argument, which is `'Hello'` in this case.",
  },
  {
    question: "What will this JavaScript code output?",
    codeSnippet: `let x = 1;
const y = 2;
{
  let x = 3;
  const y = 4;
  console.log(x, y);
}
console.log(x, y);`,
    options: ["3, 4, 1, 2", "1, 2, 3, 4", "3, 4, 3, 4", "1, 2, 1, 2"],
    correctAnswer: "3, 4, 1, 2",
    explanation:
      "Within the block, `let` and `const` declare variables locally, shadowing the outer `x` and `y`. Inside the block, `x` and `y` are `3` and `4`. Outside the block, the original `x` and `y` are still `1` and `2`.",
  },
  {
    question: "What is the output of this ES6 feature code?",
    codeSnippet: `const [a, b] = [1, 2, 3];
console.log(a, b);`,
    options: ["1, 2", "1, 2, 3", "[1, 2]", "undefined"],
    correctAnswer: "1, 2",
    explanation:
      "This code snippet uses array destructuring to assign the first two elements of the array `[1, 2, 3]` to variables `a` and `b`. The variables `a` and `b` get the values `1` and `2`, respectively.",
  },
  {
    question: "What will the following code output?",
    codeSnippet: `console.log(typeof (() => {}));`,
    options: ["'object'", "'undefined'", "'function'", "'string'"],
    correctAnswer: "'function'",
    explanation:
      "The output of this code will be 'function'. In JavaScript, arrow functions are still functions, and the `typeof` operator returns 'function' for any function, including arrow functions.",
  },
  {
    question: "What is the result of the following code snippet?",
    codeSnippet: `let x = { y: 1 };
let z = x;
z.y = 2;
console.log(x.y);`,
    options: ["1", "2", "undefined", "null"],
    correctAnswer: "2",
    explanation:
      "The variable `z` is assigned a reference to the object `x`. Any modification to `z` directly affects `x` because they both point to the same object. Therefore, changing `z.y` to `2` also changes `x.y` to `2`.",
  },
  {
    question:
      "Which of the following statements about JavaScript arrays is true?",
    codeSnippet: null,
    options: [
      "JavaScript arrays can only store values of the same type.",
      "JavaScript arrays are immutable.",
      "JavaScript arrays are objects and can have properties added to them.",
      "JavaScript arrays have a fixed size that must be specified at creation.",
    ],
    correctAnswer:
      "JavaScript arrays are objects and can have properties added to them.",
    explanation:
      "JavaScript arrays are a type of object, which means they can store properties and values of any type. Unlike some other languages, JavaScript arrays are not restricted to one data type, are mutable, and do not have a fixed size at creation.",
  },
  {
    question: "What does the following ES6 code output?",
    codeSnippet: `const func = (x = 1, y = 2) => x + y;
console.log(func(undefined, 5));`,
    options: ["1", "3", "5", "7"],
    correctAnswer: "6",
    explanation:
      "This code snippet uses ES6 default parameters. The function `func` is called with `undefined` for `x` and `5` for `y`. Since `x` is `undefined`, it falls back to the default value of `1`, and `1 + 5` equals `6`.",
  },
  {
    question:
      "Which statement about template literals in JavaScript is correct?",
    codeSnippet: null,
    options: [
      "Template literals can only contain placeholders and cannot include regular text.",
      "Template literals do not allow embedded expressions.",
      "Template literals are delimited by single quotes (' ').",
      "Template literals can contain placeholders for embedding expressions, enclosed by `${}`.",
    ],
    correctAnswer:
      "Template literals can contain placeholders for embedding expressions, enclosed by `${}`.",
    explanation:
      "Template literals are enclosed by backticks (` `) and can include both regular text and embedded expressions. These expressions are placed within placeholders, denoted by `${}`. This allows for more dynamic and flexible strings.",
  },
  {
    question: "What will this JavaScript code output?",
    codeSnippet: `console.log(NaN === NaN);`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "false",
    explanation:
      "JavaScript specifies that `NaN` (Not-a-Number) compared to anything, including itself, is false. This is because `NaN` is unique in that it is not equal to any value, including another `NaN`.",
  },
  {
    question:
      "What is the output of the following code involving JavaScript's automatic type coercion?",
    codeSnippet: `console.log('2' * '3');`,
    options: ["'23'", "'6'", "6", "undefined"],
    correctAnswer: "6",
    explanation:
      "In this scenario, JavaScript converts the string operands to numbers when a multiplication operation is used. Thus, '2' and '3' are converted to 2 and 3, respectively, and the result is 6.",
  },
  {
    question: "What happens when the following code is executed?",
    codeSnippet: `console.log('Hello'.repeat(-1));`,
    options: ["'Hello'", "''", "RangeError", "undefined"],
    correctAnswer: "RangeError",
    explanation:
      "The `repeat()` method in JavaScript creates a new string consisting of a specified number of copies of the string on which it is called. Calling `repeat()` with a negative number throws a RangeError, as repeating a string a negative number of times is not allowed.",
  },
  {
    question: "What does this code output?",
    codeSnippet: `console.log(!!'false' == !!'true');`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "true",
    explanation:
      "Both 'false' and 'true' are non-empty strings and are truthy values. The double negation '!!' converts a value to a boolean. Since both are truthy, !!'false' and !!'true' both convert to true.",
  },
  {
    question: "What will the following code return?",
    codeSnippet: `console.log(0.1 + 0.2 == 0.3);`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "false",
    explanation:
      "Due to floating point errors in JavaScript, 0.1 + 0.2 does not precisely equal 0.3. The result is close to 0.3 but not exactly, due to how numbers are encoded in JavaScript.",
  },
  {
    question: "What does the following code snippet log?",
    codeSnippet: `let obj = { a: 1 };
let copy = obj;
obj.a = 2;
console.log(copy.a);`,
    options: ["1", "2", "undefined", "ReferenceError"],
    correctAnswer: "2",
    explanation:
      "Objects in JavaScript are assigned by reference. Thus, when `obj` is modified, `copy` also reflects those changes because both variables point to the same object.",
  },
  {
    question: "What does the following function output?",
    codeSnippet: `function checkType() { console.log(typeof this); }
checkType();`,
    options: ["'object'", "'undefined'", "'function'", "'window'"],
    correctAnswer: "'window'",
    explanation:
      "When a function is called in the global scope, `this` refers to the global object. In a browser, the global object is `window`, so 'window' is logged.",
  },
  {
    question: "What is the result of this expression?",
    codeSnippet: `let x = [1, 2, 3] + [4, 5, 6];
console.log(x);`,
    options: ["'1,2,34,5,6'", "[1, 2, 3, 4, 5, 6]", "TypeError", "NaN"],
    correctAnswer: "'1,2,34,5,6'",
    explanation:
      "Adding arrays in JavaScript does not concatenate their elements. Instead, both arrays are converted to strings and then concatenated, resulting in the unexpected string '1,2,34,5,6'.",
  },

  {
    question: "What will the following code output?",
    codeSnippet: `console.log('one');
setTimeout(function() { console.log('two'); }, 0);
console.log('three');`,
    options: [
      "'one', 'two', 'three'",
      "'one', 'three', 'two'",
      "'two', 'one', 'three'",
      "TypeError",
    ],
    correctAnswer: "'one', 'three', 'two'",
    explanation:
      "Even though `setTimeout` is set with a delay of 0 milliseconds, it places the callback in the event queue, which will only be executed after the current script finishes running. Hence, 'two' is logged after 'three'.",
  },
  {
    question: "What is the output of this expression?",
    codeSnippet: `let x = '10';
let y = '9';
console.log(x < y);`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "true",
    explanation:
      "In JavaScript, the comparison of strings is done lexicographically (like dictionary order). '10' is considered less than '9' because '1' is less than '9' when compared character by character.",
  },
  {
    question:
      "What does the `Array.prototype.slice()` method do in JavaScript?",
    codeSnippet: `const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.slice(1, 3));`,
    options: [
      "['apple', 'banana']",
      "['banana', 'cherry']",
      "['banana', 'cherry', 'apple']",
      "['cherry', 'apple']",
    ],
    correctAnswer: "['banana', 'cherry']",
    explanation:
      "The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). Here, it extracts elements from index 1 to 3, resulting in a new array containing ['banana', 'cherry'].",
  },
  {
    question:
      "How do you add an event listener in JavaScript that reacts to multiple events on a single element?",
    codeSnippet: `const btn = document.querySelector('button');
btn.addEventListener('click touchstart', function() {
    console.log('Button was clicked or touched');
});`,
    options: [
      "This code works as intended.",
      "This code will throw a syntax error.",
      "This code will only work for 'click' events.",
      "This code will not work; you must attach separate event listeners for each event.",
    ],
    correctAnswer:
      "This code will not work; you must attach separate event listeners for each event.",
    explanation:
      "In JavaScript, you cannot pass multiple events to `addEventListener` using a space-separated string. You need to attach each event listener separately for 'click' and 'touchstart' events.",
  },
  {
    question: "What will the following code output?",
    codeSnippet: `console.log(typeof new Date());`,
    options: ["'object'", "'date'", "'string'", "'undefined'"],
    correctAnswer: "'object'",
    explanation:
      "The `typeof` operator returns 'object' for built-in objects like `Date`. Although a `Date` object represents dates, the typeof a new `Date()` instance is 'object'.",
  },
  {
    question: "What does the `String.prototype.trim()` method do?",
    codeSnippet: `console.log('   Hello World   '.trim());`,
    options: [
      "'Hello World'",
      "'   Hello World'",
      "'Hello World   '",
      "Removes all spaces in the string",
    ],
    correctAnswer: "'Hello World'",
    explanation:
      "The `trim()` method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and does not remove any spaces between characters.",
  },
  {
    question: "What is the purpose of the `Array.prototype.map()` method?",
    codeSnippet: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
    options: [
      "It modifies each element of the original array based on the function passed.",
      "It creates a new array with the results of calling a provided function on every element in the array.",
      "It returns the first element that satisfies the provided testing function.",
      "It checks if any elements in the array pass a test provided by a function.",
    ],
    correctAnswer:
      "It creates a new array with the results of calling a provided function on every element in the array.",
    explanation:
      "The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array but returns a new array.",
  },
  {
    question: "How do you correctly clone an array in JavaScript?",
    codeSnippet: `const original = [1, 2, 3];
const clone = original.slice();`,
    options: [
      "This code correctly clones the array.",
      "This code will throw a TypeError.",
      "This code results in a reference copy, not a clone.",
      "None of the above",
    ],
    correctAnswer: "This code correctly clones the array.",
    explanation:
      "Using `slice()` without arguments copies all elements from the original array into a new array, effectively cloning it. The new array is a shallow copy.",
  },
  {
    question: "What does the following code output?",
    codeSnippet: `document.querySelector('p').addEventListener('click', function() {
    console.log('Paragraph clicked!');
});
document.querySelector('p').click();`,
    options: [
      "It logs 'Paragraph clicked!' to the console.",
      "It does nothing unless there is a paragraph element in the HTML.",
      "It will throw an error if no paragraph element exists.",
      "It will always throw an error.",
    ],
    correctAnswer: "It logs 'Paragraph clicked!' to the console.",
    explanation:
      "Assuming a paragraph element (`<p>`) exists in the document, this code sets up an event listener that logs 'Paragraph clicked!' to the console when the paragraph is clicked. The `click()` method programmatically triggers the click event.",
  },
  {
    question: "What does the `parseInt` function do?",
    codeSnippet: `console.log(parseInt('123px'));`,
    options: [
      "Converts a string to an integer.",
      "Converts a string to a floating-point number.",
      "Prints the string without changes.",
      "Throws an error.",
    ],
    correctAnswer: "Converts a string to an integer.",
    explanation:
      "The `parseInt` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). For '123px', it stops parsing at the first non-integer character and returns 123.",
  },
  {
    question: "What will happen when this code is executed?",
    codeSnippet: `const data = { a: 1, b: 2 };
Object.freeze(data);
data.a = 3;
console.log(data.a);`,
    options: ["1", "3", "TypeError", "undefined"],
    correctAnswer: "1",
    explanation:
      "The `Object.freeze()` method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, and prevents changing the enumerability, configurability, or writability of existing properties. It also prevents the values of existing properties from being changed. Therefore, `data.a` remains 1.",
  },
  {
    question: "What does the `Array.prototype.filter()` method do?",
    codeSnippet: `const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0);
console.log(even);`,
    options: [
      "Creates a new array with all elements that pass the test implemented by the provided function.",
      "Updates the original array by removing elements that do not pass the test.",
      "Returns the first element that passes the test.",
      "None of the above",
    ],
    correctAnswer:
      "Creates a new array with all elements that pass the test implemented by the provided function.",
    explanation:
      "The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.",
  },
  {
    question: "What will this code output?",
    codeSnippet: `const promise = Promise.resolve(123);
promise.then((value) => console.log(value));
`,
    options: ["123", "undefined", "TypeError", "null"],
    correctAnswer: "123",
    explanation:
      "The `Promise.resolve()` method returns a Promise object that is resolved with the given value, 123 in this case. The `then()` method is used for handling a promise's success value, so it logs '123'.",
  },
  {
    question: "What does the following code do?",
    codeSnippet: `document.getElementById('myButton').addEventListener('dblclick', function() {
    console.log('Button was double-clicked.');
});
`,
    options: [
      "Logs a message when the button is clicked once.",
      "Logs a message when the button is double-clicked.",
      "Throws an error if 'myButton' does not exist.",
      "None of the above.",
    ],
    correctAnswer: "Logs a message when the button is double-clicked.",
    explanation:
      "This code adds an event listener to the button with ID 'myButton' that triggers on 'dblclick' events, logging 'Button was double-clicked.' when the button is double-clicked.",
  },
  {
    question: "What is the output of the following code?",
    codeSnippet: `console.log(typeof (() => {}));`,
    options: ["'function'", "'object'", "'undefined'", "'string'"],
    correctAnswer: "'function'",
    explanation:
      "The output of this code is 'function'. In JavaScript, arrow functions are still functions, and the `typeof` operator returns 'function' for any function, including arrow functions.",
  },
  {
    question: "What is the result of the following code snippet?",
    codeSnippet: `console.log('10' * '2');`,
    options: ["20", "'20'", "NaN", "TypeError"],
    correctAnswer: "20",
    explanation:
      "When you multiply two strings containing numeric values, JavaScript coerces the string values to numbers and performs the multiplication operation, resulting in 20.",
  },
  {
    question: "What will the following code output?",
    codeSnippet: `console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
`,
    options: ["true, true", "true, false", "false, true", "false, false"],
    correctAnswer: "true, false",
    explanation:
      "The first comparison `1 < 2 < 3` evaluates to `true < 3`, which is `true` because `true` is coerced to `1`. The second comparison `3 > 2 > 1` evaluates to `true > 1`, which is `false` because `true` is coerced to `1` and `1` is not greater than `1`.",
  },
  {
    question: "What will the following JavaScript code output?",
    codeSnippet: `console.log(typeof NaN);`,
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correctAnswer: "'number'",
    explanation:
      "In JavaScript, `NaN` stands for 'Not-a-Number', but ironically, its type is considered 'number'. This is a particularity of JavaScript's type system.",
  },
  {
    question: "How do you convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse(jsonString)",
      "JSON.stringify(jsonString)",
      "JSON.toObject(jsonString)",
      "JSON.convert(jsonString)",
    ],
    correctAnswer: "JSON.parse(jsonString)",
    explanation:
      "The `JSON.parse()` method is used to parse a JSON string, constructing the JavaScript value or object described by the string. It's the correct and standard method for converting a JSON string into a JavaScript object. The `JSON.stringify()` method is used for converting a JavaScript object into a JSON string, which is the opposite of what is being asked. The methods `JSON.toObject()` and `JSON.convert()` do not exist in JavaScript.",
  },
  {
    question: "What method is used to add an element to the end of an array?",
    options: [
      "Array.push(element)",
      "Array.pop(element)",
      "Array.unshift(element)",
      "Array.shift(element)",
    ],
    correctAnswer: "Array.push(element)",
    explanation:
      "The `Array.push()` method is used to add one or more elements to the end of an array and returns the new length of the array. This method modifies the original array.",
  },
  {
    question:
      "Which method removes the last element from an array and returns that element?",
    options: ["Array.pop()", "Array.push()", "Array.shift()", "Array.remove()"],
    correctAnswer: "Array.pop()",
    explanation:
      "The `Array.pop()` method removes the last element from an array and returns that element. This method changes the length of the array.",
  },
  {
    question: "How can you copy an array in JavaScript?",
    options: [
      "Array.copy()",
      "Array.slice()",
      "Array.splice()",
      "Array.clone()",
    ],
    correctAnswer: "Array.slice()",
    explanation:
      "The `Array.slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.",
  },
  {
    question:
      "Which method checks if at least one element in the array passes the test implemented by the provided function?",
    options: [
      "Array.some()",
      "Array.every()",
      "Array.forEach()",
      "Array.find()",
    ],
    correctAnswer: "Array.some()",
    explanation:
      "The `Array.some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.",
  },
  {
    question:
      "What method is used to sort the elements of an array in place and return the array?",
    options: [
      "Array.sort()",
      "Array.order()",
      "Array.organize()",
      "Array.set()",
    ],
    correctAnswer: "Array.sort()",
    explanation:
      "The `Array.sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.",
  },
  {
    question: "How do you round a number to the nearest integer in JavaScript?",
    options: [
      "Math.round(number)",
      "Math.floor(number)",
      "Math.ceil(number)",
      "Math.absolute(number)",
    ],
    correctAnswer: "Math.round(number)",
    explanation:
      "The `Math.round()` method rounds a number to the nearest integer. If the fractional part of the number is .5 or greater, the argument is rounded to the next higher integer.",
  },
  {
    question:
      "Which method converts a JavaScript object or value to a JSON string?",
    options: [
      "JSON.stringify(value)",
      "JSON.parse(value)",
      "JSON.toObject(value)",
      "JSON.fromString(value)",
    ],
    correctAnswer: "JSON.stringify(value)",
    explanation:
      "The `JSON.stringify()` method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.",
  },
  {
    question:
      "Which method returns the calling string value converted to lower case?",
    options: [
      "String.toLowerCase()",
      "String.toUpperCase()",
      "String.smallCase()",
      "String.lowerCase()",
    ],
    correctAnswer: "String.toLowerCase()",
    explanation:
      "The `String.toLowerCase()` method returns the calling string value converted to lower case, which is useful for making JavaScript case-insensitive comparisons.",
  },

  {
    question: "How do you create a new Date object in JavaScript?",
    options: ["new Date()", "Date.now()", "Date.get()", "Date.new()"],
    correctAnswer: "new Date()",
    explanation:
      "The `new Date()` constructor creates a new Date object that represents a single moment in time. `Date.now()` is a method that returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, but does not create a Date object.",
  },
  {
    question: "What will the following code output?",
    codeSnippet: `console.log(2 + '2');`,
    options: ["'22'", "4", "TypeError", "'4'"],
    correctAnswer: "'22'",
    explanation:
      "In JavaScript, when a number is concatenated with a string using the '+' operator, the number is converted to a string and the result is a string concatenation, hence '22'.",
  },
  {
    question:
      "How can you permanently remove an event listener from an element?",
    codeSnippet: `const button = document.querySelector('button');
button.addEventListener('click', function handleClick() {
  console.log('Button clicked');
});

`,
    options: [
      "button.deleteEventListener('click', handleClick)",
      "button.removeEventListener('click', handleClick)",
      "button.detachEventListener('click', handleClick)",
      "button.removeListener('click', handleClick)",
    ],
    correctAnswer: "button.removeEventListener('click', handleClick)",
    explanation:
      "The correct method to remove an event listener is `removeEventListener`. It requires the same event type and listener reference used in `addEventListener`.",
  },
  {
    question: "What is the use of the `Array.prototype.reduce()` method?",
    options: [
      "To loop through the array and execute a function on each item",
      "To add items to the beginning of the array",
      "To reduce the array into a single value using a reducer function",
      "To filter out items based on a condition",
    ],
    correctAnswer:
      "To reduce the array into a single value using a reducer function",
    explanation:
      "`Array.prototype.reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
  },
  {
    question:
      "How do you declare a constant in JavaScript that cannot be reassigned?",
    options: ["let x = 5;", "const x = 5;", "var x = 5;", "x = 5;"],
    correctAnswer: "const x = 5;",
    explanation:
      "The `const` declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.",
  },
  {
  question: "Which statement about JavaScript's `null` and `undefined` is true?",
  options: [
    "`null` and `undefined` are the same.",
    "`null` is an object, and `undefined` is a type of 'undefined'.",
    "`null` represents no value, and `undefined` represents a variable that has been declared but not assigned a value.",
    "Both `null` and `undefined` are types of exceptions.",
  ],
  correctAnswer: "`null` represents no value, and `undefined` represents a variable that has been declared but not assigned a value.",
  explanation: "`null` is a primitive value used to represent the absence of any value or object, while `undefined` indicates that a variable has been declared but not yet assigned a value."
},

  {
    question: "What will this code output?",
    codeSnippet: `function checkEquality(a, b) {
  return a === b;
}
console.log(checkEquality(1, '1'));`,
    options: ["true", "false", "TypeError", "SyntaxError"],
    correctAnswer: "false",
    explanation:
      "The `===` operator checks for value and type equality. Since 1 is a number and '1' is a string, the function returns false.",
  },
  {
    question: "How do you create a new promise in JavaScript?",
    options: [
      "new Promise()",
      "Promise.new()",
      "Promise.create()",
      "Promise()",
    ],
    correctAnswer: "new Promise()",
    explanation:
      "Promises in JavaScript are created using the `new Promise()` constructor, which takes a function (executor) that is called with two arguments (resolve and reject).",
  },
  {
    question: "What does the `finally()` method of a promise do?",
    options: [
      "It is executed when the promise is resolved or rejected.",
      "It cancels the promise.",
      "It is executed only if the promise is rejected.",
      "It starts a new promise chain.",
    ],
    correctAnswer: "It is executed when the promise is resolved or rejected.",
    explanation:
      "The `finally()` method returns a promise. When the promise is settled, either fulfilled or rejected, the specified callback function in `finally()` is executed. This is useful for running cleanup code.",
  },
  {
    question:
      "Which method is used to stop the propagation of an event in its capturing and bubbling phases?",
    options: [
      "event.stopPropagation()",
      "event.preventDefault()",
      "event.stopImmediatePropagation()",
      "event.pausePropagation()",
    ],
    correctAnswer: "event.stopPropagation()",
    explanation:
      "The `event.stopPropagation()` method prevents further propagation of the current event during capturing and bubbling phases. This stops the event from being propagated further up the DOM tree, preventing any parent handlers from being notified of the event.",
  },
  {
    question: "What does the following code snippet output?",
    codeSnippet: `const a = {}; 
const b = { key: 'b' }; 
const c = { key: 'c' };

a[b] = 123; 
a[c] = 456;

console.log(a[b]);`,
    options: ["123", "456", "TypeError", "undefined"],
    correctAnswer: "456",
    explanation:
      "In JavaScript, objects cannot use other objects as keys directly. Both `b` and `c` are converted to the same string `[object Object]`. Hence, `a[c]` overwrites `a[b]`, and `456` is output.",
  },
  {
    question: "What is the output of the following code?",
    codeSnippet: `console.log(typeof typeof 1);`,
    options: ["'number'", "'string'", "'object'", "'undefined'"],
    correctAnswer: "'string'",
    explanation:
      "The `typeof` operator returns a string indicating the type of the unevaluated operand. Thus, `typeof 1` is 'number', and `typeof 'number'` is 'string'.",
  },
  {
    question: "What will this code print?",
    codeSnippet: `function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}
console.log(foo(), typeof x, typeof y);`,
    options: [
      "1, 'undefined', 'number'",
      "1, 'number', 'number'",
      "1, 'undefined', 'undefined'",
      "SyntaxError",
    ],
    correctAnswer: "1, 'undefined', 'number'",
    explanation:
      "The line `let x = y = 0;` actually sets `y` as a global variable (not declared with `let` or `const`), while `x` is local to the function. After calling `foo()`, `x` is 'undefined' in the global scope, and `y` is a 'number'.",
  },
  {
    question: "What does this code output?",
    codeSnippet: `setTimeout(() => console.log('a'), 0);
Promise.resolve().then(() => console.log('b'));
console.log('c');`,
    options: ["'a', 'b', 'c'", "'b', 'c', 'a'", "'c', 'b', 'a'", "SyntaxError"],
    correctAnswer: "'c', 'b', 'a'",
    explanation:
      "JavaScript Event Loop handles promises (microtasks) before timers (macrotasks). Here, 'c' is logged first because it's directly in the execution flow, then 'b' from the promise, and finally 'a' from the setTimeout.",
  },
  {
    question: "What output results from this snippet?",
    codeSnippet: `function check() {
    return !typeof undefined;
}
console.log(check());`,
    options: ["true", "false", "TypeError", "'undefined'"],
    correctAnswer: "false",
    explanation:
      "`typeof undefined` is 'undefined', and `!typeof undefined` is `!('undefined')`, which evaluates to `false` because the logical NOT of any non-empty string is false.",
  },
  {
    question: "What is logged by the following code?",
    codeSnippet: `const numbers = [1, 2, 3].map(num => {
    if (num % 2 !== 0) {
        return num;
    }
});
console.log(numbers);`,
    options: [
      "[1, 3]",
      "[1, undefined, 3]",
      "[1, 2, 3]",
      "[undefined, 2, undefined]",
    ],
    correctAnswer: "[1, undefined, 3]",
    explanation:
      "The `map` function will execute the provided function for every array element. For elements where `num % 2 !== 0` is false (for `2`), no return value is specified, so `undefined` is returned.",
  },
  {
    question: "Consider the following code. What is the output?",
    codeSnippet: `let num = 8;
const total = num++;
console.log(total);`,
    options: ["8", "9", "TypeError", "undefined"],
    correctAnswer: "8",
    explanation:
      "The postfix increment operator (`num++`) returns the value before incrementing. So, `total` gets the value `8`, and then `num` is incremented to `9`.",
  },
  {
    question: "What does this JavaScript code output?",
    codeSnippet: `function getData() {
    return
    {
        data: 'test'
    };
}
console.log(getData());`,
    options: ["undefined", "{ data: 'test' }", "SyntaxError", "null"],
    correctAnswer: "undefined",
    explanation:
      "Due to JavaScript's automatic semicolon insertion, the return statement is terminated immediately after `return` itself, before the object literal. Thus, `undefined` is returned instead of the object.",
  },
  {
    question: "What is the result of the following operation?",
    codeSnippet: `console.log('1' - - '1');`,
    options: ["2", "'11'", "0", "NaN"],
    correctAnswer: "2",
    explanation:
      "JavaScript interprets the minus sign followed by a negative sign as addition when used between two strings containing numeric values. Therefore, `'1' - - '1'` is evaluated as `1 + 1`.",
  },
  {
    question: "What does this code snippet output?",
    codeSnippet: `const numbers = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(numbers).map(key => numbers[key] * 2);
    console.log(keys);`,
    options: [
      "[2, 4, 6]",
      "['2', '4', '6']",
      "{ a: 2, b: 4, c: 6 }",
      "TypeError",
    ],
    correctAnswer: "[2, 4, 6]",
    explanation:
      "The `Object.keys()` method retrieves an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. The `map()` function then doubles each number, resulting in an array of doubled values.",
  },
  {
    question: "What does the following code snippet output?",
    codeSnippet: `const num = 8;
    const numString = num.toString(2);
    console.log(numString);`,
    options: ["'1000'", "'8'", "8", "TypeError"],
    correctAnswer: "'1000'",
    explanation:
      "The `toString()` method of the number object, when passed the argument `2`, converts the number to a binary string. Thus, `8` becomes `'1000'` in binary.",
  },
  {
    question: "What will be logged by this code?",
    codeSnippet: `console.log(typeof null === 'object', typeof undefined === 'undefined');`,
    options: ["true, true", "false, true", "true, false", "false, false"],
    correctAnswer: "true, true",
    explanation:
      "In JavaScript, `typeof null` returns `'object'`, which is a long-standing bug. `typeof undefined` correctly returns `'undefined'`. Both parts of the comparison evaluate to true.",
  },
  {
    question: "What is the output of the following code?",
    codeSnippet: `const first = () => console.log('first');
    const second = () => console.log('second');
    const third = () => console.log('third');

    first();
    setTimeout(second, 0);
    third();`,
    options: [
      "first, second, third",
      "first, third, second",
      "second, first, third",
      "third, first, second",
    ],
    correctAnswer: "first, third, second",
    explanation:
      "The function `first()` logs 'first' immediately. `setTimeout` schedules `second()` to run after all currently queued events in the event loop, allowing `third()` to log 'third' before `second()` logs 'second'.",
  },
  {
    question: "What does the following JavaScript code output?",
    codeSnippet: `const result = '2' > '12';
    console.log(result);`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "true",
    explanation:
      "When comparing strings, JavaScript compares character codes lexicographically. The character '2' (code 50) is greater than '1' (code 49), hence '2' > '12' returns true.",
  },
  {
    question: "What is the output of the following expression?",
    codeSnippet: `console.log(!!'false' == !!'true');`,
    options: ["true", "false", "TypeError", "ReferenceError"],
    correctAnswer: "true",
    explanation:
      "Both 'false' and 'true' are non-empty strings, which are truthy. The logical NOT operator (`!!`) converts these truthy values to true, making the expression `true == true`, hence it outputs true.",
  },
  {
    question: "What happens when you try to decode a malformed URI component?",
    codeSnippet: `console.log(decodeURIComponent('%'));`,
    options: [
      "Prints '%'",
      "Returns undefined",
      "Throws a URIError",
      "Logs 'null'",
    ],
    correctAnswer: "Throws a URIError",
    explanation:
      "Attempting to decode a malformed URI component, like the '%' character on its own which is incomplete as a percent-encoded entity, results in a `URIError`.",
  },
  {
    question: "What will this code output when executed in a browser console?",
    codeSnippet: `console.log(window === window.window);`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "true",
    explanation:
      "In the context of a browser, the `window` object is a global object representing the window in which the script is running. `window.window` is a self-reference to the `window` itself.",
  },
  {
    question: "What does this code return?",
    codeSnippet: `function checkLength() {
        return Array.from(arguments).filter(arg => typeof arg === 'string').length;
    }
    console.log(checkLength('hello', 'world', 10, true));`,
    options: ["2", "4", "1", "0"],
    correctAnswer: "2",
    explanation:
      "The `checkLength` function converts its `arguments` object into an array and filters out all elements that are strings. There are two strings passed, so it returns 2.",
  },
  {
    question: "What is the result of executing the following code?",
    codeSnippet: `let x = '10';
    let y = '9';
    console.log(x < y);`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "true",
    explanation:
      "When comparing two strings, JavaScript performs a lexicographical comparison. Since '10' (starting with '1') is lexicographically less than '9', the comparison `x < y` results in true.",
  },
  {
    question: "How does JavaScript handle this large integer operation?",
    codeSnippet: `const num = 9999999999999999;
    console.log(num);`,
    options: [
      "9999999999999999",
      "10000000000000000",
      "9999999999999998",
      "TypeError",
    ],
    correctAnswer: "10000000000000000",
    explanation:
      "JavaScript can only safely represent integers up to 2^53 - 1. Numbers larger than this, when printed or processed, may be rounded to the nearest value that can be represented, resulting in precision errors like here.",
  },
];
