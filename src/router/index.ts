import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import AdminPage from '../pages/Admin.vue'
import NewPage from '../pages/New.vue'
import BlogPage from "../pages/Blog.vue";

const routes = [
    { path: '/', component: HomePage, name: "Home" },
    { path: '/post/:id', component: BlogPage, name: "Blog" },
    { path: '/new', component: NewPage, name: "New" },
    { path: '/admin', component: AdminPage, name: "Admin" }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;