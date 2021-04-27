<template>
  <!-- eslint-disable max-len -->
  <div class="relative xl:max-w-1000 xl:mx-auto">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Tạo khuyến mãi</h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <Box :boxFixed="true">
          <template slot="content">
            <PromotionListModal />
            <FlashsaleAuto class="mt-30px pt-30px border-t" />
          </template>
        </Box>
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Box from '@/components/client/Box.vue';
import PromotionListModal from '@/components/client/PromotionListModal.vue';
import FlashsaleAuto from '@/components/client/FlashsaleAuto.vue';

export default {
  components: {
    Header,
    Box,
    PromotionListModal,
    FlashsaleAuto,
  },
};
</script>
