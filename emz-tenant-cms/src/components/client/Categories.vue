<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-px no-b">

<!--      <Loader/>-->

      <CategoriesTab/>

    </div>
    <!-- end box content -->

    <Footer class="text-right"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import CategoriesTab from './CategoriesTab.vue';
// import Loader from "@/components/Loader";

export default {
  components: {
    // Loader,
    Footer,
    CategoriesTab,
  },
};
</script>

<style lang="scss"></style>
