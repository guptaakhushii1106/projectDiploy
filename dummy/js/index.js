// console.log(a);
// //Hoisting

// //Global scope 
// var a = 10;
// console.log(a);
// //Let
// //Block scope
// console.log(b);
// // TDZ(Temporal dead zone)
// let b = 20;
// console.log(b);

// {
//     var a = 10;
// console.log(a);
//     let b = 20;
// console.log(b);

// }
// console.log(a);
// console.log(b);

// const c= 30;
// console.log(c);

// 1. Nmaed Function
// function a(){
//     console.log("Hello world 1");
//     console.log("Hello world 2");
//     console.log("Hello world 3");
//     console.log("Hello world 4");
    
// }
// a();
// //Function expression
// var b= function(){
//     console.log("Function Expression");
    
   
// }
// b();
// let c= () => {
//     console.log("Arrow Function ");
//     };
//     c();

// // 4. Callback Function (Anonymous function)
// // 5. IIFE (Immediately Invoked function expression)   

// (function () {
//     console.log("IIFE and Callback");
    
// })();
// (() => {
//     console.log("IIFE and Callback");
    
// })();

// function sumOfTwo(parameter1 = 2, parameter2 = 1){
//     console.log("Value of parameter1");
//     console.log("Value of parameter2");
//     console.log("Sum of two variables are ", parameter1 + parameter2);
       
// }
// sumOfTwo(20, 90);
// sumOfTwo(40, 90);
// sumOfTwo(87);

// const arr = [1,2,3,4, "sid"];
// console.log(arr);
// console.log(arr[4]);
// arr.push(7);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift("Hello");
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr);
// const obj = {
//     name : "Sid",
//     email : "kkg@gmail.com",
//     contact : 2896868,
//     info : {
//         address : "yugfwhfbwk",
//         sports : ["cricket", "swimming"],
//     },

// };
// console.log(obj);
// console.log(obj.name);
// console.log(obj.info.address);
// console.log(obj.info.sports);
// console.log(obj.info.sports[0]);
// const arr = [1,3,2,4,5,6,7,8];
//variable with avalue; condition;Inc /dec the variable
// for(let i=0;i<arr.length;i++){
//     console.log("on index ",i,"value is ",arr[i]);
//     // arr[i]=arr[i]*i;
// }
// console.log(arr);
// const arr = [2,4,6,8,10,12,14,16,18,20]
// for(let i=1;i<arr.length;i++){
//     console.log("2 * ",i,"= ",arr[i]);
// }
// const newARR= arr.map((currentValue, index)=>{
//     console.log("on index ",index, "value is ", currentValue);
//     return currentValue*index;

// });
// console.log(arr);
// console.log(newARR);
// //Interview Question
// console.log(20 - "2");
// console.log([]==[]);
// console.log([1,2]==[1,2]);
// console.log(arr ==arr);

// const evenNo= arr.filter((currentValue,index) => {
//     return currentValue % 2==0;
// });
// console.log(evenNo);


// const sumOfAll = arr.reduce((accumulator,currentValue,index)=>{
// return accumulator + currentValue;
// }, 0);
// console.log(sumOfAll);

// 1. tag selecter
// return array
// HTML Collection type of array

// let h1 = document.getElementsByTagName("h1");
// console.log(h1[1]);

// // 2. Class selecter
// // return an array
// //HTMLCollecetion type of array
// let a = document.getElementsByClassName("a");
// console.log(a[1]);

// //3. Id Selecter
// // Return only a single and first value
// let idSelector = document.getElementById("b");
// console.log(idSelector);

// //4. Query selector
// // Return only a single and first value

// let data = document.querySelector("#b");
// console.log(data);

// //5. Query Selector ALL
// // return an array of type Nodelist
// let MyData = document.querySelectorAll("h1");
// console.log(MyData[0]);

// // Read and Write Operations
// console.log(MyData[0].textContent);
// MyData[0].textContent = "Written by Dom "; 

// // styling 
// MyData[0].style.color="red";
// MyData[0].style.background = "yellow";

// add/remove/taggle
// let heading = document.querySelectorAll("h1");


// heading[1].classList.add("c");
// heading[1].classList.remove("b");

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
// console.log("btn clicked");
// heading[1].classList.toggle("c");
// document.body.classList.toggle("e");
// });

let input = document.querySelector("input");
let btn = document.querySelector(".g");
let ol = document.querySelector("ol");

btn.addEventListener("click", () => {
    if(input.value!=""){
        let li = document.createElement("li");
        li.textContent = input.value;
        ol.appendChild(li);
        input.value = "";

    }

});
let nameInput = document.querySelector(".name");
let contactInput = document.querySelector(".contact");
let emailInput = document.querySelector(".email");
let addDatabtn = document.querySelector(".addData");
let table = document.querySelector("tbody");

addDatabtn.addEventListener("click", () => {
    if(nameInput.value!= ""){
        let tr = document.createElement("tr");
        
        let nameTD= document.createElement("td");
        nameTD.textContent = nameInput.value;

        let contactTD= document.createElement("td");
        contactTD.textContent = contactInput.value;

        let emailTD= document.createElement("td");
        emailTD.textContent = emailInput.value;

        tr.appendChild(nameTD);
        tr.appendChild(emailTD);
        tr.appendChild(contactTD);

        table.appendChild(tr);
        nameInput.value = "";
        contactInput.value = "";
        emailInput.value = "";

    }

});
