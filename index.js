import env from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import fileUpload from "express-fileupload";

const app = express();


import router from "./router.js";

env.config();

const PORT = 3000;

app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

async function startApp(){
    try{
        await mongoose.connect(process.env.URL);
        app.listen(PORT, () => console.log("Server works on " + PORT));
    }
    catch (e)
    {
        console.log(e);
    }
}

app.get("/", (req, res) =>{
res.send("nodejs+mongo")});





startApp();