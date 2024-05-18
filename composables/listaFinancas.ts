import type { interfaceCategoria, interfaceTransacao } from "~/interfaces/interfaces";

let transacoes = new Array<interfaceTransacao>();

export const listaTransacoes = () =>{
    return transacoes;
};

export const inserirTransacoes = (id: number, data: string, sinal: boolean, valor: number, descricao: string, categoria: interfaceCategoria) => {
    transacoes.unshift({id : id, data : data, sinal : sinal, valor : valor, descricao : descricao, categoria : categoria});
};
