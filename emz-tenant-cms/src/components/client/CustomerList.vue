<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-p">

      <Tabs :tabs="tabs" :initialTab="initialTab" main-class="filter-tabs">
        <template slot="tab-panel-all">
          <CustomerListTabAll/>
        </template>
        <template slot="tab-panel-moidk">
          <p class="text-14px text-menuItem">2</p>
        </template>
        <template slot="tab-panel-chuamh">
          <p class="text-14px text-menuItem">3</p>
        </template>
        <template slot="tab-panel-damh">
          <p class="text-14px text-menuItem">4</p>
        </template>
        <template slot="tab-panel-vuahuy">
          <p class="text-14px text-menuItem">5</p>
        </template>
        <template slot="tab-panel-thanthiet">
          <p class="text-14px text-menuItem">6</p>
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
import CustomerListTabAll from './CustomerListTabAll.vue';

export default {
  components: {
    Footer,
    Tabs,
    CustomerListTabAll,
  },
  data() {
    return {
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Tất cả khách hàng',
        },
        {
          tabId: 'moidk',
          tabName: 'Mới đăng ký',
        },
        {
          tabId: 'chuamh',
          tabName: 'Chưa mua hàng',
        },
        {
          tabId: 'damh',
          tabName: 'Đã mua hàng',
        },
        {
          tabId: 'vuahuy',
          tabName: 'Vừa hủy đơn',
        },
        {
          tabId: 'thanthiet',
          tabName: 'Khách hàng thân thiết',
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
