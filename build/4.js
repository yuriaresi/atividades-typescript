"use strict";
// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
class GerenciadorDeProdutos {
    constructor() {
        this.produtos = [];
        this.proximoId = 1;
    }
    cadastrarProduto(nome, preco) {
        const novoProduto = {
            id: this.proximoId,
            nome,
            preco,
        };
        this.produtos.push(novoProduto);
        this.proximoId++;
        console.log(`Produto cadastrado: ${novoProduto.nome}`);
    }
    listarProdutos() {
        if (this.produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
        }
        else {
            console.log("Lista de Produtos:");
            this.produtos.forEach((produto) => {
                console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`);
            });
        }
    }
    excluirProduto(id) {
        const index = this.produtos.findIndex((produto) => produto.id === id);
        if (index === -1) {
            console.log("Produto não encontrado.");
        }
        else {
            const produtoExcluido = this.produtos.splice(index, 1)[0];
            console.log(`Produto excluído: ID ${produtoExcluido.id}, Nome: ${produtoExcluido.nome}`);
        }
    }
}
const gerenciador = new GerenciadorDeProdutos();
gerenciador.cadastrarProduto("Produto 1", 19.99);
gerenciador.cadastrarProduto("Produto 2", 29.99);
gerenciador.listarProdutos();
gerenciador.excluirProduto(1);
gerenciador.listarProdutos();
