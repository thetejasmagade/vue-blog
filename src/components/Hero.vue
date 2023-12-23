<script setup lang="ts">

</script>

<template>
    <div class="hero-div">
        <div class="hero-text">
            <h1>All Blog Post's</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam tempore facere cum saepe blanditiis
                molestias numquam dolor aperiam quo iste sint ex autem libero cumque illum, illo praesentium? Nisi.</p>
        </div>
    </div>
</template>

<style scoped>
.hero-div {
    height: 55vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: url(https://images.pexels.com/photos/7667716/pexels-photo-7667716.jpeg);
    background-blend-mode: darken;
    margin-bottom: 14px;
}

.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
</style>