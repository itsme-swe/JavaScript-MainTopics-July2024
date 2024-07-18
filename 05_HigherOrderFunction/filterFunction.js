/**
 * 🚀 What is filter function ?
 *     Filter function is used to filter the values inside the array.     
 */

const arr = [5, 1, 3, 2, 6, 4, 9, 13, 12];

//»» We need to filter out all the odd values from the array so here we are creating "isOdd" function first
function isOdd(x){
    return x % 2;
}

const output = arr.filter(isOdd);

console.log(output);    //Output »»  [ 5, 1, 3, 9, 13 ]

//»» Now we need to filter out all the even values from the array.
const evenValues = arr.filter((x) => x % 2 === 0);      //🔸 We are using arrow function and passing x as parameter which will iterare on each value inside array

console.log(evenValues);    //Output »» [ 2, 6, 4, 12 ]

