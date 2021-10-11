<template>
  <!-- start form -->
  <div class="cover">
    <div class="container main">
      <h1 class="text-center add">
        Welcome
        <span :style="'color:#009dff;text-transform:capitalize'">
          {{ username }}
        </span>
        Add a new patient
      </h1>
      <form>
        <div class="row animate__animated">
          <div class="col-6  animate__animated animate__fadeInLeft ">
            <div class="form-group">
              <label>Full name:</label>
              <input
                type="text"
                class="form-control input-lg"
                id="exampleInputEmail1"
                v-model="patientInfo.fullName"
                :key="patientInfo.id"
                required="required"
              />
            </div>
            <div class="form-group">
              <label>mobile number:</label>
              <input
                type="text"
                class="form-control input-lg"
                id="exampleInputPassword1"
                v-model="patientInfo.mobileNumber"
                required
              />
            </div>
            <div class="form-group">
              <label>Age:</label>
              <input
                type="text"
                class="form-control input-lg"
                id="exampleInputPassword1"
                v-model="patientInfo.age"
                required
              />
            </div>
          </div>
          <div class="col-6 animate__animated animate__fadeInRight">
            <div class="form-group">
              <label>code number:</label><br />
              <input
                type="text"
                class="form-control input-lg"
                id="exampleInputPassword1"
                v-model="patientInfo.codeNumber"
                required
              />
            </div>
            <div class="form-group">
              <label>Address:</label>
              <input
                type="text"
                class="form-control input-lg"
                id="exampleInputPassword1"
                v-model="patientInfo.address"
                required
              />
            </div>
            <label>Gender:</label><br />
            <label class="radio-inline" female>
              <input type="radio" value="female" v-model="patientInfo.gender" />
              <img class="img-circle" src="../assets/imgs/11.jpg" />
            </label>
            <label class="radio-inline" male>
              <input type="radio" value="male" v-model="patientInfo.gender" />
              <img class="img-circle" src="../assets/imgs/22.jpg" />
            </label>
          </div>
        </div>
      </form>
      <div class="Addbtn">
        <button
          @click.prevent="this.$router.push({ name: 'Home' })"
          type="submit"
          class="btn btn-primary "
        >
          Back
        </button>
        <button @click="saveinfo()" type="submit" class="btn btn-primary ">
          save and contimue
        </button>
      </div>
    </div>
    <!-- end form -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      username: "",
      patientInfo:
        {
          fullName: "",
          mobileNumber: "",
          age: "",
          codeNumber: "",
          address: "",
          gender: "",
        }
    };
  },
  methods: {
    async saveinfo() {
      //if not data
        let result = await axios.post("http://localhost:3000/patients", {
          fullname: this.patientInfo.fullName,
          mobile: this.patientInfo.mobileNumber,
          age: this.patientInfo.age,
          code_number: this.patientInfo.codeNumber,
          address: this.patientInfo.address,
          gender: this.patientInfo.gender,
        });
        if (result.status == 201) {
          this.$router.push({ name: "patient_info" });
        }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-information");
    this.username = JSON.parse(user).name;
  },
};
</script>
<style scoped>

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
.addbtn button:first-of-type {
  float: left;
}
.Addbtn button:last-of-type {
  float: right;
}
</style>
