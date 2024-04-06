<script setup>
</script>

<template>

    <div class="testimonial">
        <div class="card">
            <div class="layer"></div>
            <div class="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magni reiciendis ex, nisi animi
                    impedit tenetur facilis, sequi tempore soluta pariatur rerum! Odit, ab, sint!
                </p>
                <div class="image">
                    <img src="https://i.postimg.cc/3N3Jtknv/user1.jpg" alt="no user" width="100" height="100">
                </div>
                <div class="details">
                    <h2>
                        Someone Famous</br>
                        <span>Website Designer</span>
                    </h2>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="layer"></div>
            <div class="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magni reiciendis ex, nisi animi
                    impedit tenetur facilis, sequi tempore soluta pariatur rerum! Odit, ab, sint!
                </p>
                <div class="image">
                    <img src="https://i.postimg.cc/26QSdQFY/user2.jpg" alt="no user" width="100" height="100">
                </div>
                <div class="details">
                    <h2>
                        Someone Famous</br>
                        <span>Website Designer</span>
                    </h2>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="layer"></div>
            <div class="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magni reiciendis ex, nisi animi
                    impedit tenetur facilis, sequi tempore soluta pariatur rerum! Odit, ab, sint!
                </p>
                <div class="image">
                    <img src="https://i.postimg.cc/zBZfRthp/user3.jpg" alt="no user" width="100" height="100">
                </div>
                <div class="details">
                    <h2>
                        Someone Famous</br>
                        <span>Website Designer</span>
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
    background: linear-gradient(to top, #F27121, #E94057, #8A2387);
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
    color: #F27121;
    transition: 0.5s;
}

div.testimonial>div.card:hover>div.content>div.details>h2>span {
    color: #fff;
}
</style>