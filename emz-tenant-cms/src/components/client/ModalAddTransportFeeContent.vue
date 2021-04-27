<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">
    <template slot="header">
      <div class="flex items-center">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Chọn gói vận chuyển
        </h3>
      </div>
    </template>

    <template slot="body">
      <div class="grid grid-cols-1 gap-5 select-none">
        <div class="col-span-1" v-for="(data, index) in listRadio" :key="index" :class="index + 1 !== listRadio.length ? 'mr-4' : ''">
          <Radio :id="'radio-'+index" name="radio" label-class="cms-typo text-menuItem text-14px" :checked="index==0">
            <template slot="radio-text">{{ data }}</template>
          </Radio>
          <div class="ml-6 mt-5" v-if="index + 1 === listRadio.length">
            <div class="grid grid-cols-3 gap-5">
              <div class="col-span-2 sm:col-span-3">
                <InputType
                  input-type="text"
                  id="modal-nhapphuongthuc"
                  name="modal-nhapphuongthuc"
                  placeholder="Nhập phương thức vận chuyển"
                  input-class="cms-input__default"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
                </InputType>
              </div>
              <div class="col-span-1 sm:col-span-3">
                <InputType
                  input-type="text"
                  id="modal-phivanchuyen"
                  name="modal-phivanchuyen"
                  placeholder="Phí vận chuyển"
                  input-class="cms-input__with-icon"
                  button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none cms-typo text-14px text-placeholderStyle">
                  <template slot="button-text">đ</template>
                </InputType>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full mt-16">
        <h3 class="cms-typo text-15px text-buttonAndURL"><a href="#"><LongArrowSVG class="mr-10px fill-buttonAndURL w-13px inline transform rotate-180"/><span>Xem phí vận chuyển dự kiến</span></a></h3>
      </div>
      <p class="cms-typo text-placeholderStyle text-14px pl-6 -ml-px mt-2">Phí vận chuyển dự kiến chỉ là phí dự tính dựa trên thông tin hàng hóa đã chọn. Chi phí thực tế thường sẽ được tính khi bạn đóng gói giao hàng cho bên vận chuyển.</p>
    </template>

    <template slot="footer">

      <div class="md:flex">

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
                Áp dụng
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
import Button from '@/components/client/Button.vue';
import Radio from '@/components/client/Radio.vue';

import {
  LongArrowSVG,
} from '../SVGs.vue';

export default {
  components: {
    Modal,
    InputType,
    Button,
    Radio,
    LongArrowSVG,
  },
  data() {
    return {
      listRadio: [
        'Giao hàng toàn quốc - 40,000đ',
        'Nội thành Sài Gòn - 30,000đ',
        'Miễn phí vận chuyển',
        'Vận chuyển khác',
      ],
    };
  },
};
</script>

<style lang="scss"></style>
