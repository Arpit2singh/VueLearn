<template>

<div>
page 3 Element 2
</div>

<div v-for="(value, idx) in userData" :key="idx">
  {{ idx }} :  {{ value }}
</div>



</template>




<script setup >

const props = defineProps({
     userData : Object
}) ;

console.log(props.selectedData) ;
</script>

<style scoped>

</style>