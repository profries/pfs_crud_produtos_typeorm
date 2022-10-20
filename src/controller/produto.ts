import { Request, Response } from "express";
import { AppDataSource } from '../data-source'
import { Produto } from "../entity/produto";

export class ProdutoController {
    async listar(req: Request, res: Response) {
        const datasource = await AppDataSource.initialize();
        const produtoRepository = datasource.getRepository(Produto);
        const listaProdutos = await produtoRepository.find();
        res.json(listaProdutos);
    }
}