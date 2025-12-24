<template>

    <div id="Registration">
        <div id="RegistrationBox">
            <div id="box1">

                <form @submit.prevent="functionAct ? editFormSubmit(editIdx) : FormSubmit()">

                    <div id="Fields">

                        <div>
                            <label for="name" title="Name" id="Fields">Name:</label>

                        </div>
                        <div>
                            <label for="email" title="Email" id="Fields">Email</label>

                        </div>
                        <div>
                            <label for="reg" title="Reg" id="Fields">Reg:</label>

                        </div>
                        <div>
                            <label for="num" title="Phone" id="Fields">Phone</label>

                        </div>
                        <div>
                            <label for="Gender" title="Gender" id="Fields">Gender:</label>
                        </div>
                        <div>
                            <label for="message" title="message" id="Fields">message</label>
                        </div>
                    </div>

                    <div id="FieldsInput">
                        <input placeholder="Enter your name " name="Name" type="text" id="FieldsInput" v-model="name">
                        </input>
                        <input placeholder="Enter your email " name="Email" type="email" id="FieldsInput"
                            v-model="email"> </input>
                        <input placeholder="Enter your reg " name="Reg" type="text" id="FieldsInput" v-model="reg">
                        </input>
                        <input placeholder="Enter your phone number " name="Phone" type="tel" id="FieldsInput"
                            v-model="phone"> </input>
                        <input placeholder="Enter your gender" name="Gender" type="text" id="FieldsInput"
                            v-model="gender"> </input>
                        <input placeholder="Enter your message" name="Message" type="text" id="FieldsInput"
                            v-model="message"> </input>
                        <div>
                            <button type="submit" id="SubmitButton">Submit</button>
                        </div>
                    </div>

                </form>


            </div>
            <div id="box2">
                <div>
                    {{ SubmissionStatus }}
                </div>

                <table id="Table">
                    <thead>
                        <tr>
                            <th class="entry">Name</th>
                            <th class="entry">Email</th>
                            <th class="entry">Reg</th>
                            <th class="entry">Phone</th>
                            <th class="entry">Gender</th>
                            <th class="entry">Message</th>
                        </tr>
                    </thead>
                    <tbody id="TableEntry">

                    </tbody>
                </table>

            </div>


        </div>


    </div>
    <RegistrationPage2 :DataEntry=registeredUsersBox  :gettingData="getData" />

</template>

<script setup>
import { ref } from 'vue';
import { inject } from 'vue';
import RegistrationPage2 from './RegistrationPage2.vue';
const SubmissionStatus = ref("");
const name = ref("");
const email = ref("");
const reg = ref("");
const phone = ref("");
const gender = ref("");
const message = ref("");
const functionAct = ref(false) ; 
const registeredUsersBox = ref([]);
const editIdx = ref(-1) ; 
const registeredUsers = inject('registeredUsers');


const getData = (data)=>{
    console.log("data recieved from child " , data )
    functionAct.value = true ; 
    editIdx.value = data.index ;
    EditHandler(data.index , data.Val) ; 
}

const EditHandler = (index , Val)=>{    
        name.value = registeredUsersBox.value[index].name ,
        email.value = registeredUsersBox.value[index].email , 
        reg.value = registeredUsersBox.value[index].reg , 
        phone.value =registeredUsersBox.value[index].phone , 
        gender.value = registeredUsersBox.value[index].gender , 
        message.value = registeredUsersBox.value[index].message     
}

const editFormSubmit = (idx)=>{
registeredUsersBox.value[idx] =  {
            name: name.value,
            email: email.value,
            reg: reg.value,
            phone: phone.value,
            gender: gender.value,
            message: message.value
        } 

         SubmissionStatus.value = "Form Edit successfully!";
         functionAct.value = false;
  editIdx.value = -1;
    name.value = "";
    email.value = "";
    reg.value = "";
    phone.value = "";
    gender.value = "";
    message.value = "";

}



const FormSubmit = (e) => {
  
    console.log("Form submitted");
    SubmissionStatus.value = "Form submitted successfully!";




    let elem = document.createElement("tr");
    elem.innerHTML = `<td>${name.value}</td>
                    <td>${email.value}</td>
                    <td>${reg.value}</td>
                    <td>${phone.value}</td>
                    <td>${gender.value}</td>
                    <td>${message.value}</td>`;
               
    registeredUsers.value.push(
        {
            name: name.value,
            email: email.value,
            reg: reg.value,
            phone: phone.value,
            gender: gender.value,
            message: message.value
        }
    );

    registeredUsersBox.value.push({
        name: name.value,
        email: email.value,
        reg: reg.value,
        phone: phone.value,
        gender: gender.value,
        message: message.value
    })


    document.getElementById("TableEntry").appendChild(elem);
   

    name.value = "";
    email.value = "";
    reg.value = "";
    phone.value = "";
    gender.value = "";
    message.value = "";
}

</script>

<style scoped>
.entry {
    padding: 10px;
    border: 1px solid gray;
    text-align: center;
    color: white;
}

#SubmitButton {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(231, 61, 61);
    width: 50%;
}

#Registration {
    box-sizing: border-box;
    margin: 0;
    padding: 1%;
    height: 100vh;
    width: 100vw;
    background-color: #252424aa;
    display: flex;
    justify-content: space-between;
    align-items: center;

}


#RegistrationBox {
    width: 100%;
    height: 100%;
    margin: auto;

    display: flex;

    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#box1,
#box2 {
    width: 45%;
    height: 80%;
    padding: 2rem;


    display: flex;
    justify-content: start;
    align-items: center;
}

#Fields {
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: normal;
    display: flex;
    flex-direction: column;

}

#FieldsInput {
    margin: 0.2rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
    border-radius: 2rem;
}

#box2 {
    font-size: 2rem;
    font-weight: bold;
    color: yellowgreen;
    display: flex;
    flex-direction: column;
}

#box1 form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}


#Table,
#TableEntry {
    margin-top: 10px;
    font-size: 1rem;
    border-collapse: collapse;
    padding: 10px;
    height: auto;
    width: 100%;
}

#TableEntry {
    text-align: center;
}
</style>