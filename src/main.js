import { createApp } from "vue";
import App from "./App.vue";
// import Vue from 'vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import router from "./routers";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



createApp(App)
  .use(router)
  .mount("#app");


