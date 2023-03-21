import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app =  express();


app.listen(process.env.PORT, (err) => {
    err ? console.log(`Error Happened ${err}`) : console.log(`Server is running at ${process.env.PORT}`)
});