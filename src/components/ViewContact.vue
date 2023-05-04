<template>
  <div class="my-3" v-if="status">
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-if="status === 'success'"
    >
      <strong>{{ msg }}</strong>
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
    class="container p-3 border border-2 border-secondary border-opacity-50 rounded-2"
  >
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control inputSearch"
        placeholder="Search contacts"
        v-model.trim="searchTerm"
      />
      <span class="input-group-text deleteButton"
        ><i class="fa fa-search"></i
      ></span>
    </div>

    <h2 class="my-3">
      <span v-if="searchTerm">Search Result</span>
      <span v-if="!searchTerm">All Contacts</span>
    </h2>
    <div class="scrollViewDiv">
      <div
        class="container border border-1 border-secondary border-opacity-25 rounded-3 px-5 py-2 d-flex justify-content-between align-items-center mb-3"
        v-for="contact in filteredContacts"
        :key="contact.id"
      >
        <span>{{ contact.name }}</span>
        <span
          >{{ contact.phone }}
          <span>
            <i
              class="fa fa-trash ms-3 text-danger deleteButton"
              @click="() => handlePress(contact.id)"
            >
            </i> </span
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, reactive, toRefs } from "vue";
import { usePhonebookStore } from "@/stores/phonebook";

export default {
  name: "ViewContact",
  setup() {
    const searchTerm = ref("");
    const store = ref(usePhonebookStore());

    const state = reactive({
      status: "",
      msg: "",
    });

    function handlePress(id) {
      if (confirm("Are you sure you want to delete this phone?")) {
        const response = store.value.delete(id);
        state.status = response.status;
        state.msg = response.msg;
      }
    }

    const filteredContacts = computed(() => {
      return store.value.contactByName.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          contact.phone.toString().includes(searchTerm.value)
        );
      });
    });

    return {
      searchTerm,
      handlePress,
      filteredContacts,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.deleteButton {
  cursor: pointer;
}
.deleteButton:hover {
  font-weight: bold;
}
.inputSearch {
  outline: none;
}
.scrollViewDiv {
  max-height: 400px;
  overflow-y: auto;
}
</style>
