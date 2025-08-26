const { useReducer } = require("react");

function sum(a,b){
    return a+b;

}
const arr=[1,20,40,50,20];
console.log(sum(10,30));
console.log(sum(...arr));
arr.reduce();
