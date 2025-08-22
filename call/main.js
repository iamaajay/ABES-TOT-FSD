function register(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("register end");
return resolve('register failed');
    },1000)
})
    
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("send mail");
return resolve('sorry');
    },2000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("login" );
resolve();
    },3000)
    // console.log("login here");
})
}
function getData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("get data");
    resolve();
    },3000)
    })
}
function displayData()
{
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
console.log("display");
resolve();
    },200)
    // console.log("display");
})
}
// register(()=>{
//     sendEmail(()=>{
//         login(()=>{
//             getData(()=>{
//                 displayData();
//             })
//         })
//     })
// }) 
// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)
// // console.log("the result is");
// .catch((err)=>{
//     console.log('Error'+err)
// })
async function ex1(){
    // try{
        await register();
        await sendEmail();
        await login();
        await getData();
        await displayData();
    }
    // catch(err)
    // {
    //     console.log("error");
    // }
// }
ex1().then(()=>{
    console.log("complet");
})
.catch(()=>{
    console.log(Object);
})

