<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-p">

      <Tabs :tabs="tabs" :initialTab="initialTab" main-class="filter-tabs">
        <template slot="tab-panel-all">
          <PromotionsTabAll/>
        </template>
        <template slot="tab-panel-on-applying">
          <p class="text-14px text-menuItem">Đang áp dụng</p>
        </template>
        <template slot="tab-panel-un-apply">
          <p class="text-14px text-menuItem">Chưa áp dụng</p>
        </template>
        <template slot="tab-panel-stop-apply">
          <p class="text-14px text-menuItem">Ngừng áp dụng</p>
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
import PromotionsTabAll from './PromotionsTabAll.vue';

export default {
  components: {
    Footer,
    Tabs,
    PromotionsTabAll,
  },
  data() {
    return {
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Tất cả khuyến mại',
        },
        {
          tabId: 'on-applying',
          tabName: 'Đang áp dụng',
        },
        {
          tabId: 'un-apply',
          tabName: 'Chưa áp dụng',
        },
        {
          tabId: 'stop-apply',
          tabName: 'Ngừng áp dụng',
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
