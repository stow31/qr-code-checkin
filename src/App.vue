<template>
  <header>
    <NavBar />
  </header>
  <main class="grid grid-cols-12">
    <div class="col-span-6">
        <FileInput />
    </div>
    <div class="col-span-6"></div>
  </main>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import FileInput from "./components/FileInput.vue";
</script>

<style scoped></style>
