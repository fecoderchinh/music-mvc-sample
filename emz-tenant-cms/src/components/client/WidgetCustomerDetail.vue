<template>
  <!-- eslint-disable max-len -->
  <Widget>

    <template slot="title">
      <label class="cursor-pointer text-lg text-labelAndTitle">Khách hàng</label>
      <a href="#" @click.self.prevent="openModalEditCustomerDetail" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>
    </template>

    <template slot="content">
      <div class="flex content-start flex-wrap mb-5">
        <div class="w-1/5">
          <AvatarSVG class="w-12 fill-buttonAndURL"/>
        </div>
        <div class="w-4/5 sm:pl-3">
          <h3 class="cms-typo text-menuItem text-14px">Nguyễn Ngọc Duy Anh</h3>
          <h3 class="cms-typo text-buttonAndURL text-14px mt-2">0969 786 519</h3>
          <h3 class="cms-typo text-buttonAndURL text-14px mt-2">longvoanh@gmail.com</h3>
        </div>
      </div>

      <div class="grid-cols border-b my-5"></div>

      <div class="mb-4">
        <div class="cms-label text-14px mb-4">
          <label class="cursor-pointer text-14px text-labelAndTitle">Địa chỉ giao hàng</label>
          <a href="#" @click.self.prevent="openModalEditCustomerAddress" class="text-standardCMS absolute top-0 right-0 text-buttonAndURL">Sửa</a>
        </div>
      </div>

      <div class="mb-5 space-y-1">
        <h3 class="cms-typo text-menuItem text-13px">Nguyễn Ngọc Duy Anh</h3>
        <h3 class="cms-typo text-menuItem text-13px">0969 786 519</h3>
        <p class="cms-typo text-menuItem text-13px">122 Thuong Dinh, Thanh Xuan, Ha Noi</p>
        <p class="cms-typo text-menuItem text-13px">Phường Nguyễn Du - Quận Thanh Xuân - Hà Nội</p>
      </div>

      <div class="grid-cols border-b my-5"></div>

      <div class="mb-3">
        <div class="cms-label text-14px">
          <label class="cursor-pointer text-14px text-labelAndTitle">Lịch sử mua hàng</label>
        </div>
      </div>

      <ul class="list-disc list-inside space-y-1">
        <li class="text-menuItem text-13px relative font-medium">
          Đơn đã mua
          <div class="flex ml-auto absolute top-0 right-0">7 đơn mua</div>
        </li>
        <li class="text-menuItem text-13px relative font-medium">
          Mua gần nhất
          <div class="flex ml-auto absolute top-0 right-0">30/09/2019</div>
        </li>
        <li class="text-menuItem text-13px relative font-medium">
          Tổng đã mua
          <div class="flex ml-auto absolute top-0 right-0">32,960,000đ</div>
        </li>
      </ul>

    </template>

  </Widget>
</template>

<script>
import Widget from '@/components/client/Widget.vue';
import ModalEditCustomerDetail from '@/components/client/ModalEditCustomerDetail.vue';
import ModalEditCustomerAddress from '@/components/client/ModalEditCustomerAddress.vue';

import {
  AvatarSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Widget,
    AvatarSVG,
  },
  methods: {
    openModalEditCustomerDetail() {
      const options = {
        class: 'cms-modal modal-md',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalEditCustomerDetail, options, style, events);
    },
    openModalEditCustomerAddress() {
      const options = {
        class: 'cms-modal modal-md',
      };
      const style = {
        width: 720, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalEditCustomerAddress, options, style, events);
    },
  },
};
</script>

<style lang="scss"></style>
