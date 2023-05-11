//
// File: main.js
// Date: 5/24/2022
// 

// //EXERCISE 1
// const countNumbers = (array) => {
//     let count = 0;

//     for (let i = 0; i < array.length; i++){
//         if (typeof array[i] == 'number'){ 
//         count++; 
//         }
//     }

//     return count;
// };

//USE CASE FOR EXERCISE 1
// const array = [1, '2', 3, 'test', 1.2];
// console.log(countNumbers(array));


// //EXERCISE 2
// const minNumber = (array) => {
//     let min = array[0];

//     for (let i = 1; i < array.length; i++){
//         if (array[i] < min){
//             min = array[i];
//         }
//     }
//     return min;
// };

// //USE CASE FOR EXERCISE 2
// const array = [12, 55, 2, 22, 11];
// console.log(minNumber(array));


//EXERCISE 3
// const interleave = (array1, array2) => {
//     if (array1.length !== array2.length) {
//       return 'ERROR: Array length mismatch';
//     }
    
//     let result = '';
    
//     for (let i = 0; i < array1.length; i++) {
//       result += array1[i] + array2[i];
//     }
    
//     return result;
//   };

// //USE CASE 1 FOR EXERCISE 3
// const array1 = [1, 2, 3, 4, 5];
// const array2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(interleave(array1, array2));

// //USE CASE 2 FOR EXERCISE 3 (testing mismatch error message)
// const array1 = [1, 2, 5];
// const array2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(interleave(array1, array2));


// //EXERCISE 4
// const palindrome = (str) => {
//     const length = str.length;
   
//     for (let i = 0; i < Math.floor(length / 2); i++) {
      
//         if (str[i] !== str[length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
    
//   };

// //USE CASE FOR EXERCISE 4
// console.log(palindrome('radar'));
// console.log(palindrome('month'));


// //EXERCISE 5
// let str = "today this is a this is a this is a test.";
// let keyword = "this";
// let count = 0;

// const words = str.split(" ");

// for (let i = 0; i < words.length; i++){
//     if (words[i] === keyword){
//         count++;
//     }
// }

// console.log(`${keyword} appears: ${count} times.`);


// //EXERCISE 6
// const longestString = (array) => {
//     let longest = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > longest.length) {
//             longest = array[i];
//         }
//     }
//     return longest;
// };

// //USE CASE FOR EXERCISE 6
// const array = ['this', 'is', 'a', 'test', 'happy'];
// console.log(longestString(array));


// //EXERCISE 7
// //This function subtracts b from a, which results in ascending order. 
// //If the result is negative, a is considered smaller and comes before b 
// //in the sorted array. If the result is positive, a is considered greater 
// //and comes after b. If the result is zero, the order remains unchanged.

// const sort = (array) =>{
//     return array.sort((a, b) => a - b); 
// };

// //Use case for ex 7
// let n = [3, 5, 2, 8, 6, 10];
// console.log(sort(n));


// //EXERCISE 8

// const countWords = (string) => {
//     const words = str.split(" ");
// }