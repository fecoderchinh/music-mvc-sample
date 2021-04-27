<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb/>

    <LeftRightButton/>

    <!-- box title -->
    <Header>
      <h1 slot="title">
        D1001 <span class="ml-5 text-standardCMS text-placeholderStyle">12/9/2020 15:45</span>
      </h1>
      <CustomSelectOptionOrder slot="right"/>
      <Notify slot="notify"/>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">
        <CreateOrderMessage />
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
import WidgetFilterCustomer from '@/components/client/WidgetFilterCustomer.vue';
import CreateOrderMessage from '@/components/client/CreateOrderMessage.vue';
import Notify from '@/components/client/Notify.vue';
import LeftRightButton from '@/components/client/LeftRightButton.vue';
import WidgetSearchCustomer from '@/components/client/WidgetSearchCustomer.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    CustomSelectOptionOrder,
    WidgetFilterCustomer,
    CreateOrderMessage,
    Notify,
    LeftRightButton,
    WidgetSearchCustomer,
  },
};
</script>
