<script lang="ts" setup>
import ArrowIcon from './Icons/ArrowIcon.vue'
const props = defineProps(['name'])
</script>

<template>
  <button class="flex">
    {{ props.name }}
    <div class="arrow-border flex">
      <ArrowIcon />
    </div>
  </button>
</template>

<style scoped lang="scss">
@use './../styles/_variables' as variables;

button {
  align-items: center;
  column-gap: 12px;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  border: 1px solid variables.$primary-grey;
  border-radius: 50px;
  color: variables.$primary-white;
  box-shadow: 1px 1px 2px rgba(16, 24, 40, 0.05);
  background: variables.$primary-color;
  background: linear-gradient(0deg, variables.$primary-color 0%, hsla(230, 60%, 18%, 1) 100%);
  background: -moz-linear-gradient(0deg, variables.$primary-color 0%, hsla(230, 60%, 18%, 1) 100%);
  background: -webkit-linear-gradient(
    0deg,
    variables.$primary-color 0%,
    hsla(230, 60%, 18%, 1) 100%
  );
  &:hover {
    background: variables.$primary-color;
  }
}

.arrow-border {
  background-color: variables.$primary-white;
  padding: 8px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  svg {
    height: 16px;
    width: 16px;
  }
}
</style>
