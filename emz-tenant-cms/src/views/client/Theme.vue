<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">
        Quản lý giao diện
        <a href="#" class="text-14px text-buttonAndURL md:ml-5 sm:block">Xem website của bạn</a>
      </h1>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <Box>
          <template slot="content">
            <CurrentTemplate />
            <OwnTemplate class="border-t pt-6 mt-8" />
          </template>
        </Box>

        <Footer class="text-right"/>
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Header from '@/components/client/Header.vue';
import Box from '@/components/client/Box.vue';
import CurrentTemplate from '@/components/client/CurrentTemplate.vue';
import OwnTemplate from '@/components/client/OwnTemplate.vue';
import Footer from '@/components/client/Footer.vue';

export default {
  components: {
    Header,
    Box,
    CurrentTemplate,
    OwnTemplate,
    Footer,
  },
};
</script>
