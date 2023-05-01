<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <span class="ms-2">Phone Book</span>
      </a>
      <span class="text-light text-opacity-75">
        <i class="fa fa-address-card fa-lg"></i>
        <strong class="ms-2">{{ totalContact }}</strong>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    totalContact: Number,
  },
};
</script>

<style scoped></style>
