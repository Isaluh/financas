<script setup lang="ts">
    const categorias = listaCategorias();
    const mensagem = msgErro();

    function edicaoConcluida(id : number){
        let novoCat = document.querySelectorAll<HTMLInputElement>("#novoCat");
        let verificador = false;
        const edicao = document.querySelectorAll(".edicao");
        const visualizacao = document.querySelectorAll(".visualizacao");
        const erro = document.querySelector("main")?.parentNode?.querySelector("#erro");

        for(var cat in categorias){
            if(categorias[cat].id == id){
                novoCat.forEach(x => {
                    if(x.parentNode?.id == id){
                        if(typeof(x.value) == "string" && x.value.trim() != ""){
                            x.value = x.value.charAt(0).toUpperCase() + x.value.slice(1).toLowerCase();
                            
                            for(let i = 0; i < categorias.length; i++){
                                if(categorias[i].categoria.includes(x.value)){
                                    verificador = true;
                                    break;
                                }
                            }

                            if(verificador){
                                mensagem.value = "Categoria já existente";
                                erro?.removeAttribute("hidden");
                            }
                            else{
                                categorias[cat].categoria = x.value;
                                erro?.setAttribute("hidden", "hidden");
                                edicao.forEach(x => {
                                    if(Number(x.id) == id){
                                        console.log("coloca hidden no edicao")
                                        x.setAttribute("hidden", "hidden");
                                    }
                                });
                                
                                visualizacao.forEach(x =>{
                                    if(Number(x.id) == id){
                                        console.log("tira hidden visualizacao")
                                        x.removeAttribute("hidden");
                                    }
                                });
                            }
                        }
                        else{
                            mensagem.value = "O novo valor inserido é inválido. Tente novamente!";
                            erro?.removeAttribute("hidden");
                        };
                    }
                });
                break;
            }
        }
    }

    function cancelarEdicao(id : Number){
        const edicao = document.querySelectorAll(".edicao");
        const visualizacao = document.querySelectorAll(".visualizacao");
        const erro = document.querySelector("main")?.parentNode?.querySelector("#erro");

        edicao.forEach(x => {
            if(Number(x.id) == id){
                x.setAttribute("hidden", "hidden");
            }
        });
        
        visualizacao.forEach(x =>{
            if(Number(x.id) == id){
                x.removeAttribute("hidden");
            }
        });

        erro?.setAttribute("hidden", "hidden");
    }

    function editarCategoria(id : Number){
        const edicao = document.querySelectorAll(".edicao");
        const visualizacao = document.querySelectorAll(".visualizacao");

        edicao.forEach(x => {
            if(Number(x.id) == id){
                x.removeAttribute("hidden");
            }
        });

        visualizacao.forEach(x =>{
            if(Number(x.id) == id){
                x.setAttribute("hidden", "hidden");
            }
        });
    };

    function excluirCategoria(id : number){
        for(var cat in categorias){
            if(categorias[cat].id == id){
                categorias.splice(Number(cat), 1);
                break;
            }
        }
    };
</script>

<template>
    <main style="margin: 15px 10%;">
        <table style="box-shadow: 10px 5px 5px #cacaca;">
            <thead style="border: #cacaca 1px solid;">
                <th colspan="6" style="color: gray;">CATEGORIA</th>
            </thead>
            <tbody>
                <tr v-for="item in categorias">
                    <td :id="String(item.id)" class="edicao" hidden ><input id="novoCat" type="text" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid;" :value="item.categoria"></td>
                    <td :id="String(item.id)" class="edicao" hidden><button @click="edicaoConcluida(item.id)" style="border: none; background-color: #2451d4; color: white; width: 68px; border-radius: 5px; height: 30px;">Editar</button></td>
                    <td :id="String(item.id)" class="edicao" hidden><button @click="cancelarEdicao(item.id)" style="border: none; background-color: inherit; color: black; width: 68px;">Cancelar</button></td>
                    <td colspan="4" :id="String(item.id)" class="visualizacao"><strong>{{ item.categoria }}</strong></td>
                    <td :id="String(item.id)" class="visualizacao" @click="editarCategoria(item.id)" style="cursor: pointer; color: blue;">Editar</td>
                    <td :id="String(item.id)" class="visualizacao" @click="excluirCategoria(item.id)" style="cursor: pointer; color: red;">Excluir</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<!-- 
    - fazer com que a tabela atualize automaticamente na tela
 -->

<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    tr{
        border: 1px solid #dddddd;
    }

    td, th {
        text-align: left;
        padding: 8px;
    }

    td:nth-child(1), td:nth-child(2){
        width: 50px;
    }

    td:nth-child(5), td:nth-child(6){
        width: 65px;
    }

</style>