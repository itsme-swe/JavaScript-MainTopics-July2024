/**
 * Finding area , circumference and diameter of the circle using functional programming
 */
const radius = [3, 1, 2, 4];

//»» Area, Circumference and diameter is callback function which is passed as parameter logic inside calculate function  
const area = function (radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius) {
    return 2 * radius;
};

//»»» Higher Order Function
const calculate = function (radius,logic){
    
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;

};

console.log("Area is: ", calculate(radius,area));

console.log("Circumference is: ", calculate(radius, circumference));

console.log("Diameter is: ", calculate(radius, diameter));


