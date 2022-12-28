const express=require("express");
const path=require("path");
const app=express();

 app.use(express.static(path.join(__dirname,"./public/table.html")))

app.get('/home',(req,res)=>{
    res.send('hello sagar')

})
app.get('/about',(req,res)=>{

    res.sendFile(path.join(__dirname,'./public/table.html'))
})
app.listen(1000);
console.log("server is running on 1000");