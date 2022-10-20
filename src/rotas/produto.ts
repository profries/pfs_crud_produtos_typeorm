import { Router } from 'express';
import { ProdutoController } from '../controller/produto';

const rota = Router();
const controller = new ProdutoController();

//Rota: /api/produtos
rota.get('/', controller.listar);

export default rota;