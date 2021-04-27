<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')" >
    <template slot="header">
      <div class="flex items-center">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Sửa địa chỉ giao hàng
        </h3>
      </div>
    </template>

    <template slot="body">

      <div class="grid grid-cols-6" v-for="(data, index) in addressList" :key="index" :class="index > 0 ? 'mt-4' : ''">
        <div class="col-span-1 sm:col-span-6 sm:hidden md:order-last">
          <span class="cms-typo text-14px">
            <CheckboxCircleSVG class="w-4 fill-buttonAndURL inline -mt-px mr-10px" v-if="data.id === defaultAddressID"/>
            <EllipseSVG class="w-4 fill-white inline -mt-px mr-10px" v-else/>
            <span :class="data.id === defaultAddressID ? 'text-menuItem' : 'text-placeholderStyle'">Mặc định</span>
          </span>
        </div>
        <div class="col-span-5 sm:col-span-6 md:order-first">
          <Radio :id="data.id" name="radio" label-class="text-menuItem text-14px" @change="defaultAddress(data.id)" :checked="data.id === defaultAddressID ? true : false">
            <template slot="radio-text">{{ data.address }}</template>
          </Radio>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-5 mt-5">

        <div class="col-span-1 sm:col-span-2">
          <div class="col-span-1 sm:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modal-nhaptennhanhang" class="select-none cursor-pointer">Tên người nhận hàng</label>
            </div>
            <div class="w-full">
              <InputType
                input-type="text"
                id="modal-nhaptennhanhang"
                name="modal-nhaptennhanhang"
                placeholder="Nhập tên người nhận hàng"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="col-span-1 sm:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modal-nhapsdt2" class="select-none cursor-pointer">Số điện thoại người nhận</label>
            </div>
            <div class="w-full">
              <InputType
                input-type="text"
                id="modal-nhapsdt2"
                name="modal-nhapsdt2"
                placeholder="Nhập số điện thoại"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

        <div class="col-span-2">
          <div class="col-span-1 sm:col-span-2">
            <div class="cms-label text-14px mb-3 text-labelAndTitle">
              <label for="modal-nhapdiachi" class="select-none cursor-pointer">Địa chỉ</label>
            </div>
            <div class="w-full">
              <InputType
                input-type="text"
                id="modal-nhapdiachi"
                name="modal-nhapdiachi"
                placeholder="Nhập địa chỉ khách hàng"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              </InputType>
            </div>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quốc gia</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Tỉnh / Thành phố</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Quận huyện</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect3"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="modal-nhapcongty" class="select-none cursor-pointer">Phường Xã</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect4"/>
          </div>
        </div>

      </div>

    </template>

    <template slot="footer">

      <div class="md:flex">
        <div class="p-0 flex-1 md:flex items-center">
          <a href="#" class="cms-typo text-14px text-buttonAndURL">Thêm địa chỉ nhận hàng khác</a>
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
import Radio from '@/components/client/Radio.vue';
import InputType from '@/components/client/InputType.vue';
import SelectOption from '@/components/client/SelectOption.vue';

import {
  CheckboxCircleSVG,
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    Radio,
    InputType,
    SelectOption,
    CheckboxCircleSVG,
    EllipseSVG,
  },
  data() {
    return {
      defaultAddressID: '1',
      addressList: [
        {
          id: '1',
          address: 'Nguyễn Hùng, 36 Định Công Hạ, Phường Định Công, Hoàng Mai, Hà Nội',
        },
        {
          id: '2',
          address: 'Nguyễn Tuấn,  99 Láng Hạ, Đống Đa, Hà Nội',
        },
      ],
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
    defaultAddress(num) {
      this.defaultAddressID = num;
    },
  },
};
</script>

<style lang="scss"></style>
