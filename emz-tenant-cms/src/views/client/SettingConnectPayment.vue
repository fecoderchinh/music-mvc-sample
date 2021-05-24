<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
      <a href="/dashboard/settings" slot="content">Cài đặt</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Kết nối thanh toán</h1>
      <Button slot="right" button-class="cms-button cms-button-blue" @click="openModal">
        <template slot="name">
          Thêm thanh toán mới
        </template>
      </Button>
    </Header>
    <!-- end box title -->

    <div class="grid grid-cols-6 gap-5">

      <!-- column -->
      <div class="col-span-6">
        <ConnectPayment />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import Button from '@/components/client/Button.vue';
import ConnectPayment from '@/components/client/ConnectPayment.vue';
import ModalPayment from "@/components/client/ModalPayment";

export default {
  components: {
    Breadcrumb,
    Header,
    Button,
    ConnectPayment,
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 600, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalPayment, options, style, events);
    },
  }
};
</script>
