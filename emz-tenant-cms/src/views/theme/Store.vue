<template>
  <div class="w-full">
    <TNavbar/>
    <div class="relative">
      <router-view />
    </div>
  </div>
</template>

<script>
import TNavbar from '@/components/theme/TNavbar.vue';

export default {
  components: {
    TNavbar,
  },
};
</script>
