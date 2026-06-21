import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

import router from "./news.router.js";
app.use('/api',router);


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
});