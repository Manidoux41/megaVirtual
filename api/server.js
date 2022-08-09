import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT= process.env.PORT || 8082;

const app = express();

app.listen(PORT, () =>{
    console.log(`listening on port: ${PORT}`);
});