<script setup>
const props = defineProps(['fields'])
</script>

<template>
    <h1 class="mt-5 text-5xl">Form Builder Component</h1>
    <div v-for="field in fields" class="text-blue-400 font-bold flex flex-col items-start my-5">
        <label :for="field.name">{{ field.label }}</label>
        <input :type="field.type" :placeholder="field.placeholder" :maxlength="field.max" :checked="field.value">
    </div>
</template>

<style lang="scss" scoped></style>