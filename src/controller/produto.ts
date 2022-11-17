import { Request, Response } from "express";
import { Produto } from "../entity/produto";
import  AppDataSource from "../data-source";
import { Repository } from "typeorm";

export class ProdutoController {

    async listar(req: Request, res: any) {
        const datasource = await AppDataSource.initialize();
        const produtoRepository = datasource.getRepository(Produto);
        const listaProdutos = await produtoRepository.find();
        res.json(listaProdutos);
    }

    async inserir(req: any, res: any) {
        const datasource = await AppDataSource.initialize();
        const produtoRepository = datasource.getRepository(Produto);

        const produtoRequest = req.body;

        const produto = new Produto();
        produto.nome = produtoRequest.nome;
        produto.preco = produtoRequest.preco;
       
        const produtoSalvo = await produtoRepository.save(produto);

        res.status(201).json(produtoSalvo);
    }

    async buscarPorId(req: any, res: any) {
        const datasource = await AppDataSource.initialize();
        const produtoRepository = datasource.getRepository(Produto);
        
        const id = req.params.id;

        const produto = await produtoRepository.findOneBy({id: id});

        res.json(produto);
    }

    
}