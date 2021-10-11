<template>
  <div class="container main">
    <h1 class="text-center add">Update Patient Data</h1>
    <form>
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Full name:</label>
            <input
              type="text"
              class="form-control input-lg"
              id="exampleInputEmail1"
              v-model="updatedpaInfo.fullname"
            />
          </div>
          <div class="form-group">
            <label>mobile number:</label>
            <input
              type="text"
              class="form-control input-lg"
              id="exampleInputPassword1"
              v-model="updatedpaInfo.mobile"
            />
          </div>
          <div class="form-group">
            <label>Age:</label>
            <input
              type="text"
              class="form-control input-lg"
              id="exampleInputPassword1"
              v-model="updatedpaInfo.age"
            />
          </div>
         
        </div>
        <div class="col-6 ">
          <div class="form-group">
            <label>code number:</label><br />
            <input
              type="text"
              class="form-control input-lg"
              id="exampleInputPassword1"
              v-model="updatedpaInfo.code_number"
            />
          </div>
          <div class="form-group">
            <label>Address:</label>
            <input
              type="text"
              class="form-control input-lg"
              id="exampleInputPassword1"
              v-model="updatedpaInfo.address"
            />
          </div>
           <label>Gender:</label><br />
          <label class="radio-inline" famele>
            <input type="radio" value="famele" v-model="updatedpaInfo.gender" />
            <img class="img-circle" src="../assets/imgs/11.jpg" />
          </label>
          <label class="radio-inline" male>
            <input type="radio" value="male" v-model="updatedpaInfo.gender" />
            <img class="img-circle" src="../assets/imgs/22.jpg" />
          </label>
        </div>
      </div>
    </form>
        <button
            @click="updatedata()"
            type="button"
            class="btn btn-primary btn-lg update  "
          >
            Update
          </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "update",
  data() {
    return {
      updatedpaInfo: {
        fullname: "",
        mobile: "",
        age: "",
        code_number: "",
        address: "",
        gender: "",
      },
    };
  },
  methods: {
    async updatedata() {
      let result = await axios.put(
        "http://localhost:3000/patients/"+this.$route.params.id,
        {
          fullname: this.updatedpaInfo.fullname,
          mobile: this.updatedpaInfo.mobile,
          age: this.updatedpaInfo.age,
          code_number: this.updatedpaInfo.code_number,
         address: this.updatedpaInfo.address,
          gender: this.updatedpaInfo.gender,
        }
      );
      if(result.status==200){
        this.$router.push({name:'patient_info'})
        
      }
    },
  },
  async mounted() {
    // let user=localStorage.getItem("user-information");
    // if(user){
    //   this.$router.push({name:'Home'})
    // }
    let result = await axios.get(
      "http://localhost:3000/patients/"+this.$route.params.id
    );
    this.updatedpaInfo=result.data;
    console.warn(this.updatedpaInfo);
  },
};
</script>
<style scoped>
h1 {
  margin: 40px 0;
  font-family: "Redressed", cursive;
  text-transform: capitalize;
  font-weight: bold;
}

.header {
  position: relative;

  background: rgb(138 132 132 / 18%);
}

.header .logo,
.header .logo i,
.header .time,
.header .phone,
.header .location {
  color: #222;
}
form img {
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 5px;
}
.update {
 margin:30px auto;
  line-height: 21px;
  display:block;
  font-size:30px;
   padding: 12px 25px;
  /* text-transform:uppercase; */
  /* font-family:inherit */

  
}
</style>
