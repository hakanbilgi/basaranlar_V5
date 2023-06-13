import { createRouter, createWebHistory } from "vue-router";
import CustomerInfo from "./components/CustomerInfo.vue";
import ProductService from "./components/ProductService.vue";
import GrandTotal from "./components/GrandTotal.vue";
import Charts from "./components/Charts.vue";

const routes = [
  {
    path: "/customer-info",
    name: "CustomerInfo",
    component: CustomerInfo,
  },
  {
    path: "/product-service",
    name: "ProductService",
    component: ProductService,
  },
  {
    path: "/grand-total",
    name: "GrandTotal",
    component: GrandTotal,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;