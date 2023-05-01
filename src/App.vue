<template>
  <NavBar :totalContact="totalContact" />
  <h1 class="my-2 text-primary">Phonebook</h1>
  <AddContact @addNewContact="saveContact" />

  <div v-for="contact in contacts" :key="contact.phone">
    <p>{{ contact.name }} - {{ contact.phone }}</p>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import AddContact from "./components/AddContact.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AddContact,
  },
  data() {
    return {
      totalContact: 10,
      contacts: [],
    };
  },
  methods: {
    saveContact(result) {
      if (this.contacts.find((contact) => contact.phone === this.phone)) {
        alert("Phone Number already in phonebook!");
        return;
      } else {
        this.contacts.push(result);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
