const express = require("express");
// making a variable and requiring it 
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/serveHtml",function(req,res){
    res.sendFile(__dirname + "/average.html");
});
app.post("/serveHtml",function(req,res){
var firstnumber=Number(req.body.firstnumber);
var secondnumber=Number(req.body.secondnumber);
var thirdnumber=Number(req.body.thirdnumber);
var result=(firstnumber+secondnumber+thirdnumber)/3;
    res.send("The result of calculation is "+ result);
});

app.listen(3000 , () =>{
    console.log("server is running on port 3000");
});