let str = "   Hello, this is a JavaScript example for string methods.   ";

// Remove leading and trailing whitespace
str = str.trim();
console.log(str);

// Convert to lowercase
let lowercaseStr = str.toLowerCase();
console.log(lowercaseStr);

// Convert to uppercase
let uppercaseStr = str.toUpperCase();
console.log(uppercaseStr);

// Get the length of the string
let length = str.length;
console.log(length);

// Find the index of a substring
let indexOfExample = str.indexOf("JavaScript");
console.log(indexOfExample);

// Replace a substring
let replacedStr = str.replace("string", "text");
console.log(replacedStr);

// Check if a string includes a substring
let includesString = str.includes("this");
console.log(includesString);

// Split the string into an array
let wordsArray = str.split(" ");
console.log(wordsArray);

// Concatenate strings
let concatenatedStr = str.concat("This is added.");
console.log(concatenatedStr);

