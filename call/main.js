function register(cb){

    setTimeout(()=>{
console.log("register end");
cb();
    },1000)

    
}
function sendEmail(cb){
    setTimeout(()=>{
console.log("send mail");
cb();
    },2000)
    
}
function login(cb){
    setTimeout(()=>{
console.log("login" );
cb();
    },3000)
    // console.log("login here");
}
function getData(cb){
    setTimeout(()=>{
    console.log("get data");
    cb();
    },3000)
}
function displayData(cb)
{
    setTimeout(()=>{
console.log("display");
cb();
    },200)
    // console.log("display");
}
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            })
        })
    })
})
console.log("the result is");
