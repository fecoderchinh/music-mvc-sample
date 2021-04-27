<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb/>

    <!-- box title -->
    <Header>
      <h1 slot="title">Tạo đơn hàng</h1>
      <CustomSelectOptionOrder slot="right"/>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">
        <CreateOrder />
      </div>
      <!-- end column -->

      <!-- column -->
      <div class="col-span-6 xl:col-span-2">

        <WidgetSearchCustomer/>

        <WidgetFilterCustomer/>

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import CustomSelectOptionOrder from '@/components/client/CustomSelectOptionOrder.vue';
import CreateOrder from '@/components/client/CreateOrder.vue';
import WidgetSearchCustomer from '@/components/client/WidgetSearchCustomer.vue';
import WidgetFilterCustomer from '@/components/client/WidgetFilterCustomer.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    CustomSelectOptionOrder,
    CreateOrder,
    WidgetFilterCustomer,
    WidgetSearchCustomer,
  },
};
</script>
