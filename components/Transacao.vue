<template>
    <main style="margin: 20px 0;">
        <div>
            <h2 style="font-size: 18px; margin-bottom: 5px">17/01/2025</h2>
            <div style="margin-bottom: 20px; padding: 15px 20px; border: 1px solid #cacaca; border-radius: 5px; box-shadow: 10px 5px 5px #cacaca; display: flex; flex-direction: column; justify-content: space-between;">

                <div style="width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="text-align: center; font-weight: bold; background-color: rgba(112, 114, 227, 0.5); font-size: 15px; color: #1a257d; border-radius: 10px; padding: 2px 8px; width: fit-content;">categoria</span>
                        <h2 style="font-size: 20px;">Descrição</h2> 
                    </div>
                    <div style="display: flex; flex-direction: row; gap: 20px;">
                        <h2 style="font-size: 20px;"><span style="color: green;">+</span> <strong>R$ 100,00</strong> </h2>
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

<script setup lang="ts">
    function editarTransacao(event : any){
        let button = event.target.parentNode.parentNode.parentNode.querySelector("#editarTransacao");
        button.toggleAttribute("hidden");
    }   
    
</script>