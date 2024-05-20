let mensagem = "";

export const msgErro = (msg : string) =>{
    mensagem = msg;
    console.log(mensagem + " - msg veio")
};

export const mostrarMsgErro = () =>{
    console.log(mensagem + " - msg vai")
    return mensagem;
};

// fazer funfar