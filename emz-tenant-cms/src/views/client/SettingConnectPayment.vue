<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
      <a href="/dashboard/settings" slot="content">Cài đặt</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Kết nối thanh toán</h1>
      <Button slot="right" button-class="cms-button cms-button-blue">
        <template slot="name">
          Thêm thanh toán mới
        </template>
      </Button>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <ConnectPayment />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import Button from '@/components/client/Button.vue';
import ConnectPayment from '@/components/client/ConnectPayment.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    Button,
    ConnectPayment,
  },
};
</script>
