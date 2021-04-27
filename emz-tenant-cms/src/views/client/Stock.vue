<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Quản lý kho</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline sm:mr-0 sm:mb-3">
            <Button button-class="cms-button cms-button-blue">
              <template slot="name">
                Thêm sản phẩm
              </template>
            </Button>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <div class="col-span-6">

        <Stock />

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Button from '@/components/client/Button.vue';
import Stock from '@/components/client/Stock.vue';

export default {
  components: {
    Header,
    Button,
    Stock,
  },
};
</script>
