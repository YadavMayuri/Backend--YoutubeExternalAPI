console.log("hii");

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import router from "./routes/AllRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router)



app.listen(8000)