<template>
  <div class="auth__login container">
    <div class="grid grid-cols-4">
      <div class="col-span-1 sm:hidden"></div>
      <div class="col-span-2 sm:col-span-4">
        <AuthLogin/>
      </div>
      <div class="col-span-1 sm:hidden">
        <AuthBackground/>
      </div>
    </div>
  </div>
</template>

<script>
import AuthLogin from '@/components/auth/AuthLogin.vue';
import AuthBackground from '@/components/auth/AuthBackground.vue';

export default {
  components: {
    AuthLogin,
    AuthBackground,
  },
};
</script>

<style lang="scss">
  .auth {
    &__login {
      @screen lg {
        @apply mt-10;
      }
      @screen sm {
        @apply px-5;
      }
      @media (pointer:coarse) {
        @apply mt-30px;
      }
      input, select {
        @apply text-lg #{!important};
      }
    }
  }
</style>
