<template>
  <div class="demo">
    <h1>This is an demo page</h1>
    <a-row justify="center">
      <a-col :span="20">
        <a-table :dataSource="data" :columns="columns" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Person } from "@/module/person/person.model";

const columns = Person.getColumns<Person>();
const data = ref<Array<Person>>([]);

const getData = async () => {
  const response = await Person.getList<Person>();
  data.value = response.list;
};

onMounted(() => getData());
</script>
