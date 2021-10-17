<template>
  <a-card style="width: 80%; margin: 0 auto">
    <a-form :model="formData" v-bind="config">
      <a-form-item label="ID">
        <a-input v-model:value="formData.id" />
      </a-form-item>
      <a-form-item label="姓名">
        <a-input v-model:value="formData.name" />
      </a-form-item>
      <a-form-item label="年龄">
        <a-input v-model:value="formData.age" />
      </a-form-item>
      <a-form-item label="性别">
        <a-radio-group v-model:value="formData.sex">
          <a-radio value="male">男</a-radio>
          <a-radio value="female">女</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="地址">
        <a-input v-model:value="formData.address" type="textarea" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button style="margin-right: 10px" @click="goBack">返回</a-button>
        <a-button type="primary" @click="onSubmit(formData)">确定</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script lang="ts" setup>
import { getPersonListAPI } from "@/api/person";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Person from "../model/person";

let formData = ref<any>({});
const config = Person.getFormConfig();

const route = useRoute();
const router = useRouter();
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

const goBack = () => {
  router.push("/person/list");
};

const onSubmit = (record?: any) => {
  console.log(record);
  alert(`提交成功!`);
  router.push("/person/list");
}

onMounted(() => {
  loadData();
});
</script>
