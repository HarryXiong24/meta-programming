<template>
  <div class="state">
    <h1>This is a state demo page</h1>
    <p>{{ local }}</p>
    <p>{{ session }}</p>
    <p>{{ cookie }}</p>
    <p>{{ vuex }}</p>
  </div>
</template>

<script lang="ts" setup>
import State from "@/store";
import { ref } from "vue";
import { useStore } from "vuex";

// localStorage 用例
State.useLocalStorage("set", "one", "local 1");
console.log(State.useLocalStorage("get", "one"));
const local = ref(State.useLocalStorage("get", "one"));

// sessionStorage 用例
State.useSessionStorage("set", "one", "session 1");
console.log(State.useSessionStorage("get", "one"));
const session = ref(State.useSessionStorage("get", "one"));

// cookie 用例
State.useCookie("set", "one", "cookie 1");
console.log(State.useCookie("get", "one"));
const cookie = ref(State.useCookie("get", "one"));

// Vuex 用例
State.useVuex("set", useStore(), "one", "Vuex 1");
console.log("!!!", State.useVuex("get", useStore(), "one"));
const vuex = ref(State.useVuex("get", useStore(), "one"));
</script>
