<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">
    <div class="cms-label text-14px mb-4">
      <label class="cursor-pointer text-14px text-labelAndTitle">
        Khuyến mãi tự động
      </label>
    </div>
    <div class="w-full flashsale" v-for="(data, index) in optionData" :key="index">
      <CheckType
        main-class="ml-0 no-mr inline-flex items-center"
        :id="'flashsaleauto-'+index"
        :checked="index===0"
        labelClass="flashsale__check">

        <template slot="text">
          <h3 class="ml-2 md:mr-10 text-labelAndTitle">
            {{ data.name }}
            <InformationSVG class="-mt-px ml-1 inline w-3 fill-buttonAndURL"/>
          </h3>
        </template>

      </CheckType>
      <ul class="list-none flashsale__list cms-typo text-14px text-menuItem items-center">
        <li class="inline-flex items-center mr-5" v-for="(val, indexV) in data.val" :key="indexV">
          <EllipseSVG :class="[ 'w-1 h-1 mr-5 fill-menuItem inline', indexV === 0 ? 'md:hidden' : null ]"/>
          <span>{{ val }}</span>
        </li>
        <li class="inline-flex items-center mr-5 text-buttonAndURL">
          <a href="#" @click.self.prevent="openModal(data.modalComponent, data.modalWidth)">Chỉnh sửa</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CheckType from '@/components/client/CheckType.vue';

import ModalFlashsaleAuto from '@/components/client/ModalFlashsaleAuto.vue';
import ModalFlashsaleRefund from '@/components/client/ModalFlashsaleRefund.vue';

import {
  InformationSVG,
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    CheckType,
    InformationSVG,
    EllipseSVG,
  },
  data() {
    return {
      optionData: [
        {
          name: 'Flash Sale tự động',
          val: [
            'Giảm giá 10%',
            'Flash sale 2 giờ',
            'Mỗi lần 2 sản phẩm',
            'Sale của 50% sản phẩm ít bán chạy',
          ],
          modalComponent: ModalFlashsaleAuto,
          modalWidth: 500,
        },
        {
          name: 'Hoàn tiền tự động',
          val: [
            'Hoàn tiền 5%',
            'Hoàn sau mỗi đơn',
            'Thanh toán tiền hoàn không quá 50% giá trị đơn',
          ],
          modalComponent: ModalFlashsaleRefund,
          modalWidth: 500,
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

<style lang="scss">
  .flashsale {
    @screen xl {
      @apply flex items-center;
    }
    &:not(:first-child) {
      @apply mt-5;
    }
    &__list {
      @screen md {
        @apply inline-flex;
      }
      @media (max-width: 768px) {
        @apply block;
      }
    }
  }
</style>
