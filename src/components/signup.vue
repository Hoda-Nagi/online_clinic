<template>
  <div class="signup ">
    <div class="container-fluid">
      <div class="row">
        <div class=" col-6 col-md-8 ">
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
                  <span class="logo"
                    ><i class="fas fa-cannabis"></i>Online Clinic</span
                  >
                </div>
                <img src="../assets/imgs/1.jpeg" class="img-fluid" />
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
        <div class="col-6 col-md-4">
          <form class="form-group ">
            <div class="text text-center">User SignUp</div>
            <label>your Name:</label>
            <i class="fas fa-user input-i"></i>
            <input
              class="form-control"
              type="text"
              v-model="name"
              placeholder="Name"
              required
            />
            <label>your Email:</label>
            <i class="fas fa-envelope input-i"></i>
            <input
              class="form-control "
              type="email"
              v-model="email"
              placeholder="Email"
              required
            />
            <i class="fas fa-lock input-i"></i>
            <label>your Password:</label>
            <input
              class="form-control "
              type="password"
              v-model="password"
              placeholder="password"
              required
            />
            <div class="btns">
              <button
                @click="signup()"
                type="submit"
                class="btn btn-primary btn-block "
              >
                Sign Up
              </button>
              <span>Already have an email </span>
              <router-link class="signlog" to="/log-in">log In</router-link>
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
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      }
  },
  methods: {
    // send data
    async signup() {
      if (this.name == "" || this.email == "" || this.password == "") {
        return true;
      } else {
        document.querySelector("button").setAttribute("type", "button");
        let result = await axios.post("http://localhost:3000/user", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
	
        if (result.status == 201) {
          localStorage.setItem("user-information", JSON.stringify(result.data));
          this.$router.push({ name: "Home" });
        }
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-information");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  }


};
</script>
<style scoped>
html,
body {
  height: 100%;
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

.signup,
.signup .row {
  height: 100%;
  width: 100%;
}
.signup .col-md-8 {
  height: 100%;
}
.container-fluid {
  padding-left: 0;
  height: 100%;
}

.signup .overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-right: 0px;
  padding: 50px 0;
}

.signup .logo i {
  color: #fff;
  font-size: 33px;
  margin-right: 6px;
}
.signup .logo {
  font-size: 40px;
  font-weight: bold;
  font-family: "Redressed", cursive;
  color: #fff;
}
@media (max-width: 575.98px) {
  .signup .logo {
    font-size: 29px;
  }
}
.signup .logo:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin: 5px auto;
  background-color: #009dff;
}
.signup img {
  height: 100%;
  width: 100%;
}
.signup p {
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Redressed", cursive;
  font-size: 40px;
  color: #fff;
  margin-top: 40px;
}
.signup .text {
  font-size: 30px;
  font-weight: bold;
  color: #222;
  margin-bottom: 30px;
  font-family: "Redressed", cursive;
}
.signup .text:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin: 8px auto;
  background-color: #009dff;
}
.signup .col-md-4 {
  padding-top: 50px;
}
.signup .col {
  padding-right: 0;
}
.signup label {
  font-weight: 500;
  padding-bottom: 0px;
}
.signup .input-i {
  position: absolute;
  left: 16px;
  color: #009dff;
}
.signup .fa-user {
  top: 179px;
}
.signup .fa-envelope {
  top: 290px;
}
.signup .fa-lock {
  top: 400px;
}
.signup .form-control {
  border: unset;
  border-bottom: 1px solid #ced4da;
  margin-bottom: 40px;
  text-indent: 13px;
  font-size: 16px;
}

.signup .form-control:focus {
  box-shadow: none;
  border-color: #80bdff;
}
.signup .btns {
  margin: auto;
  margin: auto;
  text-align: center;
}
.signup .btns button:first-of-type {
  margin-right: 40px;
  border-radius: 30px;
  margin-bottom: 30px;
}
.signup .btns button,
.signup .button {
  color: #fff;
  margin: auto;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  background-image: linear-gradient(to bottom, #009dff, Black);
}
.signup .btns span {
  font-family: "Redressed", cursive;
  font-size: 20px;
}
.signup .signlog {
  font-weight: bold;
  font-family: "Redressed", cursive;
  font-size: 20px;
}
</style>
