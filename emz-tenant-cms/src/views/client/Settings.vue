<template>
  <!-- eslint-disable max-len -->
  <div class="relative xl:max-w-1000 xl:mx-auto">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Cài đặt</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <Settings />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Settings from '@/components/client/Settings.vue';

export default {
  components: {
    Header,
    Settings,
  },
};
</script>
