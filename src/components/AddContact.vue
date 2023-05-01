<template>
  <div
    class="container border border-2 border-secondary border-opacity-50 p-2 rounded-2 mb-4"
  >
    <h2 class="my-2">Add New Contact</h2>
    <form @submit.prevent="addContact" class="my-1">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter name"
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
          placeholder="Enter phone number"
          required
          v-model.trim="phone"
        />
      </div>
      <p v-if="error">{{ error }}</p>
      <button type="submit" class="btn btn-success" :disabled="!valid">
        <span class="mx-2"> Save</span>
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
      const contact = {
        name: this.name,
        phone: this.phone,
      };
      if (this.valid) {
        this.$emit("addNewContact", contact);
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
