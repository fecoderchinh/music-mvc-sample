<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-px">

      <StockComponents/>

    </div>
    <!-- end box content -->

    <Footer class="text-right"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import StockComponents from './StockComponents.vue';

export default {
  components: {
    Footer,
    StockComponents,
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
