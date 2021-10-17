<template>
  <div class="table">
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
import Person from "../model/person";
import { getPersonListAPI } from "@/api/person";
import { useRouter } from "vue-router";

// Person 列表数据和方法
const tableData = ref<Array<Person>>([]);
const columns = Person.getTableColumns<Person>();
const pageChange = Person.pageChange;
const config = Person.getTableConfig();

const loadData = async (condition?: any) => {
  const response = await Person.getTableList<Person>(
    getPersonListAPI,
    condition
  );
  tableData.value = response.list;
  // console.log("data", tableData);
};

const router = useRouter();
const info = (record?: any): any => {
  console.log("Info", record);
  router.push({ path: `/person/info`, query: { id: record.id } });
};

const edit = (record?: any): any => {
  console.log("Edit", record);
};

const del = (record?: any): any => {
  console.log("Delete", record);
};

defineExpose({
  loadData,
});
</script>
