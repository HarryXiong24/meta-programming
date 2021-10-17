<template>
  <a-row justify="center">
    <a-col :span="20">
      <a-descriptions v-bind="config">
        <a-descriptions-item label="唯一标识" :span="3">{{
          formData.id
        }}</a-descriptions-item>
        <a-descriptions-item label="key" :span="3">{{
          formData.key
        }}</a-descriptions-item>
        <a-descriptions-item label="姓名" :span="3">{{
          formData.name
        }}</a-descriptions-item>
        <a-descriptions-item label="年龄" :span="3">{{
          formData.age
        }}</a-descriptions-item>
        <a-descriptions-item label="性别" :span="3">{{
          formData.sex
        }}</a-descriptions-item>
        <a-descriptions-item label="地址" :span="3">{{
          formData.address
        }}</a-descriptions-item>
      </a-descriptions>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { getPersonListAPI } from "@/api/person";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import Person from "../model/person";

let formData = ref<any>({});
const config = Person.getDescriptionsConfig();

const route = useRoute();
const loadData = async (condition?: any) => {
  const id = Number(route.query.id);
  const response = await Person.getTableList<Person>(
    getPersonListAPI,
    condition
  );
  response.list.forEach((value) => {
    console.log(id === value.id);
    if (id === value.id) {
      formData.value = value;
    }
  });
  console.log(formData);
};

onMounted(() => {
  loadData();
});
</script>
