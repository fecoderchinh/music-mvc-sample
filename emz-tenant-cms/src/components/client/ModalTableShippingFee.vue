<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        <Button button-class="inline hover:shadow-none focus:outline-none no-effect" @click="$emit('close')">
          <template slot="name">
            <LongArrowSVG class="w-4 fill-labelAndTitle mr-3 inline"/>
            Phí vận chuyển HÀ NỘI
          </template>
        </Button>

      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Tên phương thức vận chuyển</label>
          </div>
          <div class="w-full select-none">
            <InputType
              input-type="text"
              id="modal-area1"
              name="modal-area1"
              value="Giao hàng tận nơi"
              input-class="cms-input__default"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-menuItem">
            <label class="select-none cursor-pointer">Loại điều chỉnh</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="grid grid-cols-6 gap-5">
            <div class="col-span-3">
              <div class="cms-label text-14px mb-3 text-menuItem">
                <label class="select-none cursor-pointer">Từ</label>
              </div>
              <div class="w-full select-none">
                <InputType
                  input-type="text"
                  id="modal-area1"
                  name="modal-area1"
                  value="0"
                  input-class="cms-input__with-icon"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none cms-typo text-14px text-placeholderStyle">
                  <template slot="button-text">đ</template>
                </InputType>
              </div>
            </div>

            <div class="col-span-3">
              <div class="cms-label text-14px mb-3 text-menuItem">
                <label class="select-none cursor-pointer">Đến</label>
              </div>
              <div class="w-full select-none">
                <InputType
                  input-type="text"
                  id="modal-area1"
                  name="modal-area1"
                  value="0"
                  input-class="cms-input__with-icon"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none cms-typo text-14px text-placeholderStyle">
                  <template slot="button-text">đ</template>
                </InputType>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Phí vận chuyển</label>
          </div>
          <div class="w-full select-none">
            <InputType
              input-type="text"
              id="modal-area1"
              name="modal-area1"
              value="40,000"
              input-class="cms-input__with-icon"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none cms-typo text-14px text-placeholderStyle">
              <template slot="button-text">đ</template>
            </InputType>
          </div>
        </div>

        <div class="col-span-6">
          <CheckType
            main-class="ml-0 no-mr"
            id="check-stock" checked>
            <template slot="text"><h3 class="ml-2">Áp dụng gồm các quận huyện</h3></template>
          </CheckType>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </div>
        <div class="col-span-3 sm:col-span-6 md:flex items-center">
          <h3 class="cms-typo text-14px text-placeholderStyle">2/23 Quận Huyện</h3>
        </div>
        <div class="col-span-6">
          <InlineTags :option-data="this.optionDataTags" mainClass=""/>
        </div>

      </div>

    </div>

    <template slot="footer">

      <div class="md:flex">
        <div class="p-0 flex-1 md:flex items-center">
          <a href="#" class="cms-typo text-14px text-cmsOrange"><DeleteSVG class="w-3 fill-menuIcon inline -mt-1 mr-2"/> Xóa khu vực</a>
        </div>

        <ul class="md:text-right sm:mt-5 list-none flex-1 items-center">
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
      </div>

    </template>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import InputType from '@/components/client/InputType.vue';
import CheckType from '@/components/client/CheckType.vue';
import Button from '@/components/client/Button.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import InlineTags from '@/components/client/InlineTags.vue';

import {
  LongArrowSVG,
  DeleteSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    InputType,
    CheckType,
    Button,
    LongArrowSVG,
    SelectOption,
    InlineTags,
    DeleteSVG,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Không có điều kiện' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
      optionDataSelect2: [
        { name: 'Tìm kiếm quận, huyện' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
      optionDataTags: [
        {
          name: 'Quận Thanh Xuân',
          closeTag: true,
        },
        {
          name: 'Quận Đống Đa',
          closeTag: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
