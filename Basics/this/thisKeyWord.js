// this -> 1)Browser Invornment 
//         2)Mode Invornment -> 1)Strict Mode
//                              2)Non-Strict Mode

// this refers to obejct
 
// 1)
// console.log(this);     // windows

// function fn(){
//     console.log(this);    // windows
// }
// fn();

// let obj = {
//     name:"prashil",
//     func:fn,
// }
// obj.func();     // self object 


// 2)
// function fn(){
//     console.log(this);  // self object 
//     function abc(){
//         console.log(this);   // windows
//     }
//     abc();
// }
// let obj = {
//     name:"prashil",
//     func : fn,
// }
// obj.func();


// 3) bind function
// function fn(){
//     console.log(this);    // self object
//     function abc(){
//         console.log(this);   // abc function gets bind with fn and return abc functions object
//     }
//     let ret = abc.bind(this);
//     ret();
// }
// let obj = {
//     name:"prashil",
//     func : fn,
// }
// obj.func();


// 4) Arrow Function 
// NOTE :- function keyword looks for his own this,
//         but when we create object through arrow function it looks for his parents this he dont has his
//         own this.

function fn(){
    console.log(this);    // self object
    abc=()=>{
        console.log(this);   // functions object
    }
    abc();
}
let obj = {
    name:"prashil",
    func : fn,
}
obj.func();


