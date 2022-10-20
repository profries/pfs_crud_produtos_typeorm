import express from "express";
import rotaProduto from './rotas/produto';
import "reflect-metadata"


const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/produtos', rotaProduto);

app.listen(PORT, () => {
    console.log("Iniciando na porta "+PORT);
})