<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-px">

      <ProductListTabAll/>

    </div>
    <!-- end box content -->

    <Footer class="text-right"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import ProductListTabAll from './ProductListTabAll.vue';

export default {
  components: {
    Footer,
    ProductListTabAll,
  },
};
</script>

<style lang="scss"></style>
