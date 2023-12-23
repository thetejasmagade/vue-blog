<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Blog } from '../types'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const post = ref<Blog>({
    id: -1,
    title: null,
    content: undefined,
    author: null,
    image: null,
    date: null
});

onMounted(async () => {
    post.value = await store.getters.getPost(router.currentRoute.value.params.id);
})
</script>

<template>
    <div class="container px-5 py-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <h3 class="title">{{ post.title }}</h3>
                <div class="other-parent">
                    <div class="author-parent pt-3">
                        <img width="32px" height="32px" :src="`https://ui-avatars.com/api/?name=${post.author}&background=0D8ABC&color=fff&rounded=true`"
                        alt="avatar" />
                        <p class="author pt-3 text-secondary">{{ post.author }}</p>
                    </div>
                    <p class="pt-4">Date: <span class="text-danger">{{ post.date }}</span></p>
                </div>

                <img class="post-image" :src="post.image">
                <p class="pt-3">{{ post.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-size: 2.2rem;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    line-height: 36px;
}

.post-image {
    height: 420px;
    width: 100%;
    margin: 14px 0;
}

.other-parent {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.author-parent {
    display: flex;
    align-items: center;
}

.author {
    margin-left: 12px;
}
</style>