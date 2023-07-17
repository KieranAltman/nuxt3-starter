<template>
  <div class="shadow-lg transition-all shadow-slate-200 dark:shadow-stone-800">
    <div class="max-w-[80rem] h-20 px-12 flex items-center mx-auto">
      <h1 class="flex items-center gap-2 text-sm font-semibold">
        <img src="~~/assets/images/logo.png" class="w-10" alt="" />
        <span>Nuxt3 Starter</span>
      </h1>
      <button
        type="button"
        class="ml-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="switchThemeMode"
      >
        <IconsSun class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { switchThemeMode } = useThemeMode()
</script>

<style></style>
