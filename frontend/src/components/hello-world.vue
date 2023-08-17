<script setup>
import { add, serverPort } from 'shared';
import { ref } from 'vue';

const numberA = ref(1);
const numberB = ref(2);
</script>

<template>
  <div>Hello World</div>
  <div>Server Port: {{ serverPort }}</div>
  <div>Local add: {{ add(numberA, numberB) }}</div>
</template>
