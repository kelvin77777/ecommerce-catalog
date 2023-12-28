<template>
  <div class="all" :class="sectionClass">
    <div class="app-container" v-if="isMenOrWomenCategory">
      <img
        :src="product.image"
        alt="Product Image"
        style="
          max-width: 200px;
          max-height: 300px;
          float: left;
          margin-left: 100px;
          margin-top: 0px;
        "
      />
      <div style="margin-left: 100px; margin-top: 30px; margin-bottom: 1px">
        <p
          class="Title"
          style="font-family: Arial, Helvetica, sans-serif; font-size: x-large"
        >
          {{ product.title }}
        </p>
        <p>
          <span style="float: left">{{ product.category }}</span>
          <span style="float: right">{{ product.rating.rate }}/5</span>
        </p>
        <br />
        <hr />
        <p
          style="
            font-family: 'Times New Roman', Times, serif;
            font-size: larger;
          "
        >
          {{ product.description }}
        </p>
        <hr />
        <p
          class="Price"
          style="font-family: Arial, Helvetica, sans-serif; font-size: x-large"
        >
          ${{ product.price }}
        </p>

        <button
          class="Button1"
          style="text-align: center; margin-top: 10px; margin-left: 0px"
        >
          Buy Now
        </button>
        <button
          class="Button2"
          @click="getNextProduct"
          style="text-align: center; margin-top: 10px; margin-left: 40px"
        >
          Next Product
        </button>
      </div>
    </div>
    <div v-if="!isMenOrWomenCategory">
      <img
        :src="require('@/assets/image.png')"
        alt=""
        style="
          padding: 70px;
          width: 80%;
          height: 30%;
          margin: 0 auto;
          display: block;
        "
      />
      <p
        style="
          font-size: large;
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-top: -28%;
        "
      >
        This product is unavailable to show
      </p>
      <button
        class="border-button3"
        @click="getNextProduct"
        style="
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-top: -25%;
        "
      >
        Next Product
      </button>
    </div>
    <div v-if="loading" class="loader-overlay">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    sectionClass() {
      const category = this.product.category;
      if (category === "men's clothing") {
        return "men-section";
      } else if (category === "women's clothing") {
        return "women-section";
      } else {
        return "unavailable-product";
      }
    },
    isMenOrWomenCategory() {
      const category = this.product.category;
      return category === "men's clothing" || category === "women's clothing";
    },
  },
  methods: {
    getNextProduct() {
      this.loading = true;

      setTimeout(() => {
        this.$emit("next-product");

        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.all {
  background-color: var(--background-color);
  height: 70vh;
}

.app-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 900px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.men-section {
  --background-color: #d6e6ff;
}

.men-section .Title {
  color: #002772;
}

.men-section .Price {
  color: #002772;
}

.men-section .Button1 {
  background-color: #002772;
  color: #fff;
  border: 2px solid #002772;
  border-radius: 5px;
  cursor: pointer;
  width: 230px;
}

.men-section .Button2 {
  background-color: transparent;
  color: #002772;
  border: 2px solid #002772;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 230px;
}

.women-section {
  --background-color: #fde2ff;
}

.women-section .Title {
  color: #720060;
}

.women-section .Price {
  color: #720060;
}

.women-section .Button1 {
  background-color: #720060;
  color: #fff;
  border: 2px solid #720060;
  border-radius: 5px;
  cursor: pointer;
  width: 230px;
}

.women-section .Button2 {
  background-color: transparent;
  color: #720060;
  border: 2px solid #720060;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 230px;
}

.unavailable-product {
  --background-color: #dcdcdc;
}
.border-button3 {
  background-color: transparent;
  color: #1e1e1e;
  border: 2px solid #1e1e1e;
  border-radius: 5px;
  cursor: pointer;
  width: 400px;
}

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
