<script setup>
</script>

<template>

    <div class="testimonial">
        <div class="card">
            <div class="layer"></div>
            <div class="content">
                <p>
                    "Working with this team was an absolute pleasure. They took our vision and turned it into a stunning
                    website that exceeded our expectations. Their attention to detail and dedication to delivering a
                    user-friendly experience was remarkable. We highly recommend their services to anyone in need of
                    top-notch website development."
                </p>
                <div class="image ">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="no user" width="100" height="100">
                </div>
                <div class="details mt-5">
                    <h2>
                        Catherine Kahn</br>
                        <span>Cafe Owner</span>
                    </h2>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="layer"></div>
            <div class="content">
                <p>
                    "I can't thank this photographer enough for capturing the essence of our event so beautifully. Their
                    keen eye for detail and ability to convey emotion through their photos truly set them apart. The
                    entire process was seamless, and the final results were beyond stunning. We will definitely be
                    returning for future photography needs!"
                </p>
                <div class="image">
                    <img src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D3"
                        alt="no user" width="100" height="100">
                </div>
                <div class="details mt-5">
                    <h2>
                        Neil Felipp</br>
                        <span>Fashion Designer</span>
                    </h2>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="layer"></div>
            <div class="content">
                <p>
                    "From concept to completion, this videography team delivered excellence. Their creative vision and
                    attention to detail resulted in a captivating video that exceeded our expectations. Highly recommend
                    for anyone seeking top-tier video production."
                </p>
                <div class="image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="no user" width="100" height="100">
                </div>
                <div class="details mt-5">
                    <h2>
                        Luis Lim</br>
                        <span>Lalamove PH</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: arial;
    background-color: #262626;

}

div.testimonial {
    margin: 200px auto 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 20px;
}

div.testimonial>div.card {
    width: 350px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    background-color: #333;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);

    overflow: hidden;
}

div.testimonial>div.card>div.layer {
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #279aae, #274d85, #121726);
    z-index: 1;
    transition: 0.5s;
}

div.testimonial>div.card:hover>div.layer {
    top: 0;
}

div.testimonial>div.card>div.content {
    position: relative;
    z-index: 2;
}

div.testimonial>div.card>div.content>p {
    font-size: 18px;
    line-height: 24px;
    color: #fff;
}

div.testimonial>div.card>div.content>div.image {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 2em;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

div.testimonial>div.card>div.content>div.details>h2 {
    font-size: 18px;
    color: #fff;
}

div.testimonial>div.card>div.content>div.details>h2>span {
    font-size: 14px;
    color: #22bfd7;
    transition: 0.5s;
}

div.testimonial>div.card:hover>div.content>div.details>h2>span {
    color: #fff;
}
</style>