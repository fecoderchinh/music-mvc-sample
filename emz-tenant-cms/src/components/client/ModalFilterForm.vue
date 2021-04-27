<template>
  <!-- eslint-disable max-len -->
  <Modal @close="$emit('close')">

    <div class="flex items-center" slot="header">
      <h3 class="text-18px cms-typo text-labelAndTitle">
        Lọc đơn hàng
      </h3>
    </div>

    <div class="w-full" slot="body">

      <div class="grid grid-cols-6 gap-x-5 gap-y-10px">

        <div class="col-span-6 group" v-for="(data, index) in dataFilter" :key="index">
          <div class="grid grid-cols-6 gap-x-5 gap-y-10px">

            <div class="col-span-5 sm:col-span-6" v-if="!data.form">
              <div class="grid grid-cols-6 gap-x-5 gap-y-10px">
                <div class="col-span-2 sm:col-span-6">
                  <InputType
                    input-type="text"
                    :id="data.inputID"
                    :name="data.inputID"
                    :placeholder="data.inputLabel"
                    input-class="cms-input__default">
                  </InputType>
                </div>
                <div class="col-span-2 sm:col-span-6">
                  <SelectOption :option-data="data.optionDataSelect"/>
                </div>
                <div class="col-span-2 sm:col-span-6" v-if="data.optionDataTags">
                  <InlineTags :option-data="data.optionDataTags" class="no-pt" subClass="inline-flex mr-2 mt-2"/>
                </div>
              </div>
            </div>

            <div class="col-span-5 sm:col-span-6" v-else>
              <div class="grid grid-cols-6 gap-x-5 gap-y-10px">
                <div class="col-span-2 sm:col-span-6">
                  <InputType
                    input-type="text"
                    :id="data.inputID"
                    :name="data.inputID"
                    :placeholder="data.inputLabel"
                    input-class="cms-input__default">
                  </InputType>
                </div>
                <div class="col-span-4 sm:col-span-6">
                  <div class="grid grid-cols-2 gap-x-5 gap-y-10px">
                    <div class="col-span-1 sm:col-span-2" v-for="(dataF, indexF) in data.form" :key="indexF">
                      <InputType
                        input-type="text"
                        :id="dataF.formID"
                        :name="dataF.forFmID"
                        :placeholder="dataF.formName"
                        :input-class="dataF.formDate ? 'cms-input__with-icon reverse' : 'cms-input__default'"
                        :button-class="dataF.formDate ? 'absolute left-0 top-50 transform -translate-y-1/2 ml-4 focus:outline-none' : null">
                        <template slot="button-text" v-if="dataF.formDate"><CalendarSVG class="h-4 w-4 fill-menuIcon" /></template>
                      </InputType>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 hidden sm:hidden group-hover:flex items-center justify-center">
              <CloseSVG class="w-14px fill-placeholderStyle"/>
            </div>

          </div>
        </div>

      </div>

    </div>

    <ul class="md:text-right list-none flex-1 items-center" slot="footer">
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
            Lọc
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
import InlineTags from '@/components/client/InlineTags.vue';
import Button from '@/components/client/Button.vue';

import {
  CloseSVG,
  CalendarSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Modal,
    InputType,
    SelectOption,
    InlineTags,
    Button,
    CloseSVG,
    CalendarSVG,
  },
  data() {
    return {
      dataFilter: [
        {
          inputID: 'order-status',
          inputLabel: 'Trạng thái đơn hàng',
          optionDataSelect: [
            { name: 'Chọn điều kiện lọc' },
          ],
          optionDataTags: [
            {
              name: 'Chờ lấy hàng',
              closeTag: true,
            },
          ],
        },
        {
          inputID: 'payment-status',
          inputLabel: 'Trạng thái thanh toán',
          optionDataSelect: [
            { name: 'Chọn điều kiện lọc' },
          ],
          optionDataTags: [
            {
              name: 'Đã thanh toán',
              closeTag: true,
            },
          ],
        },
        {
          inputID: 'payment-method',
          inputLabel: 'Phương thức thanh toán',
          optionDataSelect: [
            { name: 'Chọn điều kiện lọc' },
          ],
        },
        {
          inputID: 'payment-form',
          inputLabel: 'Hình thức thanh toán',
          optionDataSelect: [
            { name: 'Chọn điều kiện lọc' },
          ],
        },
        {
          inputID: 'shipping-method',
          inputLabel: 'Phương thức vận chuyển',
          optionDataSelect: [
            { name: 'Chọn phương thức' },
          ],
        },
        {
          inputID: 'shipping-suplier',
          inputLabel: 'Đơn vị vận chuyển',
          optionDataSelect: [
            { name: 'Chọn trạng thái' },
          ],
        },
        {
          inputID: 'delivery-status',
          inputLabel: 'Trạng thái giao hàng',
          optionDataSelect: [
            { name: 'Chọn trạng thái' },
          ],
        },
        {
          inputID: 'order-from',
          inputLabel: 'Nguồn đơn hàng',
          optionDataSelect: [
            { name: 'Chọn điều kiện lọc' },
          ],
        },
        {
          inputID: 'tag-filter',
          inputLabel: 'Lọc theo tag',
          form: [
            {
              formID: 'form-tag',
              formName: 'Gõ tag cần tìm',
            },
          ],
        },
        {
          inputID: 'why-cancel',
          inputLabel: 'Lý do hủy đơn',
          optionDataSelect: [
            { name: 'Chọn điều kiện lọc' },
          ],
        },
        {
          inputID: 'why-return',
          inputLabel: 'Lý do hoàn đơn',
          optionDataSelect: [
            { name: 'Chọn điều kiện lọc' },
          ],
        },
        {
          inputID: 'form-date',
          inputLabel: 'Ngày đặt hàng',
          form: [
            {
              formID: 'form-from',
              formName: 'Từ ngày',
              formDate: true,
            },
            {
              formID: 'form-to',
              formName: 'Đến ngày',
              formDate: true,
            },
          ],
        },
        {
          inputID: 'customer',
          inputLabel: 'Khách hàng',
          optionDataSelect: [
            { name: 'Chọn khách hàng' },
          ],
        },
        {
          inputID: 'product',
          inputLabel: 'Sản phẩm',
          optionDataSelect: [
            { name: 'Chọn sản phẩm' },
          ],
        },
        {
          inputID: 'address',
          inputLabel: 'Địa chỉ giao hàng',
          optionDataSelect: [
            { name: 'Chọn tỉnh thành' },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
