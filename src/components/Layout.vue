<template>
 <header>
   <Header/>
  </header>

  <main>
     <RouterView/>
    
  </main>

  <footer>
<Footer/>
  </footer>

</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import { provide } from 'vue';

const registeredUsers=ref([]) ;
provide('registeredUsers' , registeredUsers) ;
</script>