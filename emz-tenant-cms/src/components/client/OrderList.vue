<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-p">

      <Tabs :tabs="tabs" :initialTab="initialTab" main-class="filter-tabs">
        <template slot="tab-panel-all">
          <OrderListTabAll/>
        </template>
        <template slot="tab-panel-pending">
          <p class="text-14px text-menuItem">PENDING</p>
        </template>
        <template slot="tab-panel-wait">
          <p class="text-14px text-menuItem">WAIT</p>
        </template>
        <template slot="tab-panel-unpaid">
          <p class="text-14px text-menuItem">UNPAID</p>
        </template>
        <template slot="tab-panel-cancel">
          <p class="text-14px text-menuItem">CANCEL</p>
        </template>
      </Tabs>

    </div>
    <!-- end box content -->

    <Footer class="text-right"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Tabs from './Tabs.vue';
import OrderListTabAll from './OrderListTabAll.vue';

export default {
  components: {
    Footer,
    Tabs,
    OrderListTabAll,
  },
  data() {
    return {
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Tất cả đơn hàng',
        },
        {
          tabId: 'pending',
          tabName: 'Chưa duyệt',
        },
        {
          tabId: 'wait',
          tabName: 'Chờ lấy hàng',
        },
        {
          tabId: 'unpaid',
          tabName: 'Chưa thanh toán',
        },
        {
          tabId: 'cancel',
          tabName: 'Đơn bị hoàn',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .filter-tabs {
    .cms-tabs-header-list-item {
      @media (max-width: 768px) {
        @apply px-5;
      }
    }
  }
</style>
