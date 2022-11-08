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
  <main class="flex h-screen">
    <LoadingBar :loading="loading" />
    <div class="flex flex-1 flex-col items-center justify-center bg-blue-dark">
      <div
        class="relative mx-4 flex max-w-[550px] flex-col gap-8 rounded-xl bg-blue-grayish-dark px-6 pt-12 pb-[4.5rem] text-center text-cyan-light sm:px-14"
      >
        <div class="font-mono font-bold tracking-[0.2rem] text-green-neon">
          ADVICE #{{ id }}
        </div>
        <h1 class="text-3xl">"{{ advice }}"</h1>
        <div>
          <img
            src="/pattern-divider-desktop.svg"
            class="hidden w-full sm:block"
            alt="Pattern divider"
          />
          <img
            src="/pattern-divider-mobile.svg"
            class="w-full sm:hidden"
            alt="Pattern divider"
          />
        </div>
        <div
          class="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 flex-row justify-center"
        >
          <div
            @click="fetchAdvice"
            :disabled="loading != 0"
            class="shadow-glow rounded-full bg-green-neon p-5 shadow-green-neon transition duration-200"
            :class="{
              'hover:cursor-not-allowed': loading,
              'hover:cursor-pointer': !loading
            }"
          >
            <img src="/icon-dice.svg" class="w-6" alt="Dice icon" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
  .shadow-glow:hover {
    box-shadow: 0 0 14px 1px #52ffa8;
  }
</style>
