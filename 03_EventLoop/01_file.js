/**
 * To access all the the features of browser JavaScript needs "Web API's"
 * 
 * ✅ Web API's
 * 1️⃣ setTimeout()
 * 
 * 2️⃣ DOM API()
 * 
 * 3️⃣ fetch()
 * 
 * 4️⃣ Local Storage
 * 
 * 5️⃣ console
 * 
 * 6️⃣ Location
 * 
 * So, browser gives these functionalities to JavaScript to use inside JavaScript Engine. JavaScript can access these features inside Call Stack with the help of keyword "window".
 * Example : window.setTimeout()
 * 
 * 🚀 Event Loop is like a gate keeper for "callback queue" to check whether any callback function is there inside the queue, if it is there then event loop will push the function inside call stack.
 * 
 * 🔶 "Microtask Queue" is similar to "Callback Queue" but it is having higher priority then callback queue. All the callback function which comes through promises will go inside the microtask queue and all the mutation observers will also go inside the queue.
 * 
 * Callback queue is also known as Task Queue.
 * 
 * Starvation of callback queue.
 */


function abc(){
    console.log("Event Loop");
}
