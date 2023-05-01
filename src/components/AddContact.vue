<template>
  <div
    class="container border border-2 border-secondary border-opacity-50 p-2 rounded-2"
  >
    <h2>Add New Contact</h2>
    <form @submit.prevent="addContact">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model.trim="name"
        />
      </div>
      <div class="mb-3">
        <label for="phoneNumber" class="form-label">Phone Number</label>
        <input
          type="number"
          class="form-control"
          id="phoneNumber"
          pattern="^\d{10}$"
          required
          v-model.trim="phone"
        />
      </div>
      <p v-if="error">{{ error }}</p>
      <button type="submit" class="btn btn-primary" :disabled="!valid">
        <span class="mx-2">Save</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddContact",
  data() {
    return {
      name: "",
      phone: "",
      error: "",
    };
  },
  computed: {
    valid() {
      return /^\d{10}$/.test(this.phone);
    },
  },
  methods: {
    addContact() {
      const result = {
        name: this.name,
        phone: this.phone,
      };
      if (this.valid) {
        console.log(result);
        this.$emit("addNewContact", result);
        this.name = "";
        this.phone = "";
      } else {
        this.error = "Please enter exactly 10 digits";
      }
    },
  },
};
</script>

<style scoped></style>
