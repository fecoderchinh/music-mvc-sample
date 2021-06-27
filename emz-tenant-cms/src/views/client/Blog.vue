<template>
  <!-- eslint-disable max-len -->
  <Tabs :tabs="tabs" :initialTab="initialTab" class="cms-tabs__blog">

    <template slot="tab-panel-all">
      <BlogList/>
    </template>

    <template slot="tab-panel-categories">
      <BlogCategories />
    </template>

    <BlogComments slot="tab-panel-comments" />

  </Tabs>
</template>

<script>
import Tabs from '@/components/client/Tabs.vue';
import BlogList from '@/components/client/BlogList.vue';
import BlogCategories from '@/components/client/BlogCategories.vue';
import BlogComments from '@/components/client/BlogComments.vue';

import ModalNewPost from '@/components/client/ModalNewPost.vue';
import ModalNewCategory from '@/components/client/ModalNewCategory.vue';

export default {
  components: {
    Tabs,
    BlogList,
    BlogCategories,
    BlogComments,
  },
  data() {
    return {
      modalNewPost: ModalNewPost,
      modalNewCategory: ModalNewCategory,
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Danh sách bài viết',
          modal: ModalNewPost,
          modalName: 'Tạo bài viết',
          modalWidth: 1200,
        },
        {
          tabId: 'categories',
          tabName: 'Danh mục bài viết',
          modal: ModalNewCategory,
          modalName: 'Tạo danh mục',
          modalWidth: 1200,
        },
        {
          tabId: 'comments',
          tabName: 'Quản lý bình luận',
        },
      ],
    };
  },
};
</script>
