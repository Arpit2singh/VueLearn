import { createRouter, createWebHistory } from "vue-router";

// import Registration from "../Pages/Home.vue";
// import About from "../Pages/About.vue";
// import Contact from "../Pages/Contact.vue";
import Registration from "../Registration.vue";
import Page2 from "../Pages/Page2.vue";
import Page3 from "../Pages/Page3.vue";
import Layout from "../Layout.vue";

const Routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "registration",
                component: Registration
            },
            {
                path: "page2",
                component: Page2
            },
            {
                path: "page3",
                component: Page3
            }
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes: Routes,
})