<!-- v3s -->

<template>
    <div style="margin: 0 10%;">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <h1 style="margin-bottom: 15px; font-size: 27px;"><strong>Transações</strong></h1>
            <button @click="tirarHidden" style="border: none; background-color: #2451d4; color: white; width: 110px; border-radius: 5px; height: 40px;">Nova transação</button>
        </div>
        <NovaTransacao hidden />
        <div style="display: flex; flex-direction: row; gap: 10px; align-items: end;">
            <div style="display: flex; flex-direction: column; gap: 5px;">
                <label style="font-size: 15px; font-weight: bold;" for="descriao">Descrição</label>
                <input id="descricao" ref="" type="text" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 5px;">
                <label style="font-size: 15px; font-weight: bold;" for="categorias">Categoria</label>
                <input id="categorias" ref="" type="text" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid;">
            </div>
            <button @click="" style="border: none; background-color: #2451d4; color: white; width: 68px; border-radius: 5px; height: 30px;">Procurar</button>
        </div>
        <span style="display: flex; border: 1px solid #cacaca; width: 100%;  margin-top: 20px;"></span>
        <Transacao />
    </div>
</template>

<script>
    export default {
        methods: {
            tirarHidden: function(event){
                let button = event.target.parentNode.parentNode.querySelector("main");
                button.toggleAttribute("hidden");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>