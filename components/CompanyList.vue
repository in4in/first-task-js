<template>
  <div class="card-panel">
    <div class="card-panel__title">Компания</div>
    <label class="card-panel__item">
      <input type="radio" name="company" value="" :checked="'' === stateApp.company" @change="onChange">
      <span>Все</span>
    </label>
    <label class="card-panel__item" v-for="company in stateCompany.companies" :key="company.id">
      <input type="radio" name="company" :value="company.id" :checked="company.id === stateApp.company" @change="onChange" />
      <span>{{ company.name }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  const service = useData('companies');
  const { state: stateApp, onChange } = useApp();
  const { state: stateCompany, setCompanies } = useCompanies();
  setCompanies(service.list());
</script>