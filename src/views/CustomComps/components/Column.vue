<script setup>
import { inject, ref, onMounted } from "vue";
const props = defineProps(["field", "bodyTemplate"]);

const addCol = inject("addCol");

onMounted(() => {
  //   alert("dd");
  console.log(props.field);
  addCol(props.field);
});
</script>

<template></template>
