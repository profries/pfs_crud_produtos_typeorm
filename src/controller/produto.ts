import { Request, Response } from "express";
import { Produto } from "../entity/produto";
import  AppDataSource from "../data-source";

export class ProdutoController {

    private produtoRepository = AppDataSource.getRepository(Produto);

    async listar(req: Request, res: any) {
        const listaProdutos = await this.produtoRepository.find();
        res.json(listaProdutos);
    }

    async inserir(req: any, res: any) {
        const produtoRequest = req.body;

        const produto = new Produto();
        produto.nome = produtoRequest.nome;
        produto.preco = produtoRequest.preco;
       
        const produtoSalvo = await this.produtoRepository.save(produto);

        res.status(201).json(produtoSalvo);
    }

    async buscarPorId(req: any, res: any) {
        const id = req.params.id;

        const produto = await this.produtoRepository.findOneBy({id: id});

        res.json(produto);
    }

    
}