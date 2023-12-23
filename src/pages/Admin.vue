<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Blog } from '../types'
import { useStore } from 'vuex';

const postData = reactive<Blog>({
    id: null,
    title: null,
    content: null,
    author: null,
    image: null,
    date: null
})
const store = useStore();

const getAllPosts = computed(() => store.getters.getAllPosts);

const applyDataToModal = (id: number) => {
    let res: Blog = getAllPosts.value.find((el: Blog) => { return el.id == id });
    postData.id = res.id;
    postData.title = res.title;
    postData.content = res.content;
    postData.author = res.author;
    postData.image = res.image;
    postData.date = res.date;
}

const saveData = () => {
    store.dispatch('updatePost', postData);
}

const deletePost = (id: number) => {
    store.dispatch('deletePost', id);
}
</script>

<template>
    <div class="container px-5 pt-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7 mb-5">
                <div class="header-parent pb-4">
                    <h4 class="pb-3">Manage Posts 💥</h4>
                    <router-link to="/new">
                        <button style="margin-top: -12px;" type="button" class="btn btn-success">Add New Blog</button>
                    </router-link>
                </div>

                <div v-for="(post, i) in getAllPosts" :key="i">
                    <router-link to="/" class="post-parent">
                        <h3 class="title">{{ post.title }}</h3>
                        <p class="description pt-0 col-12 text-truncate">{{ post.content }}</p>
                    </router-link>
                    <p class="other-info">
                        <span class="posted-by">Posted By</span>
                        <span class="mx-1">{{ post.author }}</span>
                        <span class="posted-by">on</span>
                        <span class="mx-1">{{ post.date }}</span>
                    </p>
                    <button @click="applyDataToModal(post.id)" type="button" class="btn btn-warning px-3 py-1"
                        data-bs-toggle="modal" data-bs-target="#editModal">Edit Post</button>
                    <button @click="deletePost(post.id)" type="button" class="btn btn-danger px-2 py-1">Delete Post</button>
                    <hr />
                </div>

            </div>
        </div>
    </div>

    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Post 💥</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="form" @submit.prevent>
                        <div class="mb-3">
                            <label for="title" class="form-label">Enter Blog Title</label>
                            <input v-model="postData.title" required type="text" class="form-control" id="title"
                                aria-describedby="title">
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Enter Blog Content</label>
                            <textarea v-model="postData.content" required class="form-control" id="content"
                                rows="10"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="author" class="form-label">Enter Author Name</label>
                            <input v-model="postData.author" required type="text" class="form-control" id="author"
                                aria-describedby="author">
                        </div>
                        <div class="mb-3">
                            <label for="img" class="form-label">Enter Image Link</label>
                            <input v-model="postData.image" required type="text" class="form-control" id="img"
                                aria-describedby="img">
                        </div>
                        <div class="mb-3">
                            <label for="img" class="form-label">Select Date</label>
                            <input v-model="postData.date" required type="date" class="form-control" id="date"
                                aria-describedby="date">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="saveData()" type="button" class="btn btn-success" data-bs-dismiss="modal">Save
                        changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
    margin-right: 8px;
}

.title {
    color: #000;
}

.post-parent {
    text-decoration: none;
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

.header-parent {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>