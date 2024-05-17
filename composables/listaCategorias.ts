import type { interfaceCategoria } from "~/interfaces/interfaces";

let categorias: interfaceCategoria[] = [];

export const listaCategorias = () =>{
    return categorias
}

export const inserirCategorias = (id : number, conteudo : string) => {

    // categorias.push(id, conteudo)
    // tentar colocar na interface

    console.log(categorias.values().next().value + " - " + categorias.values())
}
