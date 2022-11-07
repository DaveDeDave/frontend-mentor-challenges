<script setup>
  defineProps({
    label: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <a :href="path" class="transition hover:text-soft-red">{{ label }}</a>
</template>
