<template>
  <Hello :title="t('hello')" />
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
