/**
 *  What is Callback Function ?
 *  Passing one function into another function is known as Callback function.
 */

setTimeout(function(){
    console.log("Timer Ends");
    
}, 3000)

function x(y) {
    console.log("X");
    y();
}

x(function() {
    console.log("Y");
    
});

/*
Output: X
        Y
        Timer Ends
*/