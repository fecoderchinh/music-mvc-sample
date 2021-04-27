<template>
  <div class="auth__login container">
    <div class="grid grid-cols-4">
      <div class="col-span-1 sm:hidden"></div>
      <div class="col-span-2 sm:col-span-4">
        <AuthRegisterError/>
      </div>
      <div class="col-span-1 sm:hidden">
        <AuthBackground/>
      </div>
    </div>
  </div>
</template>

<script>
import AuthRegisterError from '@/components/auth/AuthRegisterError.vue';
import AuthBackground from '@/components/auth/AuthBackground.vue';

export default {
  components: {
    AuthRegisterError,
    AuthBackground,
  },
};
</script>
