<template>
  <!-- eslint-disable max-len -->
  <div class="relative">
    <Breadcrumb>
      <a href="#" slot="content">D1001</a>
    </Breadcrumb>

    <!-- box title -->
    <Header>
      <h1 slot="title">
        Tạo phiếu giao hàng
      </h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6 xl:col-span-4">
        <CreateOrderNote />
      </div>
      <!-- end column -->

      <!-- column -->
      <div class="col-span-6 xl:col-span-2">

        <Widget>
          <template slot="title">
            <label class="cursor-pointer">Địa chỉ giao hàng</label>
            <a href="#" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Thêm</a>
          </template>
          <template slot="content">
            <h3 class="text-standardCMS text-menuIcon">Chưa có địa chỉ giao hàng</h3>
          </template>
        </Widget>

      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import CreateOrderNote from '@/components/client/CreateOrderNote.vue';
import Widget from '@/components/client/Widget.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    CreateOrderNote,
    Widget,
  },
};
</script>
