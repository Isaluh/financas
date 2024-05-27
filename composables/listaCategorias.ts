import type { interfaceCategoria } from "~/interfaces/interfaces";

let categorias = new Array<interfaceCategoria>();
// const categoria = categoriasExistentes();

export const listaCategorias = () =>{
    return categorias;
};

export const inserirCategorias = (id : number, conteudo : string) => {
    categorias.push({id: id, categoria: conteudo});
    // categoria.value.push({id: id, categoria: conteudo});
};
