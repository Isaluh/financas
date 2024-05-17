<script setup lang="ts">
    const categorias = listaCategorias();

</script>

<template>
    <main style="margin: 15px 10%;">
        <table style="box-shadow: 10px 5px 5px #cacaca;">
            <thead style="border: #cacaca 1px solid;">
                <th style="color: gray;">CATEGORIA</th>
            </thead>
            <tbody>
                <tr v-for="item in categorias">
                    <td><strong>{{ item }}</strong></td>
                    <td style="color: blue;">Editar</td>
                    <td style="color: red;">Excluir</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

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