import {createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Photo from "../views/Photo.vue";
import Video from "../views/Video.vue";
import Web from "../views/Web.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Resume from "../views/Resume.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/photo",
      name: "Coolhouse Airconditioning",
      component: Photo,
    },
    {
      path: "/video",
      name: "Neil Felipp Luxury Brand",
      component: Video,
    },
    {
      path: "/web",
      name: "Makobi Jeans USA",
      component: Web,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;