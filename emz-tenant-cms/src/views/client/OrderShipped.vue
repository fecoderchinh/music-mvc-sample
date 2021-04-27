<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="/default/order-list" slot="content">Danh sách đơn hàng</a>
    </Breadcrumb>

    <LeftRightButton/>

    <!-- box title -->
    <Header>
      <h1 slot="title">
        #1001 <span class="ml-5 text-standardCMS text-placeholderStyle">12/9/2020 15:45</span>
      </h1>
      <CustomSelectOptionOrder slot="right"/>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">
        <CreateOrderShipped />
      </div>
      <!-- end column -->

      <!-- column -->
      <div class="col-span-6 xl:col-span-2">

        <WidgetCustomerDetail/>

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
import CreateOrderShipped from '@/components/client/CreateOrderShipped.vue';
import WidgetCustomerDetail from '@/components/client/WidgetCustomerDetail.vue';
import WidgetFilterCustomer from '@/components/client/WidgetFilterCustomer.vue';
import LeftRightButton from '@/components/client/LeftRightButton.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    CustomSelectOptionOrder,
    CreateOrderShipped,
    WidgetCustomerDetail,
    WidgetFilterCustomer,
    LeftRightButton,
  },
};
</script>
