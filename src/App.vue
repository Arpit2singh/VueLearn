<script setup>
import Header from './components/Header.vue';
import Registration from './components/Registration.vue';

import Footer from './components/Footer.vue';
import Layout from './components/Layout.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style scoped>
main {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}
</style>
