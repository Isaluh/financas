import type { interfaceCategoria, interfaceTransacao } from "~/interfaces/interfaces";

let transacoes = new Array<interfaceTransacao>();

export const listaTransacoes = () =>{
    return transacoes
}

export const inserirTransacoes = (id: number, data: string, valor: number, descricao: string, categoria: interfaceCategoria) => {
    transacoes.unshift({id : id, data : data, valor : valor, descricao : descricao, categoria : categoria});
}
