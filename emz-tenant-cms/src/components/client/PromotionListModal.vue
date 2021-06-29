<template>
  <!-- eslint-disable max-len -->
  <div class="grid grid-cols-6 gap-5">
    <div class="col-span-3 sm:col-span-6" v-for="(data, index) in optionData" :key="index">
      <div class="grid grid-cols-5 gap-5 p-10px group hover:bg-sidebarHover">
        <div class="col-span-1">
          <div class="w-50px h-50px flex items-center bg-gray-400 justify-center text-menuIcon group-hover:text-buttonAndURL" v-if="data.component">
            <component v-bind:is="data.component" class="w-10" />
          </div>
        </div>
        <div class="col-span-4">
          <h3 class="cms-typo text-14px text-buttonAndURL">
            {{ data.title }}
          </h3>
          <p class="cms-typo text-14px text-menuItem my-10px">
            {{ data.content }}
          </p>
          <Button @click="openModal(data.modalComponent, data.modalWidth)" button-class="cms-button cms-button-blue">
            <template slot="name">
              Tạo {{ data.type }}
            </template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/client/Button.vue';

import ModalCreatePromotionContent from '@/components/client/ModalCreatePromotionContent.vue';
import ModalFSCreateContent from '@/components/client/ModalFSCreateContent.vue';
import ModalVoucherCreateContent from '@/components/client/ModalVoucherCreateContent.vue';
import ModalCreateComboProductContent from '@/components/client/ModalCreateComboProductContent.vue';

import {
  TruckSVG,
  TruckFillSVG,
  GlobeWWWSVG,
  LocationSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Button,
    TruckSVG,
    TruckFillSVG,
    GlobeWWWSVG,
    LocationSVG,
  },
  data() {
    return {
      optionData: [
        {
          component: 'TruckFillSVG',
          type: 'Voucher',
          title: 'Mã khuyến mãi - Voucher',
          content: 'Tạo mã khuyến mãi cho một hoặc một số sản phẩm. Dùng bán voucher cho khách hoặc tặng khách hàng.',
          modalComponent: ModalVoucherCreateContent,
          modalWidth: 1200,
        },
        {
          component: 'TruckSVG',
          type: 'Flash sale',
          title: 'Flash Sale - Bán chớp nhoáng',
          content: 'Giảm giá trong vài giờ cho các sản phẩm được chọn. Thường dùng để tạo các khuyễn mãi kích cầu hàng ngày.',
          modalComponent: ModalFSCreateContent,
          modalWidth: 1200,
        },
        {
          component: 'GlobeWWWSVG',
          type: 'CTKM',
          title: 'Chương trình khuyến mại - CTKM',
          content: 'Áp dùng cho toàn bộ các sản phẩm hoặc một số sản phẩm. Thường dùng trong một thời gian để kích cầu hay tri ân.',
          modalComponent: ModalCreatePromotionContent,
          modalWidth: 1200,
        },
        {
          component: 'LocationSVG',
          type: 'Combo',
          title: 'Tạo Combo',
          content: 'Tạo các combo gồm nhiều sản phẩm với nhau. Thường bán giá rẻ hơn so với khi bán lẻ để bán được nhiều hơn.',
          modalComponent: ModalCreateComboProductContent,
          modalWidth: 1200,
        },
      ],
    };
  },
  methods: {
    openModal(tmodal, twidth = 1200) {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: twidth, height: 'auto', shiftX: 0.5, adaptive: true,
      };

      this.$modal.show(tmodal, options, style);
    },
  },
};
</script>

<style lang="scss"></style>
