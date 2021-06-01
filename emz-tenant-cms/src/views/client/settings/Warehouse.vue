<template>
  <!-- eslint-disable max-len -->
  <div class="relative">

    <Breadcrumb>
    <router-link to="/dashboard/settings"></router-link>
    </Breadcrumb>

    <!-- box title -->
    <Header :wideHeader="true">
      <h1 slot="title">Chi nhánh & Kho hàng</h1>
      <template slot="right">
        <ul class="list-none md:ml-auto">
          <li class="inline sm:mr-0 sm:mb-3">
            <Button @click="openModal" button-class="cms-button cms-button-blue">
              <template slot="name">
                Thêm chi nhánh
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
        <Warehouse />
      </div>
      <!-- end column -->

    </div>

  </div>
</template>

<script>
import Breadcrumb from '@/components/client/Breadcrumb.vue';
import Header from '@/components/client/Header.vue';
import Button from '@/components/client/Button.vue';
import Warehouse from '@/components/client/settings/stores/Warehouse.vue';

import ModalAddShippingAddress from '@/components/client/settings/stores/ModalAddShippingAddress.vue';

export default {
  components: {
    Breadcrumb,
    Header,
    Button,
    Warehouse,
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalAddShippingAddress, options, style, events);
    },
  },
};
</script>
