export interface interfaceCategoria{
    id: number,
    categoria: string,
}

export interface interfaceTransacao{
    id: number,
    data: Date,
    valor: number,
    descricao: string,
    categoria: interfaceCategoria
}