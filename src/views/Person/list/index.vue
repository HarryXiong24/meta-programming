<template>
  <div>
    <!-- <table-form @on-submit="loadData" @on-reset="loadData" /> -->
    <TableList ref="tableRef" />
  </div>
  <!-- <CreateForm ref="createForm" @on-success="onCreateSuccess"></CreateForm> -->
</template>

<script lang="ts" setup>
// import tableForm from './form';
import { onMounted, ref } from "vue";
import TableList from "./list.vue";
// import CreateForm from './modules/CreateForm.vue';

const tableRef = ref<any>(null);

const loadData = (condition?: any) => {
  tableRef.value.loadData(condition);
};

onMounted(() => {
  loadData();
});

// const showModal = (record) => {
//   this.$refs.createForm.handleOpenCreate(record);
// };

// onCreateSuccess () {
//   this.loadData();
// };
</script>
