<script setup lang="ts">

    // let mensagem = mostrarMsgErro();
    const props = defineProps({
        mensagem: String
    })
    // fazer com q a mensagem seja enregue e ja recarregada na tela
</script>

<template>
    <div id="erro">
        <span style="display: flex; align-items: center; border-radius: 5px; width: 100%; height: 50px; background-color: #2b0b0e; border: 1px solid #DE848D; color: #DE848D; padding-left: 15px; gap: 10px;  margin-bottom: 25px;">
            <img src="@/public/alerta.svg" alt="">
            <strong>Alerta!</strong> {{ props.mensagem }}
        </span>
    </div>
</template>