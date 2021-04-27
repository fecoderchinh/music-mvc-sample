<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Danh mục sản phẩm</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline sm:mr-0 sm:mb-3">
            <ModalCategoryCreate/>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <div class="col-span-6">

        <Categories />

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import ModalCategoryCreate from '@/components/client/ModalCategoryCreate.vue';
import Categories from '@/components/client/Categories.vue';

export default {
  components: {
    Header,
    ModalCategoryCreate,
    Categories,
  },
};
</script>
