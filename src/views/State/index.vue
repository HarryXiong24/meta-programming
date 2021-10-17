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
const local = ref(State.useLocalStorage("get", "one"));
console.log(local);

// sessionStorage 用例
State.useSessionStorage("set", "one", "session 1");
const session = ref(State.useSessionStorage("get", "one"));
console.log(session);

// cookie 用例
State.useCookie("set", "one", "cookie 1");
const cookie = ref(State.useCookie("get", "one"));
console.log(cookie);

// Vuex 用例
State.useVuex("set", useStore(), "one", "Vuex 1");
const vuex = ref(State.useVuex("get", useStore(), "one"));
console.log(vuex);
</script>
