<script setup>
import { provide, ref, onMounted } from "vue";
const props = defineProps({
  items: {
    type: Array,
    default: [{ id: 4, name: "Itachi", ability: "sharingan" }],
  },
});

const cols = ref([]);

function addCol(column) {
  //   alert("dd");
  cols.value = [...cols.value, column];
}

// onMounted(()=>{

// })
provide("addCol", addCol);
</script>

<template>
  <div :class="`grid grid-cols-${cols.length}`">
    <div v-for="col in cols" class="p-3 font-bold text-lg border border-blue-500">
      {{ col.toUpperCase() }}
    </div>
  </div>
  <div v-for="item in items" :class="`grid grid-cols-${cols.length}`">
    <span v-for="col in cols" class="p-3 border border-blue-500">{{
      item[col]
    }}</span>
  </div>
  <slot />
</template>
