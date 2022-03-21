<template>
  <div class="tabs row">
    <label v-for="type in types" :key="type.id" :class="[type.id == stateApp.type ? 'active' : '', 'tab col s4']">
      <input type="radio" name="type" :value="type.id" :checked="type.id === stateApp.type" @change="onChange">
      {{ type.name }}
    </label>
  </div>
</template>

<script setup lang="ts">
  const { state: stateApp, onChange, types } = useApp();
</script>

<style scoped lang="scss">
  .tabs {
    margin: 0 0 20px;
    display: flex;

    :first-child {
      border-radius: 5px 0 0 5px;
    }

    :last-child {
      border-radius: 0 5px 5px 0;
    }
  }
  .tab {
    cursor: pointer;
    background-color: #FFFFFF;
    border: 1px solid #DFE5EC;
    padding: 15px;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4A4A4A;
    text-overflow: ellipsis;
    overflow: hidden;

    &.active {
      background-color: #2196F3;
      border-color: #2196F3;
      color: #FFFFFF;
    }
    &:hover,
    &:focus {
      background-color: #F1FCFF;
      border-color: #DFE5EC;
      color: #4A4A4A;
    }
    &:not(:first-child) {
      border-left-color: transparent;
    }
  }
</style>