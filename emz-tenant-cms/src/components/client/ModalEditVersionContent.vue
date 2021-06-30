<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 fill-labelAndTitle mr-3 inline transform rotate-180"/>
            Sửa thuộc tính
          </template>
        </Button>

      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-2 sm:col-span-6">
          <InputType
            id="product-color"
            name="product-color"
            placeholder="Màu sắc"
            button="reset"
            input-class="cms-input__default">
          </InputType>
        </div>
        <div class="col-span-4 sm:col-span-6">
          <div class="w-full">
            <InlineTags :option-data="this.optionDataTags1" mainClass="w-full" subClass="inline-block md:mt-2 sm:mb-2 mr-3" tagClass="inline-tag__button-red"/>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-6">
          <InputType
            id="product-size"
            name="product-size"
            placeholder="Kích thước"
            button="reset"
            input-class="cms-input__default">
          </InputType>
        </div>
        <div class="col-span-4 sm:col-span-6">
          <div class="w-full">
            <InlineTags :option-data="this.optionDataTags2" mainClass="w-full" subClass="inline-block md:mt-2 sm:mb-2 mr-3" tagClass="inline-tag__button-green"/>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <InputType
            id="product-material"
            name="product-material"
            placeholder="Chất liệu"
            button="reset"
            input-class="cms-input__default">
          </InputType>
        </div>
        <div class="col-span-4 sm:col-span-6 flex items-start">
          <div class="w-full">
            <InlineTags :option-data="this.optionDataTags3" mainClass="w-full" subClass="inline-block md:mt-2 sm:mb-2 mr-3" tagClass="inline-tag__button-orange"/>
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
import InputType from '@/components/client/InputType.vue';
import InlineTags from '@/components/client/InlineTags.vue';

import {
  LongArrowSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    Button,
    InputType,
    LongArrowSVG,
    InlineTags,
  },
  data() {
    return {
      optionDataTags1: [
        {
          name: 'Xanh',
          closeTag: true,
        },
        {
          name: 'Đỏ',
          closeTag: true,
        },
        {
          name: 'Tím',
          closeTag: true,
        },
        {
          name: 'Vàng',
          closeTag: true,
        },
      ],
      optionDataTags2: [
        {
          name: 'Xanh',
          closeTag: true,
        },
        {
          name: 'Đỏ',
          closeTag: true,
        },
        {
          name: 'Tím',
          closeTag: true,
        },
        {
          name: 'Vàng',
          closeTag: true,
        },
        {
          name: 'Trắng',
          closeTag: true,
        },
      ],
      optionDataTags3: [
        {
          name: 'Xanh',
          closeTag: true,
        },
        {
          name: 'Đỏ',
          closeTag: true,
        },
        {
          name: 'Tím',
          closeTag: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
