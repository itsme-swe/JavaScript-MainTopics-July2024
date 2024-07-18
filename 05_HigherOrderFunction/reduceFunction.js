/**
 * 🚀 What is reduce function ?
 *     Reduce function is used where we need to take all elements of the array and come out with the single value. For e.g. -- sum of array, find the largest element in the array.  
 */

const arr = [2, 4, 6, 8, 10];

//»» Now we'll be finding sum of given array. First with without using reduce function.
function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));      //Output »» 30

//🔸 Now using reduce function to sum all the values inside array
/* The callback function passed inside reduce function takes two paramater first is "accumulator" and the second one is "current". The "current" represent the current value of array and "accumulator" accumulate the values of the array.
*/
const sumOutput = arr.reduce(function(acc,curr) {
    acc = acc + curr;
    return acc;
});

console.log(sumOutput);     //»» 30

//🔸Now we'll be finding maximum number inside the array using reduce function
const maxNumber = arr.reduce((acc, curr) => {
   if(curr > acc)
        acc = curr
    return acc;
},0);    //»» Here 0 stands for initial value of accumulator

console.log("The maximum value is: ", maxNumber);



