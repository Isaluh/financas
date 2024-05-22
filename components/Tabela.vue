<script setup lang="ts">
    const categorias = listaCategorias();
    const msgErro = useState('msgErro');

    function edicaoConcluida(id : number){
        //separar por id
        const novoCat = document.querySelector<HTMLInputElement>("#novoCat");
        let verificador = false;
        const edicao = document.querySelectorAll(".edicao");
        const visualizacao = document.querySelectorAll(".visualizacao");
        const erro = document.querySelector("main")?.parentNode?.querySelector("#erro");
        
        if(typeof(novoCat?.value) == "string" && novoCat?.value.trim() != ""){
            novoCat.value = novoCat.value.charAt(0).toUpperCase() + novoCat.value.slice(1).toLowerCase();
            
            for(let i = 0; i < categorias.length; i++){
                if(categorias[i].categoria == novoCat.value){
                    verificador = true;
                    break;
                };
            };
            
            if(verificador){
                msgErro.value = "Categoria já existente";
                erro?.removeAttribute("hidden");
            }
            else{
                for(var cat in categorias){
                    if(categorias[cat].id == id){
                        categorias[cat].categoria = novoCat.value;
                        // fazer com q att automaticamente
                        break;
                    };
                };
                erro?.setAttribute("hidden", "hidden");

                edicao.forEach(x => {
                    x.setAttribute("hidden", "hidden");
                });
                
                visualizacao.forEach(x =>{
                    x.removeAttribute("hidden");
                });
            };
        }
        else{
            msgErro.value = "O novo valor inserido é inválido. Tente novamente!";
            erro?.removeAttribute("hidden");
        };
    }

    function cancelarEdicao(){
        //separar por id
        const edicao = document.querySelectorAll(".edicao");
        const visualizacao = document.querySelectorAll(".visualizacao");
        const erro = document.querySelector("main")?.parentNode?.querySelector("#erro");

        edicao.forEach(x => {
            x.setAttribute("hidden", "hidden");
        });
        
        visualizacao.forEach(x =>{
            x.removeAttribute("hidden");
        });

        erro?.setAttribute("hidden", "hidden");
    }

    function editarCategoria(){
        //separar por id
        const edicao = document.querySelectorAll(".edicao");
        const visualizacao = document.querySelectorAll(".visualizacao");

        edicao.forEach(x => {
            x.removeAttribute("hidden");
        });

        visualizacao.forEach(x =>{
            x.setAttribute("hidden", "hidden");
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
                <th style="color: gray;">CATEGORIA</th>
            </thead>
            <tbody>
                <tr v-for="item in categorias">
                    <td class="edicao" hidden><input id="novoCat" type="text" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid;" :value="item.categoria"></td>
                    <td class="edicao" hidden><button @click="edicaoConcluida(item.id)" style="border: none; background-color: #2451d4; color: white; width: 68px; border-radius: 5px; height: 30px;">Editar</button></td>
                    <td class="edicao" hidden><button @click="cancelarEdicao" style="border: none; background-color: inherit; color: black; width: 68px;">Cancelar</button></td>
                    <td class="visualizacao"><strong>{{ item.categoria }}</strong></td>
                    <td class="visualizacao" @click="editarCategoria" style="cursor: pointer; color: blue;">Editar</td>
                    <td class="visualizacao" @click="excluirCategoria(item.id)" style="cursor: pointer; color: red;">Excluir</td>
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