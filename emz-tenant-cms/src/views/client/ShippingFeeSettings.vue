<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
      <a href="/dashboard/settings" slot="content">Cài đặt</a>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Thiết lập phí vận chuyển trên website</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline sm:mr-0 sm:mb-3">
            <Button @click="openModal" link="#" button-class="cms-button cms-button-blue">
              <template slot="name">
                Thêm khu vực vận chuyển
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
        <ShippingFeeSettings />
        <ShippingFeePartner />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import Button from '@/components/client/Button.vue';
import ShippingFeeSettings from '@/components/client/ShippingFeeSettings.vue';
import ShippingFeePartner from '@/components/client/ShippingFeePartner.vue';

import ModalAddShippingArea from '@/components/client/ModalAddShippingArea.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    Button,
    ShippingFeeSettings,
    ShippingFeePartner,
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 500, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalAddShippingArea, options, style, events);
    },
  },
};
</script>
