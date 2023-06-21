<template>
  <div>
    <div class="form-group m-2">
      <div class="col-3">
        <label for="selected" class="form-label col-3 w-75"
          ><i class="fas fa-users" style="color: #74829a; margin-right: 10px"></i
          >Müşteri Listesi</label
        >
      </div>
      <div class="col-4">
        <!-- v-model ile arama terimini bağla -->
        <input
        style="border-style: solid; border-color: aqua;"
          type="text"
          class="form-control bi bi-search"
          placeholder="Ara..."
          v-model="searchTerm"
        />
       
        <ul class="options-list">
          <li v-if="selectedCustomer" @click="selectCustomer(selectedCustomer.id)">
        {{ selectedCustomer.title }}
      </li>
        </ul>
      </div>
    </div>
    <div class="form-group m-2">
      <div class="col-3">
        <label for="MusteriBilgileri" class="form-label col-3 w-75"
          ><i class="fas fa-id-card" style="color: #74829a; margin-right: 10px"></i
          >Müşteri Bilgileri</label
        >
      </div>
      <div
        ref="musteriBilgileri"
        class="col-9"
        id="musteriBilgileri"
        v-show="selectedValue"
      >
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-0 border-bottom"
            id="musteriUnvani"
            placeholder="Unvan"
            name="title"
            v-model="title"
          />
          <label for="musteriUnvani">Unvan</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-0 border-bottom"
            id="vergiDairesi"
            name="vergiDairesi"
            placeholder="Vergi Dairesi"
            v-model="vergiDairesi"
          />
          <label for="vergiDairesi">Vergi Dairesi</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-0 border-bottom"
            id="vergiNo"
            placeholder="Vergi No"
            name="Vergi No"
            v-model.number="vergiNo"
          />
          <label for="vergiNo">Vergi No</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-0 border-bottom"
            id="musteriAdresi"
            name="musteriAdresi"
            placeholder="Adres"
            v-model="adres"
          />
          <label for="musteriAdresi">Adres</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customers from "../data/customers.js";
export default {
  data() {
    return {
      selectedValue: null,
      title: "",
      vergiDairesi: "",
      vergiNo: null,
      adres: "",
      customers,
      searchTerm: "",
      selectedCustomer: null,
    };
  },
  methods: {
    sendData() {
      const data = {
        selectedValue: this.selectedValue,
        title: this.title,
        vergiDairesi: this.vergiDairesi,
        vergiNo: this.vergiNo,
        adres: this.adres,
      };
      console.log("Veriler:", data);
      alert("Veriler başarıyla gönderidi");
    },
    // seçeneklerden birini seçmek için bir fonksiyon tanımla
    selectCustomer(id) {
      this.selectedCustomer = this.customers.find((customer) => customer.id === id);
    },
  },
  computed: {
    // arama terimine göre müşterileri filtreleyen bir fonksiyon tanımla
    filteredOptions() {
      // arama terimini küçük harfe çevir
      const term = this.searchTerm.toLowerCase();
      // müşteriler dizisini filtrele ve arama terimi ile eşleşenleri döndür
      return this.customers.filter((customer) => {
        return customer.title.toLowerCase().includes(term);
      });
    },
  },
  watch: {
    selectedValue(newValue) {
      if (newValue) {
        const selectedCustomer = customers.find(
          (customer) => customer.id === newValue
        );
        if (selectedCustomer) {
          this.title = selectedCustomer.title;
          this.vergiDairesi = selectedCustomer.taxOffice;
          this.vergiNo = selectedCustomer.taxNumber;
          this.adres = selectedCustomer.address;
        } else {
          this.title = "";
          this.vergiDairesi = "";
          this.vergiNo = null;
          this.adres = "";
        }
      }
    },
  },
};
</script>