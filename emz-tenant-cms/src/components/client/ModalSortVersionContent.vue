<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 fill-labelAndTitle mr-3 inline transform rotate-180"/>
            Sắp xếp thuộc tính
          </template>
        </Button>

      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-1 sm:col-span-6 flex items-center">
          <label class="cursor-pointer text-14px text-cmsRed">
            <SixDotsSVG class="w-2 fill-menuIcon stroke-menuIcon inline mr-2 -mt-px"/>
            Màu sắc
          </label>
        </div>
        <div class="col-span-5 sm:col-span-6">
          <div class="w-full">
            <InlineTags :option-data="this.optionDataTags1" mainClass="w-full" subClass="inline-block pt-1 mb-2 mr-3" tagClass="inline-tag__button-red"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-6 flex items-center">
          <label class="cursor-pointer text-14px text-cmsGreen">
            <SixDotsSVG class="w-2 fill-menuIcon stroke-menuIcon inline mr-2 -mt-px"/>
            Kích thước
          </label>
        </div>
        <div class="col-span-5 sm:col-span-6">
          <div class="w-full">
            <InlineTags :option-data="this.optionDataTags2" mainClass="w-full" subClass="inline-block pt-1 mb-2 mr-3" tagClass="inline-tag__button-green"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-6 flex items-center">
          <label class="cursor-pointer text-14px text-Orange">
            <SixDotsSVG class="w-2 fill-menuIcon stroke-menuIcon inline mr-2 -mt-px"/>
            Chất liệu
          </label>
        </div>
        <div class="col-span-5 sm:col-span-6 flex items-start">
          <div class="w-full">
            <InlineTags :option-data="this.optionDataTags3" mainClass="w-full" subClass="inline-block pt-1 mb-2 mr-3" tagClass="inline-tag__button-orange"/>
          </div>
        </div>

      </div>

    </div>

    <ul class="md:text-right sm:mt-5 list-none flex-1 items-center" slot="footer">
      <li class="inline mr-5">
        <Button button-class="cms-button cms-button-white">
          <template slot="name">
            Hủy
          </template>
        </Button>
      </li>
      <li class="inline">
        <Button button-class="cms-button cms-button-blue">
          <template slot="name">
            Lưu
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import Button from '@/components/client/Button.vue';
import InlineTags from '@/components/client/InlineTags.vue';

import {
  LongArrowSVG,
  SixDotsSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    Button,
    LongArrowSVG,
    InlineTags,
    SixDotsSVG,
  },
  data() {
    return {
      optionDataTags1: [
        {
          name: 'Xanh',
          draggable: true,
        },
        {
          name: 'Đỏ',
          draggable: true,
        },
        {
          name: 'Tím',
          draggable: true,
        },
        {
          name: 'Vàng',
          draggable: true,
        },
      ],
      optionDataTags2: [
        {
          name: 'Xanh',
          draggable: true,
        },
        {
          name: 'Đỏ',
          draggable: true,
        },
        {
          name: 'Tím',
          draggable: true,
        },
        {
          name: 'Vàng',
          draggable: true,
        },
        {
          name: 'Trắng',
          draggable: true,
        },
      ],
      optionDataTags3: [
        {
          name: 'Xanh',
          draggable: true,
        },
        {
          name: 'Đỏ',
          draggable: true,
        },
        {
          name: 'Tím',
          draggable: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
