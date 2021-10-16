<template>
  <div class="state">
    <h1>This is State Demo</h1>
  </div>
</template>

<script lang="ts" setup>
import State from "@/state";

State.useLocalStorage("set", "one", 1);

console.log(State.useLocalStorage("get", "one"));
</script>
