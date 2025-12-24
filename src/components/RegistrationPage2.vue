

<template>

<div id="mainbody" >

    <div id="TableData">
        
        <Table>
            <thead>
                <tr>
                   <th class="entry"  >Name</th>
                    <th class="entry">Email</th>
                    <th class="entry" >Reg</th>
                    <th class="entry" >Phone</th>
                    <th class="entry" >Gender</th>
                    <th class="entry">Message</th>
                </tr>
                
            </thead>
            
            <tbody>
                <tr @dblclick="EditEntry(index)"  v-for="(item, index) in DataEntry" :key="index">
                   <td>{{ item.name}}</td>
                    <td>{{  item.email}}</td>
                     <td>{{ item.reg }}</td>
                      <td>{{item.phone  }}</td>
                       <td>{{ item.gender}}</td>
                        <td>{{  item.message}}</td> 
                </tr>
            </tbody>
        </Table>


    </div>

</div>

</template>

<script setup>

const props = defineProps({
    DataEntry : Array , 
    gettingData : Function , 
})

const EditEntry = (index)=>{
  const value = props.DataEntry[index] ; 
  const data  = {index : index , Val : value }  ; 
  props.gettingData(data)
}


</script>

<style scoped >
#mainbody{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: rgb(32, 31, 31);
    display: flex;
    justify-content: center;
    align-items: center;
}

#TableData{
    border: 2px solid white;
    height: 70vh;
    width: 90vw;
}
table{
    border-collapse: collapse;
    padding: 20px;
}
tr{
    padding: 0.5rem;
    width: 100%;

}
th{
    
    width: 2%;
    text-align: center;
    padding: 10px;
    color: orangered;
   
}
td{
    width: 2%;
    text-align: center;
    padding: 10px;
    cursor: pointer;
  
}
/* td::before{
       width: 2%;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: 2s;
}
td::after{
color:beige ;
font-size: 1rem;
} */
tr:hover{
    color: orchid;
    font-size: 1rem ;
    font-weight: 900;

}
thead{
    border-bottom: 1px solid white  ;
}

#line{
    width: 100%;
}



</style>