<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Hoàn tiền tự động
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Loại hoàn tiền
            </label>
          </div>

          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Giá trị giảm giá
            </label>
          </div>

          <div class="w-full">
            <InputType
              main-class="search-bar"
              input-class="cms-input__with-icon"
              button="button"
              placeholder="5"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">%</span></template>
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Cách thức hoàn tiền
            </label>
          </div>

          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Tối đa tiền hoàn không quá
            </label>
          </div>

          <div class="w-full">
            <InputType
              main-class="search-bar"
              input-class="cms-input__default pr-8rem"
              button="button"
              placeholder="50"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none no-effect">
              <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">% giá trị đơn hàng</span></template>
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
            Lưu
          </template>
        </Button>
      </li>
    </ul>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';
import Button from '@/components/client/Button.vue';

export default {
  components: {
    Modal,
    SelectOption,
    InputType,
    Button,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Theo % giá trị đơn hàng' },
        { name: 'Lơn nguồn đọc' },
        { name: 'Lọc ngơn đuồn' },
      ],
      optionDataSelect2: [
        { name: 'Sau mỗi đơn thành công' },
        { name: 'Lơn nguồn đọc' },
        { name: 'Lọc ngơn đuồn' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
