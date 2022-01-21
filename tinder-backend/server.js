import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbCards.js";
import Cors from 'cors';
//app congif
const app =express();
const port = process.env.PORT || 5500;
const connection_url = "mongodb+srv://admintinderclone:admintinderclone@cluster0.l1sns.mongodb.net/tinderdb?retryWrites=true&w=majority";
//middleware
app.use(express.json());
app.use(Cors());
//dbconfig
mongoose.connect(connection_url,{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
//apiendpoints
app.get("/",(req,res) => res.status(200).send('hello programmer'));
app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
          res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    }) ;
});
// retriving every single thing
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    }); 
});
//listener
app.listen(port,()=> console.log(`listening to local host: ${port}`));