<script setup>
import { ref, onMounted } from 'vue';
import formBuiler from '@/js/formBuilder'

const fields = ref(null)


onMounted(() => {
  let builder = new formBuiler()
  builder.addTextField('username', "username", 'add user name')
  builder.addCheckbox('username', "username", true)

  fields.value = builder.build()
})
</script>

<template>
  <div v-for="item in fields">
    <label :for="item.name">{{ item.label }}</label>
    <input :type="item.type" :name="item.name" :placeholder="item.placeholder" :id="item.name" :value="item.value">
  </div>
</template>

<style lang="scss" scoped></style>