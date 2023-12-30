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
      // Indeks produk saat ini
      currentProductIndex: 1,
      // Objek yang menyimpan data produk saat ini
      currentProduct: {},
    };
  },
  methods: {  
    // Fungsi untuk mendapatkan data produk dari API berdasarkan indeks
    async getApi(index) {
      try {
        const response = await axios.get(baseUrl + index);
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    // Fungsi untuk mendapatkan produk selanjutnya
    async getNextProduct() {
      if (this.currentProductIndex <= 20) {
        const product = await this.getApi(this.currentProductIndex);
        if (product) {
          this.currentProduct = product;
          this.currentProductIndex++;
        }else {
          console.error("Failed to fetch product data");
        }
      } else {
        // Jika sudah mencapai indeks 20, kembali ke indeks 1
        this.currentProductIndex = 1;
        this.getNextProduct(); // Panggil kembali untuk mendapatkan produk pada indeks 1
      }
    },
  },
  mounted() {
    // Setel produk pertama saat komponen dimuat
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
