//Problem 1:

let fruits = ['apple', 'banana', 'orange'];

fruits.push("kiwi", "grape");
console.log(fruits);

fruits.pop();
console.log(fruits);



let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers);

let doubled = numbers.map(num => num * 2);
console.log(doubled)

let even = numbers.filter(number => !(number % 2));
console.log(even)

sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum)




//Problem 2:
let message = "Hello, World!";

console.log("The length of the message: ", message.length) 
console.log(message.toUpperCase())
console.log(message.toLowerCase())



let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.substring(0, 10))
console.log(sentence.split(" "))




