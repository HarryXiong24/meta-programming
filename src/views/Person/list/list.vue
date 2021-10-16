<template>
  <div class="table">
    <h1>This is an table demo page</h1>
    <h3>这是 Person 表格</h3>
    <a-row justify="center">
      <a-col :span="20">
        <a-table
          v-bind="config"
          :dataSource="tableData"
          :columns="columns"
          @change="pageChange"
        >
          <template #operator="{ record }">
            <a-button type="link" @click="info(record)">查看</a-button>
            <a-button type="link" @click="edit(record)">编辑</a-button>
            <a-button type="link" @click="del(record)">删除</a-button>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";
import { Person } from "./person.table";
import { getPersonListAPI } from "@/api/person";

// Person 列表数据和方法
const tableData = ref<Array<Person>>([]);
const columns = Person.getColumns<Person>();
const pageChange = Person.pageChange;
const config = Person.getConfig();
const info = Person.info;
const edit = Person.edit;
const del = Person.del;

const loadData = async (condition?: any) => {
  const response = await Person.getList<Person>(getPersonListAPI, condition);
  tableData.value = response.list;
  // console.log("data", tableData);
};

defineExpose({
  loadData,
});
</script>
