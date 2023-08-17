<template>
  <div class="flex flex-col">
    <div class="flex">
      <input type="number" v-model="state.a" />
      <input type="number" v-model="state.b" />
    </div>

    <div>Local result: {{ localResult }}</div>

    <div>Remote result: {{ remoteResult }}</div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue';
import { add, serverPort } from 'shared';
import axios from 'axios';

const state = reactive({ a: 1, b: 2 });
const remoteResult = ref(null);

const localResult = computed(() => add(state.a, state.b));

const getRemoteResult = async () => {
  const { data } = await axios.get(`http://localhost:${serverPort}/add?${new URLSearchParams(state).toString()}`);
  remoteResult.value = data.result;
};

watch(state, () => getRemoteResult(), { deep: true });

getRemoteResult();
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
