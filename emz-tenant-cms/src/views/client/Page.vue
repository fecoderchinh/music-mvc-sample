<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Các trang con</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline sm:mr-0 sm:mb-3">
            <Button @click="openModal" button-class="cms-button cms-button-blue">
              <template slot="name">
                Thêm trang nội dung
              </template>
            </Button>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <PageList />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Button from '@/components/client/Button.vue';
import PageList from '@/components/client/PageList.vue';

import ModalNewPage from '@/components/client/ModalNewPage.vue';

export default {
  components: {
    Header,
    Button,
    PageList,
  },
  methods: {
    openModal() {
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

      this.$modal.show(ModalNewPage, options, style, events);
    },
  },
};
</script>
