<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Thiết lập phí vận chuyển với Giao Hàng Nhanh EMZ
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Tên hiển thị phương thức vận chuyển trên website</label>
          </div>
          <div class="w-full select-none">
            <InputType
              input-type="text"
              id="modal-area1"
              name="modal-area1"
              value="Giao hàng nhanh EMZ"
              input-class="cms-input__default"/>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mt-5 mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Điều chỉnh phí vận chuyển</label>
          </div>
          <p class="cms-typo text-14px mb-15px text-menuItem">
            Tăng giảm phí vận chuyển theo % hoặc theo giá trị từ phí vận chuyển của đối tác cung cấp. Giá trị sau khi điều chỉnh sẽ được hiển thị trên website.
          </p>
        </div>

      </div>

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-menuItem">
            <label class="select-none cursor-pointer">Loại điều chỉnh</label>
          </div>
          <div class="w-full select-none">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-3 text-menuItem">
            <label class="select-none cursor-pointer">Giá trị điều chỉnh</label>
          </div>
          <div class="w-full select-none">
            <InputType
              input-type="text"
              id="modal-area1"
              name="modal-area1"
              value="0"
              input-class="cms-input__with-icon"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none cms-typo text-14px text-placeholderStyle">
              <template slot="button-text">%</template>
            </InputType>
          </div>
        </div>

        <div class="col-span-6">
          <div class="cms-label text-14px mt-5 mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Địa chỉ lấy hàng</label>
          </div>
          <p class="cms-typo text-14px mb-15px text-menuItem">
            Hệ thống sẽ tính toán phí vận chuyển dựa trên địa chỉ lấy hàng  để chuyển đến các khu vực khách hàng.
          </p>
        </div>

      </div>

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-6">
          <ul class="list-none mb-3 -mt-px sm:grid sm:gap-2 cms-typo">
            <li class="inline-flex sm:flex">
              <Radio id="radio1" name="radio" label-class="text-14px text-menuItem">
                <template slot="radio-text"><span class="ml-2">Cho tất cả các vực</span></template>
              </Radio>
            </li>
            <li class="inline-flex sm:flex">
              <Radio id="radio2" name="radio" label-class="md:ml-10 text-14px text-menuItem" checked>
                <template slot="radio-text"><span class="ml-2">Theo từng khu vực</span></template>
              </Radio>
            </li>
          </ul>
          <div class="w-full select-none">
            <ShippingFeeAdvanceSearch/>
          </div>
        </div>

        <div class="col-span-6">
          <ShippingAreaPicker/>
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
import InputType from '@/components/client/InputType.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import Radio from '@/components/client/Radio.vue';
import Button from '@/components/client/Button.vue';
import ShippingAreaPicker from '@/components/client/ShippingAreaPicker.vue';

import ShippingFeeAdvanceSearch from '@/components/client/ShippingFeeAdvanceSearch.vue';

export default {
  components: {
    Modal,
    InputType,
    SelectOption,
    Radio,
    Button,
    ShippingAreaPicker,
    ShippingFeeAdvanceSearch,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Tăng theo %' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
