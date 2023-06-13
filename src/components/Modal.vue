<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h1>Müşteri Listesi</h1>
      // Bir input box oluşturuyoruz ve v-model ile searchText verisine
      bağlıyoruz
      <input type="text" v-model="searchText" placeholder="Müşteri ara..." />
      // Müşteri listesini bir select option içinde gösteriyoruz ve v-model ile
      selectedCustomer verisine bağlıyoruz
      <select v-model="selectedCustomer">
        // Müşteriler verisini filtreleyerek arama özelliği sağlıyoruz // Burada
        value olarak customer objesini veriyoruz
        <option
          v-for="customer in filteredCustomers"
          :key="customer.id"
          :value="customer">
          {{ customer.unvan }}
        </option>
      </select>
      // Seç butonuna tıklandığında selectCustomer fonksiyonunu çağırıyoruz
      <button @click="selectCustomer">Seç</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Axios kütüphanesini import ediyoruz

export default {
  props: ["showModal"], // showModal verisini prop olarak alıyoruz
  data() {
    return {
      customers: [],
      searchText: "",
      selectedCustomer: {},
    };
  },
  mounted() {
    axios
      .get("https://example.com/api/customers")
      .then((response) => {
        this.customers = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter((customer) =>
        customer.unvan.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    selectCustomer() {
      let form = document.getElementById("form");
      let inputs = form.getElementsByTagName("input");
      inputs[0].value = this.selectedCustomer.id;
      inputs[1].value = this.selectedCustomer.unvan;
      inputs[2].value = this.selectedCustomer.vergiDairesi;
      inputs[3].value = this.selectedCustomer.vergiNo;
      inputs[4].value = this.selectedCustomer.adres;
      this.closeModal();
    },
  },
};
</script>
