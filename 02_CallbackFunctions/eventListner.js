function attachEventListner(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function abc(){
    console.log("Button clicked", + count++);
    
})
};

attachEventListner();


