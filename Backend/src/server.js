import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("new on fire");
})

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
});