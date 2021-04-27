<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
      <a href="/dashboard/settings" slot="content">Cài đặt</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Kết nối thanh toán</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <Connect />
        <ManualPayment />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import Connect from '@/components/client/Connect.vue';
import ManualPayment from '@/components/client/ManualPayment.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    Connect,
    ManualPayment,
  },
};
</script>
