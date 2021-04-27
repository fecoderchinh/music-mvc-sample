<template>
  <!-- eslint-disable max-len -->
  <Tabs :tabs="tabs" :initialTab="initialTab" class="cms-tabs__blog">

    <template slot="tab-panel-all">
      <BlogList/>

      <Button @click="openModalNewPost" class="absolute right-0 -top-50px" button-class="cms-button cms-button-blue">
        <template slot="name">
          Tạo bài viết
        </template>
      </Button>

    </template>

    <template slot="tab-panel-categories">
      <BlogCategories />

      <Button @click="openModalNewCategory" class="absolute right-0 -top-50px" button-class="cms-button cms-button-blue">
        <template slot="name">
          Tạo danh mục
        </template>
      </Button>

    </template>

    <BlogComments slot="tab-panel-comments" />

  </Tabs>
</template>

<script>
import Tabs from '@/components/client/Tabs.vue';
import Button from '@/components/client/Button.vue';
import BlogList from '@/components/client/BlogList.vue';
import BlogCategories from '@/components/client/BlogCategories.vue';
import BlogComments from '@/components/client/BlogComments.vue';

import ModalNewPost from '@/components/client/ModalNewPost.vue';
import ModalNewCategory from '@/components/client/ModalNewCategory.vue';

export default {
  components: {
    Tabs,
    Button,
    BlogList,
    BlogCategories,
    BlogComments,
  },
  data() {
    return {
      initialTab: 'all',
      tabs: [
        {
          tabId: 'all',
          tabName: 'Danh sách bài viết',
        },
        {
          tabId: 'categories',
          tabName: 'Danh mục bài viết',
        },
        {
          tabId: 'comments',
          tabName: 'Quản lý bình luận',
        },
      ],
    };
  },
  methods: {
    openModalNewPost() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 1200, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalNewPost, options, style, events);
    },
    openModalNewCategory() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 1200, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalNewCategory, options, style, events);
    },
  },
};
</script>
