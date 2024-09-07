<script setup>
import { ref } from "vue";
import DataTable from "./components/DataTable.vue";
import Column from "./components/Column.vue";

const items = ref([
  { id: 1, name: "Itachi", ability: "sharingan" },
  { id: 2, name: "Sasuke", ability: "sharingan" },
  { id: 3, name: "Naruto", ability: "Rasengun" },
  { id: 4, name: "Madara", ability: "Planetary Devestation" },
  { id: 5, name: "Kakashi", ability: "Copy", called: "Copy Ninja" },
]);
</script>

<template>
  <DataTable :items>
    <Column field="id" />
    <Column field="name" />
    <Column field="ability" />
    <!-- <Column field="called" /> -->
  </DataTable>
</template>
