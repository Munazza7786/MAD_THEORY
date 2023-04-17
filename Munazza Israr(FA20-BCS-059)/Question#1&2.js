All functions of string with example?
1.	charAt() - returns the character at a specified index in a string.
Example:
const str = "Hello, world!";
console.log(str.charAt(1)); // Output: "e"
2.	concat() - joins two or more strings together.
Example:
const str1 = "Hello";
const str2 = "world";
console.log(str1.concat(", ", str2)); // Output: "Hello, world"
3.	indexOf() - returns the index of the first occurrence of a specified substring in a string.
Example:
const str = "Hello, world!";
console.log(str.indexOf("world")); // Output: 7
4.	lastIndexOf() - returns the index of the last occurrence of a specified substring in a string.
Example:
const str = "Hello, world!";
console.log(str.lastIndexOf("o")); // Output: 8
5.	replace() - replaces a specified substring with another substring in a string.
Example:
const str = "Hello, world!";
console.log(str.replace("world", "everyone")); // Output: "Hello, everyone!"
6.	slice() - extracts a part of a string and returns the extracted part.
Example:
const str = "Hello, world!";
console.log(str.slice(0, 5)); // Output: "Hello"
7.	split() - splits a string into an array of substrings.
Example:
const str = "Hello, world!";
console.log(str.split(" ")); // Output: ["Hello,", "world!"]
8.	toLowerCase() - converts a string to lowercase.
Example:
const str = "Hello, world!";
console.log(str.toLowerCase()); // Output: "hello, world!"
9.	toUpperCase() - converts a string to uppercase.
Example:
const str = "Hello, world!";
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
10.	trim() - removes whitespace from both ends of a string.
Example:
const str = "   Hello, world!   ";
console.log(str.trim()); // Output: "Hello, world!"
Array functions with example:
concat() - joins two or more arrays together.
Example:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
filter() - creates a new array with all elements that pass the test implemented by the provided function.
Example:
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter(item => item % 2 === 0);
console.log(filteredArr); // Output: [2, 4]
forEach() - executes a provided function once for each array element.
Example:
const arr = [1, 2, 3];
arr.forEach(item => console.log(item)); // Output: 1 2 3
indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
Example:
const arr = [1, 2, 3];
console.log(arr.indexOf(2)); // Output: 1
join() - creates and returns a new string by concatenating all elements in the array, separated by a specified separator string.
Example:
const arr = [1, 2, 3];
console.log(arr.join("-")); // Output: "1-2-3"
map() - creates a new array with the results of calling a provided function on every element in the array.
Example:
const arr = [1, 2, 3]; 
const mappedArr = arr.map(item => item * 2); 
console.log(mappedArr); // Output: [2, 4, 6] 
pop() - removes the last element from an array and returns that element.
Example:
const arr = [1, 2, 3]; 
const poppedElement = arr.pop();
console.log(arr); // Output: [1, 2] 
console.log(poppedElement); // Output: 3 
push() - adds one or more elements to the end of an array and returns the new length of the array.
Example:
const arr = [1, 2, 3];
const newLength = arr.push(4, 5); 
console.log(arr); // Output: [1, 2, 3, 4, 5] 
console.log(newLength); // Output: 5 
shift() - removes the first element from an array and returns that element.
Example:
const arr = [1, 2, 3]; 
const shiftedElement = arr.shift(); 
console.log(arr); // Output: [2, 3]
console.log(shiftedElement); // Output: 1 
slice() - returns a new array containing a portion of the original array, starting from the specified start index and ending at the specified end index.
Example:
const arr = [1, 2, 3, 4, 5]; 
const slicedArr = arr.slice(1, 4); 
console.log(slicedArr); // Output: [2, 3, 4] 
sort() - sorts the elements of an array in place and returns the sorted array.
Example:
const arr = [3, 1, 4, 2, 5];
arr.sort();
console.log(arr); // Output: [1, 2, 3, 4, 5]





