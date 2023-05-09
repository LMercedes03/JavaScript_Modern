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

//Ex 2
const minNumber = (array) => {
    let min = array[0];

    for (let i = 1; i < array.length; i++){
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;
};

//Use case for ex2
const array = [12, 55, 2, 22, 11];
console.log(minNumber(array));


// const ex3 = () => {
//     // TODO...
// }

// //
// // Your functions here...
// //

// const countNumbers = (array) => {
//     let retval = 0;
//     // TODO...
//     return retval;
// }

// const main = async () => {
//     ex1();
// }

// main();
