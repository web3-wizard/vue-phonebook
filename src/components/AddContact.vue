<template>
  <div class="my-3" v-if="status">
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-if="status === 'success'"
    >
      <strong>{{ msg }}</strong>
      <span class="mx-1">
        Go to
        <router-link class="text-decoration-none" to="/">home</router-link>.
      </span>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-if="status === 'error'"
    >
      <strong>{{ msg }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </div>
  <div
    class="container border border-2 border-secondary border-opacity-50 p-2 rounded-2 mb-4 px-3"
  >
    <h2 class="my-2">Add New Contact</h2>
    <form @submit.prevent="addContact" class="my-1">
      <div class="mb-3">
        <label for="name" class="form-label float-start">Name</label>
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
        <label for="phoneNumber" class="form-label float-start"
          >Phone Number</label
        >
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
      <button type="submit" class="btn btn-success" :disabled="!valid">
        <span class="mx-2"> Save</span>
      </button>
    </form>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
import { usePhonebookStore } from "@/stores/phonebook";

export default {
  name: "AddContact",
  setup() {
    const store = ref(usePhonebookStore());
    const state = reactive({
      name: "",
      phone: "",
      msg: "",
      status: "",
    });

    const valid = computed(() => {
      return /^\d{10}$/.test(state.phone);
    });

    function addContact() {
      const contact = {
        name: state.name,
        phone: state.phone,
      };
      if (valid.value) {
        const response = store.value.create(contact);
        state.status = response.status;
        state.msg = response.msg;
        state.name = "";
        state.phone = "";
      } else {
        state.status = "error";
        state.msg = "Please enter exactly 10 digits";
      }
    }

    return {
      store,
      ...toRefs(state),
      valid,
      addContact,
    };
  },

  methods: {},
};
</script>

<style scoped></style>
