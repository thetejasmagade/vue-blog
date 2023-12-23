<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Blog } from '../types'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const postData = reactive<Blog>({
    id: null,
    title: null,
    content: null,
    author: null,
    image: null,
    date: null
})

const saveData = () => {
    postData.id = Math.floor(Math.random() * 1000000);
    postData.image = postData.image ? postData.image : `https://source.unsplash.com/random/2024×100/?forest`;
    store.dispatch('newPost', postData);
    router.push('/');
}
</script>

<template>
    <div class="container px-5 pt-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7 mb-5">
                <h4 class="pb-3">Add New Post 💥</h4>
                <form class="form" @submit.prevent>
                    <div class="mb-3">
                        <label for="title" class="form-label">Enter Blog Title</label>
                        <input v-model="postData.title" required type="text" class="form-control" id="title" aria-describedby="title">
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Enter Blog Content</label>
                        <textarea v-model="postData.content" required class="form-control" id="content" rows="10"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="author" class="form-label">Enter Author Name</label>
                        <input v-model="postData.author" required type="text" class="form-control" id="author" aria-describedby="author">
                    </div>
                    <div class="mb-3">
                        <label for="img" class="form-label">Enter Image Link</label>
                        <input v-model="postData.image" required type="text" class="form-control" id="img" aria-describedby="img">
                    </div>
                    <div class="mb-3">
                        <label for="img" class="form-label">Select Date</label>
                        <input v-model="postData.date" required type="date" class="form-control" id="date" aria-describedby="date">
                    </div>
                    <button @click="saveData()" type="button" class="btn btn-success">Add New Post</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>