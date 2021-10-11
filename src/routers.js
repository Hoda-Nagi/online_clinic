import {createRouter,createWebHistory} from "vue-router";
import Home from "./components/Home.vue"
import Add from "./components/addpatient.vue";
import signup from "./components/signup.vue"
import login from "./components/login.vue"
import patient_info from "./components/patient-info.vue";
import update from "./components/update.vue"
import services from "./components/services.vue"
const routes=[
    {
        path:'/',
        name:"Home",
        component:Home,

    },
    {
        path:'/addpatient',
        name:"Add",
        component:Add,

    },
    {
    path:'/sign-up',
    name:"signup",
    component:signup
    },
    {
    path:'/log-in',
    name:"login",
    component:login
    },
    {
    path:'/patient-info',
    name:"patient_info",
    component:patient_info
    },
    {
    path:'/update/:id',
    name:"update",
    component:update
    },
    {
        path:'/services',
        name:"services",
        component:services
        }

]
const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router;