<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">
    <template slot="header">
      <div class="flex items-center">
        <h3 class="text-18px cms-typo text-labelAndTitle">
          Thêm khuyến mại
        </h3>
      </div>
    </template>

    <div class="grid grid-cols-6 gap-5" slot="body">
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">Nhập giá trị giảm giá cho đơn hàng</label>
        </div>
        <div class="w-full">
          <InputGroup class="switcher">
            <div class="cms-input" slot="group">
              <InputType
                main-class="search-bar"
                id="khoiluong"
                name="khoiluong"
                placeholder="Nhập số tiền giảm giá"
                input-class="cms-input__default"/>
              <Radio id="radioPriceSwitcher1" name="radioPriceSwitcher" label-class="cms-typo text-menuItem text-14px" checked>
                <template slot="radio-text">đ</template>
              </Radio>
              <Radio id="radioPriceSwitcher2" name="radioPriceSwitcher" label-class="cms-typo text-menuItem text-14px">
                <template slot="radio-text">%</template>
              </Radio>
            </div>
          </InputGroup>
        </div>
      </div>
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">Lý do giảm</label>
        </div>
        <div class="w-full">
          <InputType
            main-class="search-bar"
            id="khoiluong"
            name="khoiluong"
            placeholder="Nhập lý do giảm giá"
            input-class="cms-input__default"/>
        </div>
      </div>
      <div class="col-span-6">
        <div class="cms-label text-14px mb-3 text-labelAndTitle">
          <label class="select-none cursor-pointer">Sử dụng mã khuyến mại</label>
        </div>
        <div class="w-full">
          <InputType
            main-class="search-bar"
            id="khoiluong"
            name="khoiluong"
            placeholder="Nhập mã khuyến mại"
            input-class="cms-input__default"/>
        </div>
      </div>
    </div>

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
import Radio from '@/components/client/Radio.vue';
import Button from '@/components/client/Button.vue';
import InputGroup from '@/components/client/InputGroup.vue';

export default {
  components: {
    Modal,
    InputType,
    Radio,
    Button,
    InputGroup,
  },
};
</script>

<style lang="scss"></style>
