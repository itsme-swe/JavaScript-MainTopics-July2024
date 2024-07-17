/**
 *  What are "First Class Function" ?
 *  First class function are the function to whom we can pass function as arguments or as value when we invoke any other function. 
 */

const para = function(para1) {
    para1();
    
}

function print(){
    console.log("I am First Class function which is passed as argument");
    
}

para(print);