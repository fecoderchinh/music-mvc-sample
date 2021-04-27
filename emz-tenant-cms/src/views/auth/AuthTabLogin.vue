<template>
  <div class="auth__login container">
    <div class="grid grid-cols-4">
      <div class="col-span-1 sm:hidden"></div>
      <div class="col-span-2 sm:col-span-4">

        <Tabs :tabs="tabs" :initialTab="initialTab" main-class="cms-tabs__auth">
          <template slot="tab-panel-suplier">
            <AuthTabLoginSuplier/>
          </template>
          <template slot="tab-panel-client">
            <AuthTabLoginClient/>
          </template>
        </Tabs>
      </div>
      <div class="col-span-1 sm:hidden">
        <AuthBackground/>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/client/Tabs.vue';
import AuthTabLoginSuplier from '@/components/auth/AuthTabLoginSuplier.vue';
import AuthTabLoginClient from '@/components/auth/AuthTabLoginClient.vue';
import AuthBackground from '@/components/auth/AuthBackground.vue';

export default {
  components: {
    Tabs,
    AuthTabLoginSuplier,
    AuthTabLoginClient,
    AuthBackground,
  },
  data() {
    return {
      initialTab: 'suplier',
      tabs: [
        {
          tabId: 'suplier',
          tabName: 'Chủ website',
        },
        {
          tabId: 'client',
          tabName: 'Thành viên',
        },
      ],
    };
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
