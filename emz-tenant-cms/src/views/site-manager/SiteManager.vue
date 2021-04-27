<template>
  <!-- eslint-disable max-len -->
  <main class="bg-gray-100 min-h-screen min-w-screen pb-30px">
    <div class="container px-5">
      <SiteManagerNavbar/>
    </div>
    <div class="container px-5">
      <router-view />
    </div>
  </main>
</template>

<script>
import SiteManagerNavbar from '@/components/site-manager/SiteManagerNavbar.vue';

export default {
  components: {
    SiteManagerNavbar,
  },
};
</script>
