<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Danh sách đơn hàng</h1>
      <Button slot="right" link="/dashboard/order-create" button-class="cms-button cms-button-blue">
        <template slot="name">
          Tạo đơn hàng
        </template>
      </Button>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <OrderList />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import OrderList from '@/components/client/OrderList.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Header,
    OrderList,
    Button,
  },
};
</script>
