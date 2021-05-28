<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thêm chi nhánh
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptendd" class="select-none cursor-pointer">Tên địa điểm<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptendd"
              name="modal-nhaptendd"
              placeholder="Nhập tên địa điểm"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptensdt" class="select-none cursor-pointer">Số điện thoại<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptensdt"
              name="modal-nhaptensdt"
              placeholder="Nhập số điện thoại"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptenemail" class="select-none cursor-pointer">Email</label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptenemail"
              name="modal-nhaptenemail"
              placeholder="Nhập email"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhaptendc" class="select-none cursor-pointer">Địa chỉ<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full">
            <InputType
              input-type="text"
              id="modal-nhaptendc"
              name="modal-nhaptendc"
              placeholder="Nhập địa chỉ"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quốc gia</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Tỉnh / Thành phố<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quận huyện<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect3"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Phường Xã<span class="cms-lato text-cmsRed text-14px">*</span></label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect4"/>
          </div>
        </div>

      </div>

    </div>

    <template slot="footer">

      <div class="md:flex">
        <div class="p-0 flex-1 md:flex items-center">
          <CheckType
            main-class="ml-0 no-mr"
            id="check-stock"
            checked>
            <template slot="text"><h3 class="ml-2">Địa chỉ lấy hàng</h3></template>
          </CheckType>
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
            <button @click="saveStore" class="cms-button cms-button-blue">
              Lưu
              
            </button>
          </li>
        </ul>
      </div>

    </template>

  </Modal>
</template>

<script>
import Modal from '@/components/client/Modal.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import InputType from '@/components/client/InputType.vue';
import CheckType from '@/components/client/CheckType.vue';
import Button from '@/components/client/Button.vue';

import { create } from '@/apis/store-address.js';

export default {
  components: {
    Modal,
    SelectOption,
    InputType,
    CheckType,
    Button,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Việt Nam' },
        { name: 'Lào' },
        { name: 'Campuchia' },
      ],
      optionDataSelect2: [
        { name: 'Chọn tỉnh thành' },
      ],
      optionDataSelect3: [
        { name: 'Chọn quận huyện' },
      ],
      optionDataSelect4: [
        { name: 'Chọn phường xã' },
      ],
    };
  },
  methods: {
    saveStore(){
      create().then( res => console.log(res) );
    }
  },
};
</script>

<style lang="scss"></style>
