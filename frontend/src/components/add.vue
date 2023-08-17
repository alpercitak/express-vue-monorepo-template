<template>
  <div class="flex flex-col">
    <div class="flex">
      <input type="number" v-model="data.a" />
      <input type="number" v-model="data.b" />
    </div>

    <div>Local result: {{ localResult }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { add } from 'shared';

const data = ref({ a: 1, b: 2 });

const localResult = computed(() => add(data.value.a, data.value.b));
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
