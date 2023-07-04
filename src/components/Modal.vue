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
import customers from "../data/customers";

export default {
  
  props: ["showModal"],
  data() {
    return {
      customers: [], // Müşterileri tutacak bir dizi tanımlıyoruz
      searchText: "", // Arama metnini tutacak bir veri tanımlıyoruz
      // Burada selectedCustomer verisini bir obje olarak tanımlıyoruz
      selectedCustomer: {}, // Seçilen müşteriyi tutacak bir veri tanımlıyoruz
    };
  },
  mounted() {
    // Component yüklendiğinde customers data sını kullanıyoruz
    this.customers = customers;
  },
  computed: {
    // Müşterileri arama metnine göre filtreleyen bir computed property yazıyoruz
    filteredCustomers() {
      return this.customers.filter((customer) =>
        customer.unvan.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    // Modalı kapatan bir fonksiyon yazıyoruz
    closeModal() {
      this.$emit("close");
    },
    // Seçilen müşteriyi ana ekrana basan bir fonksiyon yazıyoruz
    selectCustomer() {
      // Ana ekrandaki form taglerini seçiyoruz
      let form = document.getElementById("form");
      // Formun içindeki inputları seçiyoruz
      let inputs = form.getElementsByTagName("input");
      // Inputların değerlerini seçilen müşterinin verileriyle dolduruyoruz
      inputs[0].value = this.selectedCustomer.id;
      inputs[1].value = this.selectedCustomer.unvan;
      inputs[2].value = this.selectedCustomer.vergiDairesi;
      inputs[3].value = this.selectedCustomer.vergiNo;
      inputs[4].value = this.selectedCustomer.adres;
      // Modalı kapatıyoruz
      this.closeModal();
    },
  },
};
</script>
