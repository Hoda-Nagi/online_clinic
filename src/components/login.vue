<template>
  <div class="login">
      <div class="container-fluid">
      <div class="row">
        <div class="col-6 col-md-8">
          <!-- start carousel -->
          <div
      id="carousel-fade"
      class="carousel carousel-fade"
      data-ride="carousel"
      data-interval="2000"
    >

      <div
        class="carousel-inner embed-responsive embed-responsive-16by9"
        role="listbox"
      >
        <div class="carousel-item embed-responsive-item active">
           <div class="overlay text-center">
               <span class="logo"><i class="fas fa-cannabis"></i>Online Clinic</span>
           </div>
          <img
            src="../assets/imgs/1.jpeg"
            class="img-fluid"
          />
          <div class="carousel-caption">
            <h1>Creative and efficient team</h1>
          </div>
        </div>

        <div class="carousel-item embed-responsive-item">
           <div class="overlay"></div>
          <img
            src="../assets/imgs/12.jpg"
            alt="Second slide image"
            class="img-fluid"
          />
          <div class="carousel-caption">
            <h1>Always be with you</h1>
          </div>
        </div>

        <div class="carousel-item embed-responsive-item ">
          <div class="overlay"></div>
          <img
            src="../assets/imgs/13.jpg"
            alt="Third slide image"
            class="img-fluid"
          />
          <div class="carousel-caption">
            <h1>Easier and comfortable services</h1>
          </div>
        </div>
      </div>
    </div>
        <!-- end carousel -->
        </div>
        <!-- start form -->
        <div class=" col-6 col-md-4">
    <form class="form-group ">
      <div class="text text-center">user Log In</div>
      <div class="error">Sorry,Invalid Email. Sign Up ,please</div>
       <label>your Email:</label>
        <i class="fas fa-envelope input-i"></i>
      <input
        class="form-control "
        type="text"
        placeholder="Email"
        v-model="email"
      />
       <label>your password:</label>
        <i class="fas fa-lock input-i"></i>
      <input
        class="form-control"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <div class="btns text-center">
        <button @click.prevent="login()" class="btn btn-primary btn-block">
          log In
        </button>
      <span>Dont have an email </span>
        <router-link class="signlog" to="/sign-up">Sign Up</router-link>
      </div>
    </form>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem(
          "user-information",
          JSON.stringify(result.data[0])
        );
        this.$router.push({ name: "Home" });
      } else {
        document.querySelector(".error").style.opacity = "1";
        console.warn("invalid");
      }
    },
  },

  //   mounted() {
  //     let user = localStorage.getItem("user-information");
  //     if (user) {
  //       this.$router.push({ name: "Home" });
  //     }
  //   },
};
</script>
<style scoped>
html {
  height: 100%;
}
.login,
.login .row {
  height: 100%;
  width: 100%;
}
.login .container-fluid{
  padding-left:0;
  height:100%;
}
.login .col-md-8 {
  height: 100%;
}
.login .overlay {
  background-color:rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-right:0px;
  padding:50px 0
}
.login .logo i {
  color: #fff;
  font-size:33px;
  margin-right: 6px;
}
.login .logo {
  font-size: 40px;
  font-weight: bold;
  font-family: "Redressed", cursive;
  color: #fff;
}
@media (max-width:575.98px){
  .login .logo {
  font-size:29px;}
}
.login .logo:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin: 5px auto;
  background-color: #009dff;
}
.carousel.carousel-fade .carousel-item {
  display: block;
  opacity: 0;
  -webkit-transition: opacity ease-out 0.7s;
  transition: opacity ease-out 0.7s;
}

.carousel.carousel-fade .carousel-item.active {
  opacity: 1 !important;
}
.login img {
  height:100%;
  width:100%;
  /* padding-right:0 */
 
}
.login .text {
  font-size: 30px;
  font-weight: bold;
  color: #222;
  margin-bottom: 30px;
   font-family: "Redressed", cursive;
}
.login .text:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin:8px auto;
  background-color: #009dff;
}
.login .col-md-4 {
  padding-top: 50px;
}

.login label {
  font-weight: 500;
  padding-bottom: 0px;
}
.login .input-i {
  position: absolute;
  left: 16px;
  color: #009dff;
}
.login .fa-envelope {
  top:218px;
}
@media (max-width: 575.98px){
  .login .fa-envelope {
  top:243px;
}
}
.login .fa-lock {
  top: 337px;
}
@media (max-width: 575.98px){
  .login .fa-envelope {
  top:243px;
}
.login .fa-lock {
  top: 360px;
}
}
.login .form-control {
  border: unset;
  border-bottom: 1px solid #ced4da;
  margin-bottom: 50px;
  text-indent:13px
}
.login .form-control:focus {
  box-shadow: none;
  border-color: #80bdff;
}
.login.btns {
  margin: auto;
  margin: auto;
  text-align: center;
}
.login .btns button:first-of-type {
  margin-right: 40px;
  border-radius: 30px;
  margin-bottom: 30px;
}
.login .btns button,
.login .button {
  color: #fff;
  margin: auto;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  font-weight:bold;
   background-image: linear-gradient(to bottom, #009dff, Black);
}
.login .btns span{
   font-family: "Redressed", cursive;
   font-size:20px
}
.login .signlog {
  font-weight: bold;
   font-family: "Redressed", cursive;
    font-size:20px
}
.error{
 opacity:0;
  color:red;
  font-weight:500;
  margin-bottom:15px
}
</style>
