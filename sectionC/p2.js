const server=require("http")
server.createServer(req,res)=>{
    res.write("<h2>cbkjss</h2>")
    res.end("")
}
listenerCount(5001,()=>{
    console.log("Server Stard")
})