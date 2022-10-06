import express from "express";
import {Request, Response} from "express";

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: any) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log("Iniciando na porta "+PORT);
})