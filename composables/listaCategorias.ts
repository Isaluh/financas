import type { interfaceCategoria } from "~/interfaces/interfaces";

let categorias = new Array<interfaceCategoria>();

export const listaCategorias = () =>{
    return categorias
}

export const inserirCategorias = (id : number, conteudo : string) => {
    categorias.push({id: id, categoria: conteudo});
}
