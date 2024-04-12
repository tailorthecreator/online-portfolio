<script setup>
import Testimonial from "../src/components/Testimonial.vue";
import { RouterLink } from "vue-router";


</script>

<template>
    <main>
        <div class=" flex justify-end bg-gray-900">
            <RouterLink to="/HomeJap" class="btn my-2 mx-4">
                Translate to Japanese 🇯🇵
            </RouterLink>
        </div>
        <!--Hero Section-->
        <section class="bg-gray-900 z-0">
            <div class="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mx-20">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1
                        class="max-w-2xl  text-green-300 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        Taishi Arai </h1>
                    <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 text-xs">
                        Front End Engineer / Photo & Video Production</p>

                </div>
                <div class="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
                </div>
            </div>

        </section>


        <!--Tech stacks-->
        <section class="p-4 lg:mx-40 mt-20 ">
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
            <p class="text-center text-2xl font-bold mb-5"> Change is the only thing constant.</p>
            <p class="text-center ">I am a seasoned professional with years of experience in media production, now
                seeking to transition into a front-end developer role. With a strong foundation in creativity, technical
                expertise, and strategic vision, I am eager to apply my skills to elevate brands and drive growth
                through innovative web development solutions.</p>
        </div>
        <!--The best feature Icons-->
        <section class="bg-gray-900">
            <div
                class="gap-8 items-center py-8 px-4 lg:mx-40 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class=" swiperight w-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                    alt="dashboard image">
                <img class="swiperight w-full hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                    alt="dashboard image">
                <div class="mt-4 md:mt-0">
                    <p class="mb-4 text-4xl tracking-tight font-extrabold text-green-300">13 years in
                        Media Production</p>
                    <p class="mb-6 font-light text-white md:text-lg ">From the age of 18, I
                        immersed myself in the dynamic world of nightlife photography, honing my skills amidst the
                        vibrant energy of nightclubs. As my expertise flourished, I transitioned to the high seas,
                        spending a year and a half as a photographer aboard a cruise ship. At 22, driven by my passion
                        for visual storytelling, I made the leap to Los Angeles to pursue a career in commercial and
                        fashion photography.</p>
                </div>
            </div>
        </section>
        <section class="bg-gray-900">
            <div
                class="gap-8 items-center py-8 px-4 lg:mx-40 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0 md:text-right">
                    <!-- Align content to the right for medium screens and above -->
                    <p class="mb-4 text-4xl tracking-tight font-extrabold text-green-300">5+ years as
                        a<br>
                        Shopify Developer</p>
                    <p class="mb-6 font-light text-white md:text-lg">While balancing my
                        photography work during nights and weekends, I also took on the role of Digital Marketer for a
                        clothing line. In this capacity, I was tasked with developing an online webshop. Leveraging
                        Shopify as my CMS, I successfully crafted a high-performing website that experienced remarkable
                        growth. Starting from $7000 in monthly sales, the webshop flourished under my direction,
                        reaching $150,000 in monthly sales over a span of 4 years.</p>

                </div>
                <img class="swipeleft w-full dark:hidden justify-self-end"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                    alt="dashboard image"> <!-- Align image to the right for dark mode and small screens -->
                <img class="swipeleft w-full hidden dark:block justify-self-end"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                    alt="dashboard image"> <!-- Align image to the right for dark mode and small screens -->
            </div>
        </section>
        <div class="mx-20 lg:mx-40 my-20">
            <img class="rotatein hidden dark:block w-80 mx-auto my-20" src="../src/assets/circle-photo.png"
                alt="dashboard image">

            <p class="text-center text-2xl font-bold mb-5">How I found my calling</p>
            <p class="text-center ">In the aftermath of the pandemic, I reevaluated my career. Running a digital
                marketing agency for
                four years had been fulfilling, offering numerous opportunities, but I felt a deeper pull towards
                technology. This introspection led me to coding—a field I embraced with passion despite starting
                past 30. Now, coding isn't just a profession; it's a mission to contribute to something greater than
                myself, marking a profound shift in my life's trajectory.</p>
        </div>
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

p {
    animation: fade linear both;
    animation-timeline: view();
    animation-range: entry 50% cover 50%;
}

@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.swiperight {
    animation: swipeToRight linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
}

@keyframes swipeToRight {
    from {
        margin-left: -200px;
        opacity: 0;
    }

    to {
        margin-left: 0px;
        opacity: 1;
    }
}

.swipeleft {
    animation: swipeToLeft linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
}

@keyframes swipeToLeft {
    from {
        margin-right: -200px;
        opacity: 0;
    }

    to {
        margin-left: 0px;
        opacity: 1;
    }
}

.rotatein {
    animation: rotater 1s linear both;
    /* corrected animation property */
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
}

@keyframes rotater {
    from {
        margin-right: calc(50% - 100px);
        opacity: 0;
        transform: rotate(-180deg);
    }

    to {
        margin-right: calc(50% - 130px);
        opacity: 1;
        transform: rotate(0deg);
    }
}

.btn {
    @apply inline-block px-4 py-2 text-slate-900 bg-green-200 hover:bg-green-300 hover:text-sky-900 rounded;
}
</style>