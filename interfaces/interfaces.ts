export declare interface interfaceCategoria{
    id: number,
    categoria: string,
};

export interface interfaceTransacao{
    id: number,
    data: string,
    sinal: boolean,
    valor: number,
    descricao: string,
    categoria: interfaceCategoria
};