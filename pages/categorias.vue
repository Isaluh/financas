<template>
    <div style="margin: 0 10%;">
        <Erro hidden />
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
    const categoria = listaCategorias();
    let verificador = false;

    export default {
        methods: {
            inserirConteudo() {
                const inputs = document.querySelector<HTMLInputElement>(".inputs");
                if(typeof(inputs?.value) == "string" && inputs?.value.trim() != ""){

                    inputs.value = inputs.value.charAt(0).toUpperCase() + inputs.value.slice(1).toLowerCase();
                    
                    for(let i = 0; i < categoria.length; i++){
                        if(categoria[i].categoria == inputs.value){
                            verificador = true;
                        }
                    };

                    if(verificador == false){
                        inserirCategorias(cont, inputs?.value);
                    }
                    else{
                        //arrumar msg do erro (categoria ja existente)
                        inputs.parentNode?.parentNode?.querySelector("#erro")?.removeAttribute("hidden");
                    };

                    inputs.value = "";
                }else{
                    //arrumar msg do erro
                    inputs?.parentNode?.parentNode?.querySelector("#erro")?.removeAttribute("hidden");
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