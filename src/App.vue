<template>
  <div id="app">
    <ProductDisplay :product="currentProduct" @next-product="getNextProduct" />
  </div>
</template>

<script>
import axios from "axios";
import ProductDisplay from "@/components/ProductDisplay.vue";

const baseUrl = "https://fakestoreapi.com/products/";

export default {
  name: "App",
  components: {
    ProductDisplay,
  },
  data() {
    return {
      currentProductIndex: 1,
      currentProduct: {},
    };
  },
  methods: {
    async getApi(index) {
      try {
        const response = await axios.get(baseUrl + index);
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    async getNextProduct() {
      if (this.currentProductIndex <= 20) {
        const product = await this.getApi(this.currentProductIndex);
        if (product) {
          this.currentProduct = product;
          this.currentProductIndex++;
        }
      }
    },
  },
  mounted() {
    this.getNextProduct();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
