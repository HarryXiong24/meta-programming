<template>
  <div class="state">
    <h1>This is State Demo</h1>
  </div>
</template>

<script lang="ts" setup>
import State from "@/store";
import { useStore } from "vuex";

// localStorage 用例
State.useLocalStorage("set", "one", "local 1");
console.log(State.useLocalStorage("get", "one"));

// sessionStorage 用例
State.useSessionStorage("set", "one", "session 1");
console.log(State.useSessionStorage("get", "one"));

// cookie 用例
State.useCookie("set", "one", "cookie 1");
console.log(State.useCookie("get", "one"));

// Vuex 用例
State.useVuex("set", useStore(), "one", "Vuex 1");
console.log("!!!", State.useVuex("get", useStore(), "one"));
</script>
