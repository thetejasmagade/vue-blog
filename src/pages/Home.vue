<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex';
import Hero from '../components/Hero.vue';

const store = useStore();

const getAllPosts = computed(() => store.getters.getAllPosts);
</script>

<template>
    <Hero />
    <div class="container px-5 py-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7" v-for="(post, i) in getAllPosts" :key="i">
                <!-- {{ post }} -->
                <router-link :to="`/post/${post.id}`" class="post-parent">
                    <h3 class="title">{{ post.title }}</h3>
                    <p class="description pt-0 col-12 text-truncate">{{ post.content }}</p>
                </router-link>
                <p class="other-info">
                    <span class="posted-by">Posted By</span>
                    <span class="mx-1">{{ post.author }}</span>
                    <span class="posted-by">on</span>
                    <span class="mx-1">{{ post.date }}</span>
                </p>
                <router-link :to="`/post/${post.id}`" class="view-blog">View Blog ↗️</router-link>
                <hr/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post-parent {
    text-decoration: none;
}

.view-blog {
    font-size: 1rem;
    color: green;
    text-decoration: none;
    font-weight: 400;
}

.title {
    font-size: 2.2rem;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    line-height: 36px;
}

.title:hover {
    color: teal;
}

.description {
    color: #000;
    font-size: 1.8rem;
    font-weight: 100;
}

.posted-by {
    color: rgb(124, 124, 124);
    font-size: 1rem;
}

.other-info {
    margin-top: -14px;
    font-style: italic;
}
</style>