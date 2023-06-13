<template>
  <div class="row m-0 p-0 mb-4">
    <div class="col-1">
      <input
        type="number"
        :value="siraNo"
        :id="'sira' + divCount"
        class="sira_no border-0 border-bottom w-100 p-2 fw-bold"
        style="font-size: 12px"
      />
    </div>
    <div class="col-2">
      <select
        v-model="selectedOrder"
        class="form-select w-100 p-2 fw-bold"
        aria-label="Default select example"
        style="font-size: 12px"
      >
        <option selected></option>
        <!-- Burada v-for ile data.js dosyasındaki verileri option olarak gösteriyorum -->
        <option v-for="order in orders" :key="order.ID" :value="order">
          {{ order.ProductBarcode }}
        </option>
      </select>
    </div>
    <div class="col-2">
      <select
        v-model="selectedOrder"
        class="form-select w-100 p-2 fw-bold"
        aria-label="Default select example"
        style="font-size: 12px"
      >
        <option selected></option>
        <!-- Burada v-for ile data.js dosyasındaki verileri option olarak gösteriyorum -->
        <option v-for="order in orders" :key="order.ID" :value="order">
          {{ order.ProductName }}
        </option>
      </select>
    </div>
    <div class="col-1">
      <select
        v-model="selectedOrder"
        class="form-select w-100 p-2 fw-bold"
        aria-label="Default select example"
        style="font-size: 12px"
      >
        <option selected></option>
        <!-- Burada v-for ile data.js dosyasındaki verileri option olarak gösteriyorum -->
        <option v-for="order in orders" :key="order.ID" :value="order">
          {{ order.MeasureUnit }}
        </option>
      </select>
    </div>
    <div class="col-1">
      <input
        type="text"
        :value="selectedOrder?.birimsayi || 1"
        class="border-0 border-bottom w-100 p-2 fw-bold"
        style="font-size: 12px"
      />
    </div>

    <div class="col-1">
      <input
        type="text"
        :value="selectedOrder?.quantity || 0"
        class="border-0 border-bottom w-100 p-2 fw-bold"
        style="font-size: 12px"
      />
      <input
        type="text"
        :value="selectedOrder?.Currency || ''"
        class="border-0 border-bottom w-100 p-2 fw-bold"
        style="font-size: 12px"
      />
    </div>
    <div class="col-1">
      <input
        type="text"
        :value="selectedOrder?.ProductUnitPrice || 0"
        class="border-0 border-bottom mb-2 w-100 p-2 fw-bold"
        style="font-size: 12px"
      />
    </div>
    <div class="col-1">
      <input
        type="text"
        v-model.number.lazy="taxRate"
        class="border-0 border-bottom w-100 p-2 fw-bold"
        style="font-size: 12px"
      />
    </div>

    <div class="col-1">
      <input
        type="text"
        v-model.number.lazy="totalAmount"
        name=""
        id=""
        class="border-0 border-bottom w-100 p-2 fw-bold"
        style="font-size: 12px"
      />
    </div>
    <div class="col-1">
      <button
        class="btn btn-danger p-1 w-100 mb-0 fw-bold mx-auto delete-button"
        @click.prevent="$emit('removeNewDiv', divCount)"
      >
        <i class="fas fa-trash-alt" style="margin-right: 10px"></i>SİL
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import orders from "../data/data.js"; // Burada data.js dosyasını import ediyorum

export default defineComponent({
  name: "NewDiv",
  props: ["siraNo", "divCount", "rows"],
  setup() {
    const selectedOrder = ref(null); // Burada seçilen sipariş için bir reaktif veri oluşturuyorum
    const selectedBarcode = ref("");
    const selectedName = ref("");
    const selectedMeasureUnit = ref("");
    const ProductUnitPrice = ref(selectedOrder.value?.ProductUnitPrice || 0);
    // Burada setup fonksiyonu kullanarak veri ve yöntemleri tanımlıyorum

    const quantity = ref(""); // Burada miktar için bir reaktif veri oluşturuyorum
    const currency = ref(""); // Burada miktar için bir reaktif veri oluşturuyorum
    const totalPrice = computed(
      () => quantity.value * selectedOrder.value?.ProductUnitPrice || 0
    ); // Burada toplam fiyatı hesaplamak için bir hesaplanmış veri oluşturuyorum
    const taxRate = ref(""); // Burada KDV oranı için bir reaktif veri oluşturuyorum
    const taxAmount = computed(() => (totalPrice.value * taxRate.value) / 100); // Burada KDV tutarını hesaplamak için bir hesaplanmış veri oluşturuyorum
    const totalAmount = computed(() => totalPrice.value + taxAmount.value); // Burada toplam tutarı hesaplamak için bir hesaplanmış veri oluşturuyorum

    return {
      selectedBarcode,
      ProductUnitPrice,
      selectedName,
      selectedMeasureUnit,
      currency,
      orders,
      selectedOrder,
      quantity,
      totalPrice,
      taxRate,
      taxAmount,
      totalAmount,
    };
  },
});
</script>

<style scoped></style>
