import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import bodyparser from 'body-parser'
import movies from './movies.js'
const app= express();
app.use(bodyparser.json());
app.use(cors());

mongoose.connect("mongodb+srv://learn_easy:Learneasy123@nodeapi.qo35e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{console.log("db connected")}).catch(error=>{console.log(error)})
const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email: String,
    contact: String,
});

var UserState = mongoose.model("UserState",userSchema);

/******************* 
 * React related service
*/
app.get("/api/movies", (req, res)=>{
    res.status(200).json(movies);
    });

/*********
 * Node task realated
 *************/
app.post("/api/user",(req, res)=>{
var user = new UserState(req.body);
user.save().then(
    (response) => {
      res.status(201).json({
        message: response
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

app.get("/api/users",(req,res)=>{
    UserState.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    }); 
})

app.delete ('/api/user/', function(req, res) {
    UserState.findByIdAndDelete((req.body.id), 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("User Deleted!");
        }
    });  
});

app.put('/api/user', function(req, res) {
    UserState.findByIdAndUpdate(req.body.id, 
    {firstName:req.body.firstName}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("User updated!");
            console.log("User updated!");
        }
    });  
});

app.listen(7000,()=>{console.log("app listening at 7000")})