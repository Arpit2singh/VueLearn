<template>

<div id="page2" >

         <table id="Table" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Reg</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody id="TableEntry">
              <tr v-for="(entry, index) in dataEntry" :key="index">
               <td>{{entry.name}}</td>
                <td>{{entry.email}}</td>
                 <td>{{entry.reg}}</td>
                  <td>{{entry.phone}}</td>
                   <td>{{entry.gender}}</td> 
                   <td>{{entry.message}}</td>
              </tr>
            </tbody>
        </table>

 

</div>


    </template>

    <script setup>
        import { inject ,ref } from 'vue';
        const dataEntry=inject('registeredUsers') ;
        console.log("Page2")
        for(let i = 0 ; i <dataEntry.length ; i++){
            console.log(dataEntry[i]) ;
        }
    </script>

    <style scoped>

#page2{
    height : 100vh ; 
    width : 100vw ; 
    display : flex ; 
    justify-content :center ; 
    align-items : start ; 
    padding : 1rem ; 
    margin : 0 10px ; 
}
#Table{
    width: 90%;
    height: 90%;
    border: 2px solid gray;
    border-radius: 10px;
    border-collapse: collapse;
    padding: 1rem;
    table-layout: fixed;
}

#TableEntry{
    display: block;
    max-height: 70vh;
    overflow-y: auto;
}

#Table thead,
#TableEntry tr{
    display: table;
    width: 100%;
    table-layout: fixed;
}

#Table th,
#Table td{
    padding: 1rem;
    text-align: left;
    width: 16.66%;
}

#Table th{
    color: tomato;
    font-size: 1.2rem;
}





    </style>