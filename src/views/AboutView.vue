<script setup>
import axios from 'axios';
import Adapter from '@/js/userAdapter';
import { ref, onMounted } from 'vue';

const user = ref(null)

const originalUser = ref({})

const loading = ref(false)

async function adaptUser() {
    loading.value = true
    const { data } = await axios.get('https://randomuser.me/api?gender=male')
    originalUser.value = data.results[0]
    let userAdapter = new Adapter(data.results[0])
    user.value = userAdapter.adapt(user.value)
    loading.value = false
}


</script>

<template>
    <div class="flex gap-2">
        <div>

            <button @click="adaptUser" class="inline-flex gap-4 mb-3 bg-blue-400 text-white px-4 py-2 rounded-2xl">
                <span>adapt user data</span>
                <span v-if="loading" class="text-red-500">loading...</span>
            </button>
            <pre>
            {{ user }}
        </pre>

            <div v-if="user">
                <img :src="user.img" :alt="user.name">

                <h1 class="text-3xl">{{ user.name }}</h1>
            </div>
        </div>
        <div style="font-size: 7px;">
            <pre>
                {{ originalUser }}
            </pre>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>