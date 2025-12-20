<template>

<div style="padding: 1rem;" >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quas expedita sunt
     reprehenderit nihil nisi dolorum! Quis rem exercitationem soluta ab corporis eaque minu
     s aliquid quo voluptatum! Eos iusto necessitatibus dolorem alias ut ad ipsum consequat
     ur perspiciatis adipisci dolor odit laborum distinctio sequi deserunt iste dicta, illu
     m ullam veritatis! Repellendus ipsam, itaque sequi nobis porro doloremque dolor rerum 
     ea similique explicabo animi, repudiandae distinctio voluptatibus? Modi nisi tempor
     e asperiores totam odit. Enim fugiat sunt impedit libero expedita eos? Ab maiores s
     imilique officia repellat accusantium nesciunt tempora mollitia impedit aspernatur vol
     uptatum id magnam quibusdam, quos, molestias a voluptatibus aliquid numquam et.
</div>

<div  style="padding: 1rem;">
    <button @click="activeComponent = Page2element1 ; selectedData = DataA" >Show Element 1</button>
    <button @click="activeComponent = Page2element2 ; selectedData = DataB" >Show Element 2</button>
</div>

<div style="padding: 1rem;">
    <component :is="activeComponent" :userData="selectedData" />
</div>


</template>




<script setup >

import { inject } from 'vue';
import { RouterView } from 'vue-router';
import Page2element1 from './Element/Page2element1.vue';
import Page2element2 from './Element/Page2element2.vue';
import { ref } from 'vue';
const activeComponent=ref(Page2element1) ;

const userData=inject('registeredUsers') ;
console.log("Page3") ;
for(let i = 0 ; i <userData.length ; i++){
    console.log(userData[i]) ;
}

const DataA = ref({
    name: 'John Doe',
    email: 'john@example.com',
    reg: '123456',
    phone: '555-1234',
})

const DataB = ref({
    name: 'Jane Smith',
    email: 'jane@example.com',
    reg: '789012',
    phone: '555-5678',
})
const selectedData=ref(DataA) ;
</script>

<style scoped>

</style>