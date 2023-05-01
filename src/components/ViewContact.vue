span
<template>
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
        :key="contact.phone"
      >
        <span>{{ contact.name }}</span>
        <span
          >{{ contact.phone }}
          <span>
            <i
              class="fa fa-trash ms-3 text-danger deleteButton"
              @click="() => handlePress(contact.phone)"
            >
            </i> </span
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewContact",
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    handlePress(phone) {
      if (confirm("Are you sure you want to delete this phone?")) {
        this.$emit("removeContact", phone);
      }
    },
    handleSearch() {
      this.$emit("searchContact", this.searchTerm);
    },
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          contact.phone.toString().includes(this.searchTerm)
        );
      });
    },
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
