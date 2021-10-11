<template>
  <div class="services">
    <div class="header ">
      <div class="container text-center">
        <div class="row">
          <div class="col  col-md-3 ">
            <span class="logo"
              ><router-link to="/"
                ><i class="fas fa-cannabis"></i>Online Clinic</router-link
              ></span
            >
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
        </div>
      </div>
    </div>
    <!-- end header -->
    <!-- start carsoul-->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/imgs/5.jpg" class="d-block w-100" alt="..." />
          <div
            class="carousel-caption  d-md-block animate__animated animate__backInRight "
           
          >
            <h3>what can we offer you</h3>
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/imgs/5.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption  d-md-block " data-aos="fade-left">
            <h3>what can we offer you</h3>
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- start show services section -->
    <div class="show-services">
      <div class="container">
        <div class="row fir-row">
          <div
            class="col col-12 col-md-3 animate__animated animate__fadeIn  animate__delay-2s "
          >
            <img src="../assets/imgs/3.jpg" />
            <i class="fas fa-heartbeat "></i>
            <p class="text">heart</p>
            <h2>heart disease</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div
            class="col col-12 col-md-3 animate__animated animate__fadeIn  	"
          >
            <img src="../assets/imgs/4.jpg" />
            <i class="fas fa-tooth"></i>
            <p class="text">tooth</p>
            <h2>Dental disease</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div
            class="col col-12 col-md-3 animate__animated animate__fadeIn animate__delay-3s 	"
          >
            <img src="../assets/imgs/24.jpg" />
            <i class="fas fa-smile-beam"></i>
            <p class="text">cosmetics</p>
            <h2>cosmetic care</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div class="col col-12 col-md-3 animate__animated animate__fadeIn   ">
            <img src="../assets/imgs/25.jpg" />
            <i class="fas fa-child"></i>
            <p class="text">children</p>
            <h2>children disease</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
        </div>
        <!-- second row -->
        <div class="row sec-row ">
          <div
            class="col col-12 col-md-3 animate__animated animate__fadeIn  animate__delay-4s   "
          >
            <img src="../assets/imgs/27.jpg" />
            <i class="fas fa-heartbeat"></i>
            <p class="text">kidney</p>
            <h2>internal disease</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div class="col col-12 col-md-3 animate__animated animate__fadeIn  ">
            <img src="../assets/imgs/28.jpg" />
            <i class="fas fa-tooth"></i>
            <p class="text">fitness</p>
            <h2>obesity diseases</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div
            class="col col-12 col-md-3 animate__animated animate__fadeIn  animate__delay-5s "
          >
            <img src="../assets/imgs/29.jpg" />
            <i class="fas fa-smile-beam"></i>
            <p class="text">cosmetics</p>
            <h2>bone diseases</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div class="col col-12 col-md-3 animate__animated animate__fadeIn  ">
            <img src="../assets/imgs/30.jpg" />
            <i class="fas fa-child"></i>
            <p class="text">children</p>
            <h2>mental illness</h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end show services section -->
  <!-- start process -->
  <div class="process">
    <div class="overlay">
      <div class="container">
        <h3>how we do it</h3>
        <h1>our process</h1>
        <!--  " -->
        <div class="row animate__animated animate__slideInLeft">
          <div class="col col-12 col-md-4">
            <i class="fas  fa-hand-holding-heart"></i>
            <p>what we do</p>
            <h2>we care about you</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div class="col col-12 col-md-4">
            <i class="fas fa-hospital-user"></i>
            <p>we give you</p>
            <h2>medical service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
          <div class="col col-12 col-md-4">
            <i class="fas fa-ambulance"></i>
            <p>we offer professional sercices</p>
            <h2>effeicient instruments</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end process -->
  <!-- start proffesional services -->
  <div class="professional ">
    <div class="container">
      <div>
      <h3>proffesional mediacl services</h3>
      <h1>All the Way</h1>
      </div>
      <div>
      <img class="d-none d-lg-block"
        src="../assets/imgs/2.jpg"
      />
      </div>
      <div class="row ">
        <div class="col col-12 col-md-4">
          <p class="number">{{ counter1 }}</p>
          <h2>years with you</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
          </p>
        </div>
        <div class="col col-12 col-md-4">
          <p class="number">{{ counter2 }}</p>
          <h2>Doctors</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
          </p>
        </div>
        <div class="col  col-12 col-md-4">
          <p class="number">{{ counter3 }}</p>
          <h2>Awards</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- end proffesional services -->
  <!-- start footer -->
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col col-12 col-md-5">
          <h3>Get In Touch</h3>
          <h1>Contact us now</h1>
          <p style="width:80%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <div class="emergency">
            <h4><i class="fas fa-first-aid"></i>Emergency contact</h4>
            <span>free call: 123456789</span>
          </div>
          <div class="emergency">
            <h4><i class="fal fa-hospital-symbol"></i>Home visit</h4>
            <span>chargable call: 177723590</span>
          </div>
        </div>
        <div class="col col-12 col-md-3 serv">
          <h3>24 hours service</h3>
          <ul>
            <li>latest treatment included</li>
            <li>Additional 10% for next visit</li>
            <li>free teeth whitening</li>
          </ul>
        </div>
        <div class="col col-12 col-md-4 activity">
          <h3>Our Activitiy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu
          </p>
          <div class="social">
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""> <i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
      <div class=" copyr text-center">
        <p>Copyright by <span>hoda_nagi</span> 2021. All right reserved</p>
      </div>
    </div>
  </div>
  <!-- end footer -->
</template>
<script>
export default {
  name: "services",
  data() {
    return {
      counter1: 1,
      counter2: 10,
      counter3: 15,
      timer: null,
    };
  },
  methods: {
    increnum(event) {
      // Any code to be executed when the window is scrolled
      this.timer = setInterval(() => {
        this.counter1 = this.counter1 += 1;
        this.counter2 = this.counter2 += 1;
        this.counter3 = this.counter3 += 1;
        if (this.counter1 == 40) {
          clearInterval(this.timer);
        }
      }, 300);
      console.log("sehgt", event);
    },
  },
  mounted() {
    // this.increnum();
    window.addEventListener("scroll", this.increnum());
  },
};
</script>

<style scoped>
@import "../assets/css/_services.css";
</style>
