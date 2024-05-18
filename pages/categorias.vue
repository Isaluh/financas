<template>
    <div style="margin: 0 10%;">
        <h1 style="margin-bottom: 15px; font-size: 27px;"><strong>Categorias</strong></h1>
        <div style="display: flex; flex-direction: row; gap: 10px;">
            <input class="inputs" ref="conteudo" type="text" style="border: 2px #A8A8A8 solid; height: 30px; padding-left: 5px; border-radius: 5px; ">
            <button @click="inserirConteudo" style=" border: none; background-color: #2451d4; color: white; width: 68px; border-radius: 5px;">Adicionar</button>
        </div>
    </div>
    <Tabela />
</template>

<script lang="ts">
    let cont = 0;
    export default {
        methods: {
            inserirConteudo() {
                const inputs = document.querySelector<HTMLInputElement>(".inputs");
                if(typeof(inputs?.value) == "string" && inputs?.value.trim() != ""){
                    inserirCategorias(cont, inputs?.value);
                    inputs.value = "";
                }else{
                    //retornar um erro
                    alert("valor inserido não condizente");
                }
                cont++;
                
            }
        }
    };
</script>

<!-- 
    - fazer atualizar a parte da tabela de catgorias
 -->

<style lang="css" scoped>

</style>