<template>

<div>
page 3 Element 1
</div>

<div v-for="(value, idx) in userData" :key="idx">
  {{ idx }} :  {{ value }}
</div>



</template>




<script setup >

const props = defineProps({
     userData : Object
}) ;



</script>

<style scoped>

</style>