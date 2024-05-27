<template>
    <main style="margin: 20px 0;">
        <div v-for="item in transacao" >
            <h2 style="font-size: 18px; margin-bottom: 5px">{{ item.data }}</h2>
            <div style="margin-bottom: 20px; padding: 15px 20px; border: 1px solid #cacaca; border-radius: 5px; box-shadow: 10px 5px 5px #cacaca; display: flex; flex-direction: column; justify-content: space-between;">

                <div style="width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="text-align: center; font-weight: bold; background-color: rgba(112, 114, 227, 0.5); font-size: 15px; color: #1a257d; border-radius: 10px; padding: 2px 8px; width: fit-content;">{{ item.categoria.categoria }}</span>
                        <h2 style="font-size: 20px;">{{ item.descricao }}</h2> 
                    </div>
                    <div style="display: flex; flex-direction: row; gap: 20px;">
                        <h2 style="font-size: 20px;">
                            <span v-if="item.sinal == false" style="color: green; margin-right: 5px;">+</span>
                            <span v-if="item.sinal == true" style="color: red; margin-right: 5px">-</span> 
                            <strong>R$ {{ item.valor }}</strong> 
                        </h2>
                        <img style="width: 25px; height: 25px;" src="@/public/setaBaixo.svg" alt="" @click="editarTransacao">
                    </div>
                </div>

                <div hidden style="margin-top: 20px;" id="editarTransacao">
                    <EditarTransacao />
                </div>
            </div>
        </div>
    </main>
</template>

<!-- 
    - fazer com que a transação atualize automaticamente na tela
 -->


<script setup lang="ts">
    const transacao = listaTransacoes();
    // const transacao = transacoesExistentes();

    function editarTransacao(event : any){
        let button = event.target.parentNode.parentNode.parentNode.querySelector("#editarTransacao");
        button.toggleAttribute("hidden");
    }; 
    
</script>