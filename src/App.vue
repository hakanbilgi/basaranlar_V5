<template>
  <div id="app">
    <div class="navbar">
      <ul class="tabs">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(tab)"
          :data-title="tab.title"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <div class="content">
      <component v-if="selectedTab" :is="selectedTab.component"></component>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import CustomerInfo from "./components/CustomerInfo.vue";
import ProductService from "./components/ProductService.vue";
import GrandTotal from "./components/GrandTotal.vue";
import Charts from "./components/Charts.vue";


export default defineComponent({
  name: "App",
  setup() {
    const tabs = ref([
      { title: "Müşteri Bilgileri", component: CustomerInfo },
      { title: "Ürün / Hizmet", component: ProductService },
      { title: "Toplam İndirim", component: GrandTotal },
      { title: "Grafikler", component: Charts },
    ]);

    const selectedTab = ref(tabs.value[0]);

    const selectTab = (tab) => {
      selectedTab.value = tab;

      document.querySelectorAll(".tabs li").forEach((li) => {
        li.classList.remove("active");
      });
      document
        .querySelector(`[data-title="${tab.title}"]`)
        .classList.add("active");
    };

    return {
      tabs,
      selectedTab,
      selectTab,
    };
  },
});
</script>

<style>
:root {
  --primary-color: #132591;
  --secondary-color: #3547af;
}

.navbar {
  background-color: var(--primary-color);
  margin-bottom: 16px;
}

.tabs {
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 30px;
}

.tabs li {
  color: white;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.tabs li:hover {
  background-color: var(--secondary-color);
}

.tabs li.active {
  border-bottom: 3px solid white;
}
</style>
