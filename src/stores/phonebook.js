import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const usePhonebookStore = defineStore("phonebook", {
  state: () => {
    return {
      contacts: [
        {
          id: uuid(),
          name: "Rahul Dey",
          phone: 1234567890,
        },
        {
          id: uuid(),
          name: "User One",
          phone: 9892392893,
        },
      ],
    };
  },
  actions: {
    // create a new contact by name and phone
    create(contact) {
      const result = this.contacts.find((item) => item.phone === contact.phone);
      if (result !== undefined) {
        alert("Phone Number already in phonebook!");
        return;
      } else {
        this.contacts.push({ id: uuid(), ...contact });
        alert("Contact save successfully!");
      }
    },
    // delete a contact by its id
    delete(id) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
      alert(`Contact of id : ${id} deleted successfully!`);
    },
  },
  getters: {
    // sort by  contact name
    contactByName(state) {
      const sortable = [...state.contacts];
      return sortable.sort((a, b) => a.name.localeCompare(b.name));
    },
    // get total contact count
    getTotalContactCount() {
      return this.contacts.length;
    },
  },
});
