<script setup lang="ts">

</script>

<template>
    <div class="flex justify-center gap-4">
        <router-link :class="{ underline: $route.path == '/' }" to="/">Builder</router-link>
        <router-link :class="{ underline: $route.path == '/adapter' }" to="/adapter">Adapter</router-link>
    </div>
    <router-view />
</template>

<style lang="scss" scoped></style>