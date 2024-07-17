/*
 *🚀 What is Higher Order Function ?
      A function which takes another function as an argument or returns a function from it is known as Higher Order Function. 
 */

function x() {
    console.log("Jai Shree Ram !!");
    
}

//🔸Here y() is an higher order function because y is taking x() as an argument and x is an callback function.
function y(x) {
    x();
}

