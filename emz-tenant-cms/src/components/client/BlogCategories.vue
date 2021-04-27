<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-p">

      <Tabs :tabs="tabs" :initialTab="initialTab" main-class="filter-tabs">

        <BlogCategoriesContent slot="tab-panel-all"/>

        <p class="text-14px text-menuItem" slot="tab-panel-auto-publish">2</p>

        <p class="text-14px text-menuItem" slot="tab-panel-inspect">3</p>

        <p class="text-14px text-menuItem" slot="tab-panel-comments">4</p>

      </Tabs>

    </div>
    <!-- end box content -->

    <Footer class="text-right"/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Tabs from './Tabs.vue';
import BlogCategoriesContent from './BlogCategoriesContent.vue';

export default {
  components: {
    Footer,
    Tabs,
    BlogCategoriesContent,
  },
  data() {
    return {
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Tất cả danh mục',
        },
        {
          tabId: 'auto-publish',
          tabName: 'Tự động đăng',
        },
        {
          tabId: 'inspect',
          tabName: 'Kiểm duyệt',
        },
        {
          tabId: 'comments',
          tabName: 'Tất cả bình luận',
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
