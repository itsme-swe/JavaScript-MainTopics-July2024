/*
 * 🚀 JS Engine Architecture
 *     
 *JS Engine takes code as input human readable code. And, now this code goes through 3 major steps:
 * 
 *1️⃣ Parsing : During parsing phase the code which we write is broken down into tokens. There is a "Syntax Parser" which takes code and convert into AST(Abstract Syntax Tree).
 *              https://astexplorer.net/ --- Helps to generate AST
 *     ⬇️
 * 
 *2️⃣ Compilation : After parsing we get AST. This AST goes to Interpretor and Interpretor converts our high level code to byte code. And, while this procedure interpreter takes help of 
                   compiler to optimize code. JS Engine has its own JIT(Just in time) compilation.
 * 
 *     ⬇️
 * 
 *3️⃣ Execution : This execution phase is not possible without two major components "Memory Heap" and "Call Stack". Memory Heap is the place where all the vairables and functions
                  assigned memory. The Garbage Collector uses "Mark & Sweep" Algorithm.
 *      
 * 🚀 V8 Engine : It's a google Javascript engine. It has it's own interpretter known as "Ignition". And along with this they have "Turbo Fan" compiler which optimizes the code.
 *  
 */