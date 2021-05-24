<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
      <a href="/dashboard/settings" slot="content">Cài đặt</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Thiết lập phí vận chuyển trên website</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <ShippingFeeSettings />
        <ShippingFeePartner />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import ShippingFeeSettings from '@/components/client/ShippingFeeSettings.vue';
import ShippingFeePartner from '@/components/client/ShippingFeePartner.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    ShippingFeeSettings,
    ShippingFeePartner,
  }
};
</script>
