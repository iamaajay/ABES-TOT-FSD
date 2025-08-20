// // // // var a=12;
// // // // console.log("hi ="+a);
// // // //var a=13;console.log(typeof(a));
// // // //const a=10;
// // // //const a=15;
// // // //console.log(a);
// // // //let a=32;
// // // // 
// // // // let a=12;
// // // // let b="1"
// // // // if(a==b)
// // // // {
// // // //     console.log("hi sdfsdf");
// // // // }
// // // // else{
// // // //     console.log("bye");
// // // // }
// // // // function sum(a,b){
// // // //     return a+b;
// // // // }
// // // // let va=sum(12,5);
// // // // console.log("sum ="+va);
// // // // let val=sum(30,5);
// // // // console.log("sum="+val);
// // // // return sum(a,b);
// // // // const data=function(){
// // // //     console.log("nlkjdnsjnkns");
// // // // }
// // // // data();
// // // // const data=()=>{
// // // //     return "byr sir"

// // // // }
// // // // console.log(data());
// // // const sum=(a,b)=>{
    
   
// // // console.log(sum);
// // // }
// // //  return 10+20;
// // (function(){
// //     console.log("welcome");
// // });
// function greet(msg="hello"){
//    return "hi"+msg;
// }
// console.log(greet("bye"));
function selectLanguage(lang){
    let data;
    if(lang=="java"){
        function javaCompiler(){
          console.log("java Compiler here");
        }
        data=javaCompiler();
    }
    else if(lang=="c")
    {
        function cCompiler(){
            console.log("c compiler is here");
        }
        data=cCompiler();
    }
    else{
       console.log("sorry");
    }
    
    }
    selectLanguage("python");
