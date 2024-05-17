export declare interface interfaceCategoria{
    id: number,
    categoria: string,
}

export interface interfaceTransacao{
    id: number,
    data: string,
    valor: number,
    descricao: string,
    categoria: interfaceCategoria
}