import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT= process.env.PORT || 8082;

const app = express();

app.use(cors(CorsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// simple route
app.get("/", (req, res) => {
    res.json({msg: "my api running ok"})
})

app.listen(PORT, () =>{
    console.log(`listening on port: ${PORT}`);
});