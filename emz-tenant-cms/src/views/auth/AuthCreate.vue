<template>
  <div class="auth__login container">
    <div class="grid grid-cols-4">
      <div class="col-span-1 sm:hidden"></div>
      <div class="col-span-2 sm:col-span-4">
        <AuthCreate/>
      </div>
      <div class="col-span-1 sm:hidden">
      </div>
    </div>
  </div>
</template>

<script>
import AuthCreate from '@/components/auth/AuthCreate.vue';

export default {
  components: {
    AuthCreate,
  },
};
</script>
