// 1) Array
// let arr = ["Hi","I","am","prashil"];
// let a = arr[0];
// let b = arr[1];
// console.log(a,b);

// Destructuring :- It is an convinient way of extracting element from array and object.
// let [a,b,c,d] = arr;     
// console.log(a,b,c,d);      \\Hi I am prashil

// let [a,b,,d] = arr;
// console.log(a,b,d);        \\Hi I prashil

// let [a,b,c,d,extra="ganvir"] = arr;
// console.log(a,b,c,d,extra);       \\Hi I am prashil ganvir

// 2) Objects

// let obj = {
//     name:"Prashil",
//     state:"Maharastra",
//     country:"India",
// }

// let a = obj.name;
// let b = obj["state"];
// console.log(a,b);      \\Prashil Maharastra

// Destructuring :-

// let {name,state,country} = obj;
// console.log(name,state,country);      \\Prashil Maharastra India

// let {name,state,country,extra}=obj;
// console.log(name,state,country,extra);    \\Prashil Maharastra India undefined

// let {name,state,country,extra="default-value"}=obj;
// console.log(name,state,country,extra);          \\Prashil Maharastra India default-value

// let {name:firstName,state,country,extra="default-value"}=obj;
// console.log(firstName,state,country,extra);         \\Prashil Maharastra India default-value


// 3) Nested Object

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

// let {name,address} = obj1;
// console.log(name,address.state.code);

// let {address:{state:{code:cd}}}=obj1;
// console.log(cd);         \\DL



