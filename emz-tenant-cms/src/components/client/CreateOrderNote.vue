<template>
  <!-- eslint-disable max-len -->
  <div class="w-full">

    <!-- box content -->
    <div class="grid-box no-pb">

      <TableShipped class="mb-5"/>

      <div class="grid grid-cols-2 gap-5">

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label class="select-none cursor-pointer">Địa chỉ lấy hàng - Kho hàng</label>
          </div>
          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="input-order-nw" class="select-none cursor-pointer">Khối lượng gói hàng</label>
          </div>
          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="input-order-nw"
              name="input-order-nw"
              placeholder="Nhập khối lượng đơn hàng..."
              input-class="cms-input__with-icon"
              button="button"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><span class="text-standardCMS">g</span></template>
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <ul class="list-none mb-3 -mt-px sm:grid sm:gap-2">
            <li class="inline-flex sm:flex">
              <Radio id="radio1" name="radio" label-class="text-14px text-labelAndTitle">
                <template slot="radio-text"><span class="ml-2">Thu hộ COD</span></template>
              </Radio>
            </li>
            <li class="inline-flex sm:flex">
              <Radio id="radio2" name="radio" label-class="md:ml-10 text-14px text-labelAndTitle" checked>
                <template slot="radio-text"><span class="ml-2">Đã thu tiền</span></template>
              </Radio>
            </li>
          </ul>
          <div class="w-full -mt-px">
            <InputType
              main-class="search-bar"
              id="input-order-cost"
              name="input-order-cost"
              placeholder="239,000"
              input-class="cms-input__with-icon -mt-px"
              button="button"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><span class="text-standardCMS">đ</span></template>
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="input-order-note" class="select-none cursor-pointer">Ghi chú</label>
          </div>
          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="input-order-note"
              name="input-order-note"
              placeholder="Nhập ghi chú cho bên giao hàng"
              input-class="cms-input__default">
            </InputType>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 mt-8">

        <Tabs :tabs="tabs" :initialTab="initialTab" main-class="tab-header-no-spacing-left">

          <ShippingPartnerTable slot="tab-panel-partner"/>

          <p class="text-14px text-menuItem" slot="tab-panel-other">on update</p>

          <CheckType
            main-class="ml-0 no-mr md:absolute md:top-50 transform md:-translate-y-1/2 md:right-0 flex items-center pb-3"
            id="checktab"
            checked
            slot="tab-right">
            <template slot="text"><h3 class="ml-2">
              Shop trả phí vận chuyển
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
            </h3></template>
          </CheckType>

        </Tabs>

      </div>

      <div class="grid-cols text-left md:text-right py-2 border-t">
        <div class="w-full no-mb">
          <ul class="list-none">
            <li class="inline sm:block mr-8 sm:mr-0 sm:mb-3">
              <Button button-class="cms-button cms-button-white">
                <template slot="name">
                  Hủy
                </template>
              </Button>
            </li>
            <li class="inline sm:block">
              <Button link="/dashboard/order-shipped" button-class="cms-button cms-button-blue">
                <template slot="name">
                  Giao hàng
                </template>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end box content -->
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import SelectOption from './SelectOption.vue';
import Tabs from './Tabs.vue';
import CheckType from './CheckType.vue';
import ShippingPartnerTable from './ShippingPartnerTable.vue';
import Radio from './Radio.vue';
import InputType from './InputType.vue';
import TableShipped from './TableShipped.vue';
import Button from './Button.vue';

import {
  InformationSVG,
} from '../SVGs.vue';

export default {
  components: {
    Footer,
    SelectOption,
    Tabs,
    CheckType,
    InformationSVG,
    ShippingPartnerTable,
    Radio,
    InputType,
    TableShipped,
    Button,
  },
  data() {
    return {
      initialTab: 'partner',
      tabs: [
        {
          tabId: 'partner',
          tabName: 'Đối tác vận chuyển',
        },
        {
          tabId: 'other',
          tabName: 'Vận chuyển khác',
        },
      ],
      optionDataSelect: [
        { name: 'Cửa hàng chính' },
        { name: 'Cửa hàng phụ' },
        { name: 'Cửa hàng phụ phụ' },
      ],
    };
  },
};
</script>
<style lang="scss">
  .tab-header-no-spacing-left {
    .cms-tabs-header-list-item {
      @apply pr-6 mr-3;
    }
  }
</style>
