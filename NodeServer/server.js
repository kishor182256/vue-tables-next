import express from 'express';
import cors from 'cors';

import {db} from './db.js'



const app = express();
app.use(cors());
app.use(express.json());



app.post('/posts',(req,res)=>{
    console.log(req.body.body[0])
    console.log("/post kishor has been called 3");
    db.push(req.body.body[0])
    console.log(db)
})


app.listen(3005,()=>{
    console.log("Server listening in 3005")
})

