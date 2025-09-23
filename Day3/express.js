const express=require("express")
const app=express()
// const data=require("./data")
// const student=require("./student")
app.get("/",(req,res)=>{
    

})
app.get("/about",(req,res)=>{
    res.send("hello i am here")
})
app.get("/",(req,res)=>{
    res.send(data.users)
})
app.get("/student",(req,res)=>{
    res.send("we got it")
})
app.post("/",(req,res)=>{
    res.send("i am ajay")
})
app.listen(7000,()=>{
    console.log("server started")
})