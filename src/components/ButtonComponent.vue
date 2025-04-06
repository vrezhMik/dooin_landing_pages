<script lang="ts" setup>
const props = defineProps(['name'])
</script>

<template>
  <button>{{ props.name }}</button>
</template>

<style scoped lang="scss">
@use './../styles/variables' as variables;

button {
  min-width: 150px;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  border: 1px solid variables.$primary-grey;
  border-radius: 50px;
  color: variables.$primary-black;
  transition: 0.2s ease;
  box-shadow: 1px 1px 2px rgba(16, 24, 40, 0.05);
  &:hover {
    background-color: variables.$primary-orange;
    color: variables.$primary-white;
    transition: 0.2s ease;
  }
}
</style>
