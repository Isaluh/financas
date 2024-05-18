<script setup lang="ts">
    const categorias = listaCategorias();

    function editarCategoria(){
        console.log("editar");
    };

    function excluirCategoria(){
        console.log("excluir");
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
                    <td><strong>{{ item.categoria }}</strong></td>
                    <td @click="editarCategoria" style="cursor: pointer; color: blue;">Editar</td>
                    <td @click="excluirCategoria" style="cursor: pointer; color: red;">Excluir</td>
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

    td:nth-child(2), td:nth-child(3){
        width: 65px;
    }

</style>