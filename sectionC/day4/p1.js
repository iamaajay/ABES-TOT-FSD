const server=require("http")
server.createServer((req,res)=>{
    // res.write("Hello sir")
    if(req.url=="/")
    {
        res.write("this is about the page")
    }
    else{
        res.write("sorry sir")
    }
    res.end("")
})
.listen(5001,()=>{
    console.log("Server Stard")
})