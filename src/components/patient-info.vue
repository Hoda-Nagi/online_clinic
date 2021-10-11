<template>
<div class="cover">
  <h1 class="text-center add">Patient Data</h1>
  <table class="table table-striped  ">
    <thead>
      <tr>
        <th scope="col ">id</th>
        <th scope="col ">Full Name</th>
        <th scope="col ">Mobile Number</th>
        <th scope="col ">Age</th>
        <th scope="col ">Code Number</th>
        <th scope="col ">Address</th>
        <th scope="col ">Gender</th>
        <th scope="col ">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in patient_info" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.fullname }}</td>
        <td>{{ item.mobile }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.code_number }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.gender }}</td>
        <td>
          <router-link class="update" :to="'/update/' + item.id"
            >UPdate</router-link
          >
          <a href="" @click.prevent="deletedata(item.id)" class="delete">Delete</a>
        </td>
      </tr>
    </tbody>
  </table>
      <button
            @click.prevent="this.$router.push({ name: 'Home' })"
            type="submit"
            class="btn btn-primary btn-lg "
          >
            Back 
          </button>
          </div>
</template>
<script>
import axios from "axios";
export default {
  name: "patient_info",
  data() {
    return {
      patient_info: [],
    };
  },
  methods: {
async deletedata(id){
  let result=await axios.delete("http://localhost:3000/patients/"+id);
  if(result.status ==200){
    this.loaddata()
  }
},
async loaddata(){
  let result = await axios.get("http://localhost:3000/patients");
    this.patient_info = result.data;
}
  },
  async mounted() {
   this.loaddata()
  },
};
</script>
<style scoped>
 .cover{
  background-image: url('../assets/imgs/222.jpg');
  background-size: cover;
  height:100%;
  margin:0
} 
h1 {
  margin:0;
  padding:40px 0;
  font-family: "Redressed", cursive;
  text-transform: capitalize;
  font-weight: bold;
}
table .update {
  color: #009dff;
  margin-right: 15px;
}
table .delete {
  color: red;
}
button{
   margin-left:50px;
    display: block;
    margin-top:100px;
   /* padding: 6px 38px; */
     font-family: "Redressed", cursive;
    font-size: 25px;
}
</style>
