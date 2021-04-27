<template>
  <!-- eslint-disable max-len -->
  <main class="bg-cmsDarkGreen min-h-screen min-w-screen pb-30px">
    <div class="container">
      <AuthNavbar/>
    </div>
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
import AuthNavbar from '@/components/auth/AuthNavbar.vue';

export default {
  components: {
    AuthNavbar,
  },
};
</script>
