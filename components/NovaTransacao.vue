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
                    <input class="inputs" ref="" type="text" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid; width: 230px;">
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
    function cancelarEdicao(){
        const inputs = document.querySelectorAll<HTMLInputElement>(".inputs");
        inputs.forEach(x => {
            x.value = "";
        });
    }

    function adicionarTransacao(){
        const inputs = document.querySelectorAll<HTMLInputElement>(".inputs");
        inputs.forEach(x => {
            console.log(x.value);
            // salvar valores
            x.value = "";
        });
    }
</script>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }
</style>