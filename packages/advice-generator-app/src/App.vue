<script setup>
import { ref, onBeforeMount } from "vue";
import LoadingBar from "./components/LoadingBar.vue";

onBeforeMount(() => {
  fetchAdvice();
});

const fetchAdvice = async () => {
  loading.value = 90;
  const response = await fetch("https://api.adviceslip.com/advice");
  const result = await response.json();
  if (id.value == result.slip.id) return fetchAdvice();
  id.value = result.slip.id;
  advice.value = result.slip.advice;
  loading.value = 100;
  setTimeout(() => {
    loading.value = 0;
  }, 100);
};

const id = ref("");
const advice = ref("");
const loading = ref(0);
</script>

<template>
  <LoadingBar :loading="loading" />
  <div class="flex flex-col flex-1 justify-center items-center bg-blue-dark">
    <div
      class="relative flex flex-col gap-7 mx-4 px-6 pt-8 pb-14 max-w-[350px] rounded-lg bg-blue-grayish-dark text-cyan-light text-center"
    >
      <div class="text-xs text-green-neon font-">ADVICE # {{ id }}</div>
      <div class="">"{{ advice }}"</div>
      <div>
        <img src="/pattern-divider-desktop.svg" class="hidden sm:block" />
        <img src="/pattern-divider-mobile.svg" class="sm:hidden" />
      </div>
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-row justify-center"
      >
        <button
          @click="fetchAdvice"
          :disabled="loading != 0"
          class="bg-green-neon shadow-glow shadow-green-neon p-3 rounded-full transition duration-200"
          :class="{ 'cursor-not-allowed': loading != 0 }"
        >
          <img src="/icon-dice.svg" class="w-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.shadow-glow:hover {
  box-shadow: 0 0 14px 1px #52ffa8;
}
</style>
