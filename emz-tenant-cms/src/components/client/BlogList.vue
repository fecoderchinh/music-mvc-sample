<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-p">

      <Tabs :tabs="tabs" :initialTab="initialTab" main-class="filter-tabs">

        <BlogListContent slot="tab-panel-all"/>

        <p class="text-14px text-menuItem" slot="tab-panel-draft">2</p>

        <p class="text-14px text-menuItem" slot="tab-panel-published">3</p>

      </Tabs>

    </div>
    <!-- end box content -->

    <Footer class="text-right"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Tabs from './Tabs.vue';
import BlogListContent from './BlogListContent.vue';

export default {
  components: {
    Footer,
    Tabs,
    BlogListContent,
  },
  data() {
    return {
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Tất cả bài viết',
        },
        {
          tabId: 'draft',
          tabName: 'Chưa đăng',
        },
        {
          tabId: 'published',
          tabName: 'Đã đăng',
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
