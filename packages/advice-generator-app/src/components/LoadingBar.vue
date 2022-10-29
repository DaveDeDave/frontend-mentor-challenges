<script setup>
const props = defineProps({
  loading: Number
});
</script>

<template>
  <div
    class="absolute top-0 left-0 h-1 bg-green-neon"
    :class="{
      'loading-transition': props.loading != 100 && props.loading != 0
    }"
    :style="`width: ${loading}%;`"
  ></div>
</template>

<style scoped>
.loading-transition {
  transition-duration: 10s;
  transition-timing-function: ease-out;
}
</style>
