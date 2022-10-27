import express from "express";
import  AppDataSource from "./data-source";
//Para iniciar o DataSource (chamar o initialize)
AppDataSource;
//Tem que ser antes das rotas para ter efeito antes do import.
import rotaProduto from './rotas/produto';


const app = express();
const PORT = 3000;


app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/api/produtos', rotaProduto);

app.listen(PORT, () => {
    console.log("Iniciando na porta "+PORT);
})
