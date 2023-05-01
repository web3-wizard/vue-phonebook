<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <span class="ms-2">Phone Book</span>
      </a>
      <span class="text-light text-opacity-75">
        Total Contact: {{ totalContact }}
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
