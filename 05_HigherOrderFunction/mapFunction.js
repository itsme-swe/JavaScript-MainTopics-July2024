/**
 * 🚀 Map function is basically used to transform an array.
 * 
 * E.g. We have an array and we want to transform this array into double, triple and in binary »»» const arr = [5, 1, 3, 2, 6]  
 * 
 * 🔸So after transforming arr into double means doubling the each value of array »»» const double = [10, 2, 9, 4, 12] ; 
 * 
 * 🔸Triplling the array is »»» const triple = [15, 3, 9, 6, 18];
 * 
 * 🔸const binary = ["101", "1", "10", "110"]; 
 * 
 */

const arr = [2, 4, 6, 8, 1];

//»» Callback function
function double(x) {
    return 2 * x;
}

//◽ So here map function taking function double() as argument and then map is iterating over each value in array. And map function returns an new array which we are storing in output.   
const output = arr.map(double);

console.log(output);        //»»» Output: [ 4, 8, 12, 16, 2 ]
