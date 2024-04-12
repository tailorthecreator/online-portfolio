<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "../../views/Home.vue";
import Photo from "../../views/Photo.vue";
import Video from "../../views/Video.vue";
import Web from "../../views/Web.vue";
import About from "../../views/About.vue";
import Contact from "../../views/Contact.vue";
import Resume from "../../views/Resume.vue";
import HeaderBlock from "./HeaderBlock.vue";
</script>

<template>
  <section>
    <div class="flex">
      <!-- Sidebar -->
      <div class="sticky top-0 h-screen overflow-y-auto w-64 bg-sky-950 hidden sm:block">
        <div class="p-4 mt-20">
          <img class="mx-auto mb-5 rounded-full h-24 w-24" src="https://randomuser.me/api/portraits/lego/3.jpg"
            alt="Profile-photo">
          <h2 class="text-white font-bold text-center">Taishi Arai</h2>
          <p class="text-green-200 text-center text-xs">creative portfolio</p>
        </div>

        <ul>
          <RouterLink to="/"
            class="border rounded-lg mx-4 mt-4 block px-4 py-2 text-white hover:bg-green-200 hover:text-sky-900">Home
          </RouterLink>
          <RouterLink to="/photo"
            class="border rounded-lg mx-4 mt-4 block px-4 py-2 text-white hover:bg-green-200 hover:text-sky-900">
            Photography
          </RouterLink>
          <RouterLink to="/video"
            class="border rounded-lg mx-4 mt-4 block px-4 py-2 text-white hover:bg-green-200 hover:text-sky-900">
            Commercials
          </RouterLink>
          <RouterLink to="/web"
            class="border rounded-lg mx-4 mt-4 block px-4 py-2 text-white hover:bg-green-200 hover:text-sky-900">
            Websites
          </RouterLink>
        </ul>


        <ul class="mt-10">
          <router-link to="/about" class="text-xs block px-4 py-2 text-green-200 hover:bg-gray-700">About</router-link>
          <router-link to="/resume"
            class="text-xs block px-4 py-2 text-green-200 hover:bg-gray-700">Resume</router-link>
          <router-link to="/contact"
            class="text-xs block px-4 py-2 text-green-200 hover:bg-gray-700">Contact</router-link>
        </ul>



      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <HeaderBlock></HeaderBlock>
        <router-view></router-view>

      </div>



    </div>



  </section>
</template>

<style></style>