<template>
  <div class="state">
    <h1>This is State Demo</h1>
  </div>
</template>

<script lang="ts" setup>
import State from "@/state";

State.useLocalStorage("set", "one", "local 1");
console.log(State.useLocalStorage("get", "one"));

State.useSessionStorage("set", "one", "session 1");
console.log(State.useSessionStorage("get", "one"));
</script>
