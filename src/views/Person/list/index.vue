<template>
  <div>
    <h1>This is a demo page</h1>
    <TableList ref="tableRef" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import TableList from "./list.vue";

const tableRef = ref<any>(null);

const loadData = (condition?: any) => {
  tableRef.value.loadData(condition);
};

onMounted(() => {
  loadData();
});
</script>
