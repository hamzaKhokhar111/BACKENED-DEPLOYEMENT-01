const express =require("express")
const app=express();
require('dotenv').config()
const port=4000


app.get('/',(req,resp)=>{
    resp.send("jhang")
})
app.get('/home',(req,resp)=>{
    resp.send("this is My homee PAge")
})
app.get*('/about',(req,resp)=>{
    resp.send('<h1>HAmza Ka about page<h1/>')
})

app.listen(process.env.PORT ,()=>{
    console.log("server is rununig")
})