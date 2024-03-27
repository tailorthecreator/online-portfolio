<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "../../views/Home.vue";
import Photo from "../../views/Photo.vue";
import Video from "../../views/Video.vue";
import Web from "../../views/Web.vue";
import About from "../../views/About.vue";
import Contact from "../../views/Contact.vue";
import Resume from "../../views/Resume.vue";
</script>

<template>
  <section>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="w-64 bg-gradient-to-b from-sky-800 to-slate-500">
        <div class="p-4 mt-20">
          <img class="mx-auto mb-5 rounded-full h-24 w-24" src="https://randomuser.me/api/portraits/lego/3.jpg"
            alt="Profile-photo">
          <h2 class="text-white font-bold text-center">Taishi Arai</h2>
          <p class="text-white text-center">creative portfolio</p>
        </div>

        <ul>
          <RouterLink to="/" class="border mx-4 mt-4 block px-4 py-2 text-white">Home</RouterLink>
          <RouterLink to="/photo" class="border mx-4 mt-4 block px-4 py-2 text-white">Photo</RouterLink>
          <RouterLink to="/video" class="border mx-4 mt-4 block px-4 py-2 text-white">Video</RouterLink>
          <RouterLink to="/web" class="border mx-4 mt-4 block px-4 py-2 text-white">Web</RouterLink>
        </ul>


        <ul class="mt-10">
          <router-link to="/about" class="text-xs block px-4 py-2 text-white hover:bg-gray-700">About</router-link>
          <router-link to="/resume" class="text-xs block px-4 py-2 text-white hover:bg-gray-700">Resume</router-link>
          <router-link to="/contact" class="text-xs block px-4 py-2 text-white hover:bg-gray-700">Contact</router-link>
        </ul>

      </div>

      <!-- Main Content -->
      <div>
        <RouterView />
      </div>

    </div>


  </section>
</template>

<style></style>