// 1) Arrays

// let arr = [1,2,3];
// let arr2 = arr;
// arr.push(4);

// console.log(arr);
// console.log(arr2);

// console.log(arr);
// console.log(...arr);

// spred operator
// let arr2 = [...arr];
// arr2.push(4);
// console.log(arr);
// console.log(arr2);

// 2) Objects

let obj1 = {
    name: "prashil",
    address : {
        contry : "India",
        state : {
            code : "DL",
            pincode : 12345,
        }
    }
}

// let obj2 = obj1;
// obj2.name="ram";
// console.log(obj1);
// console.log(obj2);

// spred operator
// let obj2 = {...obj1}  SHALLOW COPY
// let obj2 = {...obj1,address:{...obj1.address,state:{...obj1.address.state}}};   // DEEP COPY

// obj2.name="ram";
// obj2.address.contry="US";
// obj2.address.state.code="DDLJ";
// console.log(obj1);
// console.log(obj2);


// Shortcut
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.state.code="DDLJ";
console.log(obj1);
console.log(obj2);