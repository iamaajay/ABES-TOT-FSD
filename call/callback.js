function register(cb){

    setTimeout(()=>{
console.log("register end");
cb();
    },1000)

    
}
function sendEmail(ca){
    setTimeout(()=>{
console.log("send mail");
ca();
    },2000)
    
}
function login(cd){
    setTimeout(()=>{
console.log("login" );
cd();
    },3000)
    // console.log("login here");
}
function getData(ct){
    setTimeout(()=>{
    console.log("get data");
    ct();
    },3000)
}
function displayData()
{
    setTimeout(()=>{
console.log("display");
    },200)
    // console.log("display");
}
register(cb);
function cb(){
sendEmail(ca);
function ca(){
login(cd);
function cd(){
getData(ct);
function ct(){
displayData();
}
}
}
}
console.log("the result is");
