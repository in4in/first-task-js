<template>
  <div class="card-panel">
    <div class="card-panel__title">Количество пересадок</div>
    <label class="card-panel__item" v-for="transfer in transfers" :key="transfer.id">
      <input type="checkbox" name="transfer" :value="transfer.id" :checked="stateApp.transfer.includes(transfer.id)" @change="onChange"/>
      <span>{{ transfer.name }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  const { state: stateApp, onChange, transfers } = useApp();
</script>