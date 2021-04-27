<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 fill-labelAndTitle mr-3 inline"/>
            Cập nhật giá
          </template>
        </Button>

      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <p class="cms-typo text-15px text-menuItem">Giá mới của 6 sản phẩm đãn chọn</p>
        </div>

        <div class="col-span-6">
          <div class="w-full">
            <InputType
              id="update-multi-price"
              name="update-multi-price"
              input-class="cms-input__with-letter cms-input__text-13px"
              button-class="absolute right-0 top-0 pt-1 mt-px mr-3 focus:outline-none no-effect">
              <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
            </InputType>
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
            Cập nhật
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

import {
  LongArrowSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    Button,
    InputType,
    LongArrowSVG,
  },
};
</script>

<style lang="scss"></style>
