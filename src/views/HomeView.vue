<script setup>
import { ref, onMounted } from 'vue'
import formBuilder from '@/js/formBuilder'
import FormBuilder from '@/components/FormBuilder.vue';


const fields = ref([])

const builderCompFileds = ref([
  {
    type: "text",
    name: "name",
    label: "add name",
    placeholder: "add your name",
    max: 10
  },
  {
    type: "checkbox",
    name: "isActive",
    label: "Is Active",
    value: true,
  },
])


onMounted(() => {
  let formFields = new formBuilder()

  formFields.addTextField("name", "add name", "add your name")
  formFields.addCheckBox("isActive", "Is Active", true)

  formFields = formFields.build()

  fields.value = formFields
})
</script>

<template>
  <div v-for="item in fields" class="text-red-500">
    <label :for="item?.name">{{ item?.label }}</label><br>
    <input :type="item?.type" :id="item?.name" :name="item?.name" :placeholder="item?.placeholder" :maxlength="item?.max"
      :checked="item?.value" />
  </div>

  <FormBuilder :fields="builderCompFileds" />
</template>

<style scoped></style>
