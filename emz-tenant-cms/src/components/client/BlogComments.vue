<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-p no-b">

      <Tabs :tabs="tabs" :initialTab="initialTab" main-class="filter-tabs">

        <BlogCommentsContent slot="tab-panel-all"/>

        <p class="text-14px text-menuItem" slot="tab-panel-no-confirm">2</p>

        <p class="text-14px text-menuItem" slot="tab-panel-no-reply">3</p>

      </Tabs>

    </div>
    <!-- end box content -->

    <Footer class="text-right"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Tabs from './Tabs.vue';
import BlogCommentsContent from './BlogCommentsContent.vue';

export default {
  components: {
    Footer,
    Tabs,
    BlogCommentsContent,
  },
  data() {
    return {
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Tất cả bình luận',
        },
        {
          tabId: 'no-confirm',
          tabName: 'Chưa duyệt',
        },
        {
          tabId: 'no-reply',
          tabName: 'Chưa trả lời',
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
