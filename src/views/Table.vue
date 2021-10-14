<template>
  <div class="table">
    <h1>This is an table demo page</h1>
    <a-row justify="center">
      <a-col :span="20">
        <a-table
          v-bind="config"
          :dataSource="tableData"
          :columns="columns"
          @change="pageChange"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Person } from "@/model/Table/Person";
import { getPersonListAPI } from "@/api/person";

// Person 表格
const tableData = ref<Array<Person>>([]);
const columns = Person.getColumns<Person>();
const pageChange = Person.pageChange;
const config = Person.getConfig();

const getData = async () => {
  const response = await Person.getList<Person>(getPersonListAPI);
  tableData.value = response.list;
  // console.log("data", tableData);
};

onMounted(() => getData());
</script>
