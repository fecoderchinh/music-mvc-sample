<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Khuyến mại</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline">
            <ModalPromoPicker/>
          </li>
        </ul>
      </template>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <Promotions />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Promotions from '@/components/client/Promotions.vue';

import ModalPromoPicker from '@/components/client/ModalPromoPicker.vue';

export default {
  components: {
    Header,
    Promotions,
    ModalPromoPicker,
  },
};
</script>
