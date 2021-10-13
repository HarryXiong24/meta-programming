<template>
  <div class="demo">
    <h1>This is an demo page</h1>
    <a-row justify="center">
      <a-col :span="20">
        <a-table
          v-bind="config"
          :dataSource="data"
          :columns="columns"
          @change="pageChange"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Person } from "@/module/person/person.model";

const columns = Person.getColumns<Person>();
console.log("columns", columns);

const data = ref<Array<Person>>([]);
// console.log("data", data.value);
const pageChange = Person.pageChange;
const config = Person.getConfig();

const getData = async () => {
  const response = await Person.getList<Person>();
  data.value = response.list;
  console.log("data", data.value);
};

onMounted(() => getData());
</script>
