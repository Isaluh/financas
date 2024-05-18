<!-- v3s -->

<template>
    <div style="margin: 0 10%;">
        <Erro hidden />
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
                <select  name="" id="" style="height: 30px; padding-left: 5px; border-radius: 5px; border: 2px #A8A8A8 solid; width: 178px;">
                        <option value="semCategoria" selected disabled hidden></option>
                        <option :value="item.categoria" v-for="item in categorias">{{ item.categoria }}</option>
                </select>
            </div>
            <button @click="filtrarElemento" style="border: none; background-color: #2451d4; color: white; width: 68px; border-radius: 5px; height: 30px;">Procurar</button>
        </div>
        <span style="display: flex; border: 1px solid #cacaca; width: 100%;  margin-top: 20px;"></span>
        <h2 style="color: #A8A8A8; font-size: 18px; text-align: center; margin-top: 20px;" v-if="transacao.length == 0">Nenhuma transação realizada</h2>
        <Transacao />
    </div>
</template>

<script setup lang="ts">
    const categorias = listaCategorias();
    const transacao = listaTransacoes();

    function tirarHidden(event : any){
        let button = event.target.parentNode.parentNode.querySelector("main");
        button.toggleAttribute("hidden");
    };

    function filtrarElemento(){
        console.log("filtro");
    };
</script>


<!-- 
    - fazer a validação de string vazia nos inputs de procura
    - fazer o filtro da descrição e da categoria ao clicar no botão de procurar
    - fazer atualizar automaticamente a parte das transações
-->

<style lang="scss" scoped>

</style>