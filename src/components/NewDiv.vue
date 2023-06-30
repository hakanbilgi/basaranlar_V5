<template>
  <div class="row m-0 p-0 mb-4">
    <div class="col-1">
      <input
        type="number"
        :value="siraNo"
        :id="'sira' + divCount"
        class="sira_no border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px;"
      />
    </div>
    <div class="col-2">
      <select
        v-model="selectedOrder"
        class="form-select p-3 fw-bold w-100"
        aria-label="Default select example"
        style="font-size: 12px;"
      >
        <option selected></option>
        <option v-for="order in orders" :key="order.ID" :value="order">
          {{ order.ProductBarcode }}
        </option>
      </select>
    </div>
    <div class="col-2">
      <select
        v-model="selectedOrder"
        class="form-select p-3 fw-bold w-100"
        aria-label="Default select example"
        style="font-size: 12px"
      >
        <option selected></option>
        <option v-for="order in orders" :key="order.ID" :value="order">
          {{ order.ProductName }}
        </option>
      </select>
    </div>
    <div class="col-1">
      <select
        v-model="selectedOrder"
        class="form-select p-3 fw-bold w-100"
        aria-label="Default select example "
        style="font-size: 12px;"
      >
        <option selected></option>
        <option v-for="order in orders" :key="order.ID" :value="order">
          {{ order.MeasureUnit }}
        </option>
      </select>
    </div>
    <div class="col-1">
      <input
        type="text"
        :value="selectedOrder?.Currency || ''"
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px;"
      />
    </div>

    <div class="col-1">
      <!-- Burada state.quantity.value değerini tanımladık ve v-model ile bağladık -->
      <input
        type="text"
        v-model.number.lazy="state.quantity.value"
        class="border-0 border-bottom mb-2 p-3 fw-bold w-100"
        style="font-size: 12px;"
      />
    </div>
    <div class="col-1">
      <input
        type="text"
        :value="Number(selectedOrder?.ProductUnitPrice) || 0"
        class="border-0 border-bottom mb-2 p-3 fw-bold w-100"
        style="font-size: 12px;"
      />
    </div>

    <!-- Burada state.taxRate.value değerini tanımladık ve v-model ile bağladık -->
    <div class="col-1">
      <input
        type="text"
        v-model.number.lazy="state.taxRate.value"
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px;"
      />
    </div>

    <div class="col-1">
      <input
        type="text"
        :value="totalAmount"
        name=""
        id=""
        class="border-0 border-bottom p-3 fw-bold w-100"
        style="font-size: 12px;"
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

import { defineComponent, ref, computed, reactive } from "vue"; // Burada reactive fonksiyonunu import ettik
import orders from "../data/data.js";

export default defineComponent({
  name: "NewDiv",
  props: ["siraNo", "divCount", "rows"],

  setup() {
    const selectedOrder = ref(null);
    const selectedBarcode = ref("");
    const selectedName = ref("");
    const selectedMeasureUnit = ref("");
    const ProductUnitPrice = ref(selectedOrder.value?.ProductUnitPrice || 0);

    // Burada state adında bir reactive nesne tanımladık ve içinde quantity.value ve taxRate.value değerlerini tanımladık
    
    const state = reactive({
      quantity: { value: 1 },
      taxRate: { value: 0 },
    });

    const currency = ref("");

    // Burada computed property olarak hesaplanan değerleri tanımladık
    const totalPrice = computed(
      () =>
        Number(state.quantity.value) *
        Number(selectedOrder.value?.ProductUnitPrice) // Burada state.quantity.value değerini kullandık
    );

    const taxAmount = computed(
      () => (totalPrice.value * state.taxRate.value) / 100
    ); // Burada state.taxRate.value değerini kullandık
    const totalAmount = computed(
      () => Math.round((totalPrice.value + taxAmount.value) * 100) / 100
    );

    // Burada totalAmount değerini console.log ile yazdırdık
    console.log(totalAmount);

    return {
      selectedBarcode,
      ProductUnitPrice,
      selectedName,
      selectedMeasureUnit,
      currency,
      orders,
      selectedOrder,

      // Burada state nesnesini return ettik
      state,
      totalAmount,
    };
  },
});
</script>

<style scoped></style>
