<template>
  <div class="flex flex-col">
    <div class="flex">
      <input type="number" v-model="numberA" />
      <input type="number" v-model="numberB" />
    </div>

    <div>Local result: {{ add(numberA, numberB) }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { add } from 'shared';

const numberA = ref(1);
const numberB = ref(2);
</script>

<style>
.flex {
  display: flex;
  gap: 8px;
}

.flex-col {
  flex-direction: column;
}
</style>
