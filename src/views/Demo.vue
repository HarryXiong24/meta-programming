<template>
  <div class="demo">
    <h1>This is an demo page</h1>
    <a-row justify="center">
      <a-col :span="20">
        <a-table :dataSource="dataSource" :columns="columns" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      dataSource: [
        {
          key: "1",
          name: "胡彦斌",
          age: 32,
          address: "西湖区湖底公园1号",
        },
        {
          key: "2",
          name: "胡彦祖",
          age: 42,
          address: "西湖区湖底公园1号",
        },
      ],
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "住址",
          dataIndex: "address",
          key: "address",
        },
      ],
    };
  },
});
</script>
