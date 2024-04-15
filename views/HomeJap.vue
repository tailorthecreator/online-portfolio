<script setup>
import Testimonial from "../src/components/Testimonial.vue";



</script>

<template>
    <main>
        <div class=" flex justify-end bg-gray-900">
            <RouterLink to="/" class="btn my-2 mx-4">
                Translate to English 🇺🇸
            </RouterLink>
        </div>
        <!--Hero Section-->
        <section class="bg-gray-900 z-0">
            <div class="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mx-20">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1
                        class="max-w-2xl  text-green-300 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        新井　太志 </h1>
                    <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 text-xs">
                        フロントエンドエンジニア / メディア制作</p>

                </div>
                <div class="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://i.imgur.com/BZmeovs.jpeg" alt="mockup">
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
            <p class="text-gray-900 text-center text-2xl font-bold mb-5"> 変化は唯一の恒常</p>
            <p class="text-center ">
                メディア制作の経験を積んだベテランですが、フロントエンド開発の職を求めています。創造性、技術的な専門知識、戦略的なビジョンを持ち合わせ、ブランドの向上と成長を促進するために、革新的なウェブ開発ソリューションを提供したいと考えています。
            </p>
        </div>
        <!--The best feature Icons-->
        <section class="bg-gray-900">
            <div
                class="gap-8 items-center py-8 px-4 lg:mx-40 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class=" swiperight w-full dark:hidden"
                    src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="dashboard image">
                <img class="swiperight w-full hidden dark:block"
                    src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="dashboard image">
                <div class="mt-4 md:mt-0">
                    <p class="text-green-300 mb-4 text-4xl tracking-tight font-extrabold ">メディア制作業界で13年間
                    </p>
                    <p class="mb-6 font-light text-white md:text-lg">
                        18歳から、夜の写真撮影の世界に没頭し、クラブの活気あるエネルギーの中でスキルを磨いてきました。スキルが向上するにつれて、船上での写真撮影に移り、1年半の間、クルーズ船のフォトグラファーとして活動しました。22歳の時、視覚的なストーリーテリングへの情熱に駆られ、商業とファッションの写真撮影のキャリアを追求するためにロサンゼルスに飛び込みました。
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-gray-900">
            <div
                class="gap-8 items-center py-8 px-4 lg:mx-40 max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0 md:text-right">
                    <!-- Align content to the right for medium screens and above -->
                    <p class="mb-4 text-4xl tracking-tight font-extrabold text-green-300 ">Shopify
                        開発者として6年間</p>
                    <p class="mb-6 font-light text-white md:text-lg "> "thirdbody":
                        "夜間や週末に写真の仕事をしながら、衣料品ブランドのデジタルマーケターとしても活動しました。その中で、オンラインショップの開発を任されました。Shopifyを使って、高性能なウェブサイトを作成し、売り上げは4年間で月額7000ドルから150,000ドルに成長しました。",
                    </p>

                </div>
                <img class="swipeleft w-full dark:hidden justify-self-end" src="https://i.imgur.com/zIDuV1H.jpeg"
                    alt="dashboard image"> <!-- Align image to the right for dark mode and small screens -->
                <img class="swipeleft w-full hidden dark:block justify-self-end" src="https://i.imgur.com/zIDuV1H.jpeg"
                    alt="dashboard image"> <!-- Align image to the right for dark mode and small screens -->
            </div>
        </section>
        <div class="mx-20 lg:mx-40 my-20">
            <img class="rotatein hidden dark:block w-80 mx-auto my-20" src="https://i.imgur.com/3Bdfx8A.png"
                alt="dashboard image">

            <p class="text-center text-2xl font-bold mb-5">自分の使命を見つけ</p>
            <p class="text-center "> "fourthbody":
                "パンデミックの後、私はキャリアを再評価しました。4年間デジタルマーケティングエージェンシーを運営してきましたが、多くのチャンスを提供してくれましたが、技術への深い魅力を感じていました。この内省により、私はコーディングに向かいました。30歳を過ぎてから始めたにもかかわらず、情熱を持って受け入れました。今、コーディングは単なる仕事ではなく、私の人生を大きく変える使命です。自分よりも大きな何かに貢献するためのものであり、人生の軌道に深い影響を与えています。"
            </p>
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