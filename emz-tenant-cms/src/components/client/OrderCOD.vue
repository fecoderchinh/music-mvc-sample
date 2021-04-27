<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">
    <!-- box title -->
    <div class="flex flex-auto sm:flex-col mb-4">
      <!-- eslint-disable max-len -->
      <div class="cms-label flex flex-auto items-center text-2xl text-labelAndTitle w-7/12 mr-5">
        <h1>Quản lý giao hàng COD</h1>
      </div>
      <div class="flex items-center relative w-5/12 sm:w-full">
        <a href="#" class="md:absolute sm:mt-2 top-0 right-0 text-buttonAndURL text-14px font-lato font-medium py-2 px-4 rounded-sm">
          <EllipseSVG class="w-4 fill-placeholderStyle mr-3 inline-flex -mt-px"/>
          Tất cả phiếu giao hàng
        </a>
      </div>
    </div>
    <!-- end box title -->

    <!-- box content -->
    <div class="grid-box no-p">

      <Tabs :tabs="tabs" :initialTab="initialTab" main-class="filter-tabs">
        <template slot="tab-panel-all">
          <OrderCODTabAll/>
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
import {
  EllipseSVG,
} from '../SVGs.vue';

import Footer from './Footer.vue';
import Tabs from './Tabs.vue';
import OrderCODTabAll from './OrderCODTabAll.vue';

export default {
  components: {
    Footer,
    Tabs,
    OrderCODTabAll,
    EllipseSVG,
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
          tabId: 'wait',
          tabName: 'Chờ lấy hàng',
        },
        {
          tabId: 'shipping',
          tabName: 'Đang giao hàng',
        },
        {
          tabId: 'shipped',
          tabName: 'Đã giao hàng',
        },
        {
          tabId: 'wait-transfer',
          tabName: 'Chờ chuyển hoàn',
        },
        {
          tabId: 'transfered',
          tabName: 'Đã chuyển hoàn',
        },
        {
          tabId: 'unpaid',
          tabName: 'Chưa thu tiền',
        },
        {
          tabId: 'prepaid',
          tabName: 'Đã thu hộ',
        },
        {
          tabId: 'paid',
          tabName: 'Đã thanh toán',
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
