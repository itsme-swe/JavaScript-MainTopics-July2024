/*
 * 🚀 What is Callback Hell ?

 *    Callback hell is nothing special it is just one callback function inside the another callback functions. And, it is also know as "Pyramid of DOOM".
 * 
 * 🚀 Inversion of Control : Losing the control on our code because we pass our code inside another function.
 */

const cart = ["Shoes", "Clothes", "Mobile"];

api.createOrder(cart, function() {

    api.proceedToPayment();
    
})