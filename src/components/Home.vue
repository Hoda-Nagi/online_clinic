<template>
  <div class="header">
    <div class="container text-center">
      <div class="row">
        <div class="col  col-md-3 ">
          <span class="logo"><i class="fas fa-cannabis"></i>Online Clinic</span>
        </div>
        <div class="col  col-md-4 time d-none d-sm-none d-lg-block">
          <span> <i class="far fa-clock"></i></span>
          <span>Sunday-Thursday10 am - 6 Pm</span>
          <span>Saturday and Friday-Closed </span>
        </div>
        <div class=" col col-md-3  phone d-none d-sm-none d-lg-block">
          <span> <i class="far fa-phone-alt"></i></span>
          <span>+0201999976355</span>
          <span>D.Omar186@gmail.com</span>
        </div>
           <div class="col  col-md-2  location d-none d-sm-none d-lg-block">
          <span> <i class="far fa-map-marker"></i></span>
          <div style="margin-left:14px">
          <span>Egypt-Gharbia</span>
          <span>Almahall-2street</span>
          </div>
        </div>
        <!-- start menue at small screens -->
        <div class="menue  d-sm-block d-lg-none">
          <div class="dropdown show">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              +
            </a>

            <div class="dropdown-menu container" aria-labelledby="dropdownMenuLink">
              <div class=" time">
                <span> <i class="far fa-clock"></i></span>
                <span>Sunday-Thursday10 am - 6 Pm</span>
                <span>Saturday and Friday-Closed </span>
              </div>
              <div class="dropdown-divider"></div>
              <div class="location">
                <span> <i class="far fa-map-marker"></i></span>
                  <div class="location-div">
                <span>Egypt-Gharbia</span>
                <span>Almahall-2street</span>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class=" col col-md-3  phone">
                <span> <i class="far fa-phone-alt"></i></span>
                <div class="phone-div">
                <span>+0201999976355</span>
                <span>D.Omar186@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end menue -->
      </div>
    </div>
  </div>
  <!-- start carsoul-->
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/imgs/5.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption  d-md-block animate__animated animate__flash">
          <h1>Growing to <span>meet</span> your needs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
          </p>
          <button @click="openNav()" class="btn btn-primary text-center">
            start now
          </button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/imgs/5.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption  d-md-block animate__animated animate__flash">
          <h1>Medicine alwys <span> made</span>withe care</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
          </p>
          <button @click="openNav()" class="btn btn-primary text-center">
            start now
          </button>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- end carousle -->
  <!-- side nav -->
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
      >&times;</a
    >
    <router-link to="/addpatient">Add Patient</router-link>
    <router-link to="/services">Our Services</router-link>
    <a href="#">Contact</a>
    <a @click="logout()" href="">Log Out</a>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    openNav() {
      var sidenav = document.querySelector(".sidenav");
      sidenav.style.width = "250px";
    },
    closeNav() {
      var sidenav = document.querySelector(".sidenav");
      sidenav.style.width = "0px";
    },
    logout: function() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-information");
    if (!user) {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>
