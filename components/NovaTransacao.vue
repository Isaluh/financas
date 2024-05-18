<template>
    <main style="border-radius: 5px; margin: 15px 0; border: 2px #A8A8A8 dashed; background-color: #dce8ff; padding: 20px;">
        <div style="display: flex; flex-direction: column; gap: 20px;">
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                <div style="display: flex; flex-direction: column; gap: 5px;">
                    <label style="font-size: 15px; font-weight: bold;" for="descriao">Data da transação</label>
                    <input class="inputs" ref="" type="date" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid; width: 230px;">
                </div>
                <div style="display: flex; flex-direction: column; gap: 5px;">
                    <label style="font-size: 15px; font-weight: bold;" for="descriao">Valor</label>
                    <input class="inputs" ref="" type="number" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid; width: 230px;">
                </div>
                <div style="display: flex; flex-direction: column; gap: 5px;">
                    <label style="font-size: 15px; font-weight: bold;" for="descriao">Descrição</label>
                    <input class="inputs" ref="" type="text" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid; width: 230px;">
                </div>
                <div style="display: flex; flex-direction: column; gap: 5px;">
                    <label style="font-size: 15px; font-weight: bold;" for="descriao">Categoria</label>

                    <select  name="" id="" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid; width: 230px;">
                        <option value="semCategoria" selected disabled hidden></option>
                        <option :value="item.categoria" v-for="item in categorias">{{ item.categoria }}</option>
                    </select>
                </div>
            </div>
            <div style="display: flex; flex-direction: row-reverse; gap: 10px;">
                <button @click="adicionarTransacao" style="border: none; background-color: #2451d4; color: white; width: 68px; border-radius: 5px; width: 80px; height: 35px;">Adicionar</button>
                <button @click="cancelarEdicao" style="border: none; background-color: inherit; color: black; width: 68px;">Cancelar</button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    const categorias = listaCategorias();
    let aux : string[] = [];
    let cont = 0;
    
    
    function cancelarEdicao(){
        const inputs = document.querySelectorAll<HTMLInputElement>(".inputs");
        let categoriaSelecionada = document.querySelector("select");
        
        inputs.forEach(x => {
            x.value = "";
        });
        
        if (categoriaSelecionada) {
            categoriaSelecionada.selectedIndex = 0;
        };
    };
    
    function adicionarTransacao(){
        const inputs = document.querySelectorAll<HTMLInputElement>(".inputs");
        let categoriaSelecionada = document.querySelector("select");
        let sinal = false;
        inputs.forEach(x => {
            if(x.value.trim() != ""){
                aux.push(x.value);
            }
            x.value = "";
        });
        
        for(let i = 0; i < categorias.length; i++){
            if(categorias[i].categoria == categoriaSelecionada?.value){
                aux.push(categorias[i].id.toString());
                aux.push(categorias[i].categoria);
            }
        };
        
        if(aux.length != 5){
            //melhorar esse alert
            alert("Transação não cadastrada, erro de valor nos campos");
        }
        else{
            if(aux[1].charAt(0) == "-"){
                sinal = true;
                aux[1] = aux[1].replace("-", "");
            };

            inserirTransacoes(cont, aux[0].split("-").reverse().join("/"), sinal, Number(aux[1]), aux[2], {id: Number(aux[3]), categoria: aux[4]});
            cont++;
        };

        if (categoriaSelecionada) {
            categoriaSelecionada.selectedIndex = 0;
        };

        aux = [];
    };
</script>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }

    /* estilizar o option */

</style>