<template>
  <div class="charts">
    <h1>Charts</h1>
    <p>
      Grafikle ilgili hangi verilerin alınacağı belli olduktan sonra graik
      fonksiyonları bu template içerisinde kodlanacak
    </p>
    <div class="chart">Chart 1</div>
    <div class="chart">Chart 2</div>
    <div class="chart">Chart 3</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Charts",
});
</script>

<style scoped>
.charts {
  border: 1px solid black;
  padding: 10px;
  width: 97%;
  margin: 0 auto;
}

.chart {
  border: 1px dashed gray;
  margin: 10px;
  width: 97%;
  margin: 0 auto;
}
</style>
