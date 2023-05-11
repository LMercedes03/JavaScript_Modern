//
// File: main.js
// Date: 5/24/2022
// 

// //Ex 1
// const countNumbers = (array) => {
//     let count = 0;

//     for (let i = 0; i < array.length; i++){
//         if (typeof array[i] == 'number'){ 
//         count++; 
//         }
//     }

//     return count;
// };

//Use case for ex1
// const array = [1, '2', 3, 'test', 1.2];
// console.log(countNumbers(array));

// //Ex 2
// const minNumber = (array) => {
//     let min = array[0];

//     for (let i = 1; i < array.length; i++){
//         if (array[i] < min){
//             min = array[i];
//         }
//     }
//     return min;
// };

// //Use case for ex2
// const array = [12, 55, 2, 22, 11];
// console.log(minNumber(array));

//Ex 3
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

// //Use case 1 for ex3
// const array1 = [1, 2, 3, 4, 5];
// const array2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(interleave(array1, array2));

// //Use case 2 for ex3 (testing mismatch error message)
// const array1 = [1, 2, 5];
// const array2 = ['a', 'b', 'c', 'd', 'e'];
// console.log(interleave(array1, array2));


//Ex 4
const palindrome = (str) => {
    const length = str.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (str[i] !== str[length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

//Case use for ex4
console.log(palindrome('radar'));
console.log(palindrome('month'));

// //Ex5
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

// //Ex6
// const longestString = (array) => {
//     let longest = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > longest.length) {
//             longest = array[i];
//         }
//     }
//     return longest;
// };

// //Use case for ex6
// const array = ['this', 'is', 'a', 'test', 'happy'];
// console.log(longestString(array));

//Ex7
const sort = (array) =>{
    
}