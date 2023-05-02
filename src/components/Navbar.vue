<template>
  <nav class="navbar navbar-dark bg-dark px-4">
    <div class="container">
      <a class="navbar-brand">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <span class="ms-2">Phone Book</span>
      </a>
      <div class="text-light text-opacity-75 d-flex align-content-center">
        <div class="nav-link mx-2">
          <router-link
            to="/"
            class="text-decoration-none text-light text-opacity-75 link-text"
            >Home</router-link
          >
        </div>
        <div class="nav-link mx-2">
          <router-link
            to="/create"
            class="text-decoration-none text-light text-opacity-75 link-text"
            >Create</router-link
          >
        </div>
        <div class="mx-2">
          <i class="fa fa-address-card fa-lg"></i>
          <strong class="ms-2">{{ store.getTotalContactCount }}</strong>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { usePhonebookStore } from "../stores/phonebook.js";

export default {
  name: "NavBar",
  setup() {
    const store = ref(usePhonebookStore());
    return {
      store,
    };
  },
};
</script>

<style scoped>
.link-text:hover {
  color: azure !important;
  opacity: 0.9 !important;
  text-decoration: underline !important;
  text-decoration-color: orange !important;
  text-decoration-style: solid !important;
}
</style>
