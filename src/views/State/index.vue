<template>
  <div class="state">
    <h1>This is State Demo</h1>
  </div>
</template>

<script lang="ts" setup>
import State from "@/store";

// localStorage 用例
State.useLocalStorage("set", "one", "local 1");
console.log(State.useLocalStorage("get", "one"));

// sessionStorage 用例
State.useSessionStorage("set", "one", "session 1");
console.log(State.useSessionStorage("get", "one"));
</script>
