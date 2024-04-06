<script setup>
import Testimonial from "../src/components/Testimonial.vue"

</script>

<template>

    <main>

        <!--Hero Section-->
        <section class="bg-stone-300 z-0">
            <div class="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mx-20">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1
                        class="max-w-2xl  text-stone-700 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        Taishi Arai </h1>
                    <p class="max-w-2xl mb-6 font-light text-slate-800 lg:mb-8 text-xs">
                        Front End Engineer / Photo & Video Production</p>

                </div>
                <div class="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
                </div>
            </div>

        </section>


        <!--Tech stacks-->
        <section class="p-4 lg:mx-40 mt-20">
            <p class="text-md text-stone-700 font-bold mb-4 text-center">Tech Stacks</p>
            <div class="grid grid-cols-4 gap-2 justify-center items-center mx-10">
                <!-- Top row -->
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/CSS-logolist.png" alt="Logo 1">
                </div>
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/tailwind-logolist.png" alt="Logo 2">
                </div>
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/JS-logolist.png" alt="Logo 3">
                </div>
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/php-logolist.png" alt="Logo 4">
                </div>
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/React-logolist.png" alt="Logo 5">
                </div>
                <!-- Bottom row -->
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/Vue-Js-logolist.png" alt="Logo 6">
                </div>
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/Figma-logolist.png" alt="Logo 7">
                </div>
                <div class="col-span-5 sm:col-span-1 text-center w-24 h-24">
                    <img src="../src/assets/sql-logolist.png" alt="Logo 8">
                </div>

            </div>
        </section>
        <div class="mx-20 lg:mx-40 my-20">
            <div class="text-center text-2xl font-bold mb-5"> Curiousity has always been my greatest strength.</div>
            <p class="text-center ">In many endeavors. My curiosity had lead me to the most obscure parts of this
                planet, i believe it has taught
                me how to not only cope but to really dive into the things that catch my interest.</p>
        </div>
        <!--The best feature Icons-->
        <section class="bg-white dark:bg-gray-900">
            <div
                class="gap-8 items-center py-8 px-4 lg:mx-40 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                    alt="dashboard image">
                <img class="w-full hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                    alt="dashboard image">
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create
                        more tools and ideas that brings us together.</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect
                        with friends and communities of people who share your interests. Connecting with your friends
                        and family as well as discovering new ones is easy with features like Groups.</p>
                    <a href="#"
                        class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Get started
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <section class="bg-white dark:bg-gray-900">
            <div
                class="gap-8 items-center py-8 px-4 lg:mx-40 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0 md:text-right">
                    <!-- Align content to the right for medium screens and above -->
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create
                        more tools and ideas that bring us together.</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect
                        with friends and communities of people who share your interests. Connecting with your friends
                        and family as well as discovering new ones is easy with features like Groups.</p>
                    <a href="#"
                        class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Get started
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <img class="w-full dark:hidden justify-self-end"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                    alt="dashboard image"> <!-- Align image to the right for dark mode and small screens -->
                <img class="w-full hidden dark:block justify-self-end"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                    alt="dashboard image"> <!-- Align image to the right for dark mode and small screens -->
            </div>
        </section>
        <Testimonial></Testimonial>


    </main>

</template>


<style>
.custom-shape-divider-top-1712150236 {

    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1712150236 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1712150236 .shape-fill {
    fill: #D5D3D1;
}
</style>