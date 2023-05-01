<template>
  <NavBar :totalContact="totalContact" />
  <h1 class="my-2 text-primary">Phonebook</h1>

  <div class="container">
    <div class="row mx-auto">
      <div class="col-4">
        <AddContact @addNewContact="saveContact" />
      </div>

      <div class="col-8">
        <ViewContact :contacts="contacts" @removeContact="deleteContact" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import AddContact from "./components/AddContact.vue";
import ViewContact from "./components/ViewContact.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AddContact,
    ViewContact,
  },
  data() {
    return {
      totalContact: 2,
      contacts: [
        {
          name: "Rahul Dey",
          phone: 1234567890,
        },
        {
          name: "User One",
          phone: 9892392893,
        },
      ],
    };
  },
  methods: {
    saveContact(contact) {
      const result = this.contacts.find((item) => item.phone === contact.phone);
      if (result !== undefined) {
        alert("Phone Number already in phonebook!");
        return;
      } else {
        this.contacts.push(contact);
        alert("Contact save successfully!");
      }
    },
    deleteContact(phone) {
      const index = this.contacts.findIndex((item) => item.phone === phone);
      if (index !== -1) {
        this.contacts.splice(index, 1);
        alert(`${phone} removed from contacts.`);
      } else {
        console.log(`Phone number ${phone} not found in contacts.`);
      }
    },
  },
  watch: {
    contacts: {
      handler(newItems) {
        this.totalContact = newItems.length;
      },
      deep: true,
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
