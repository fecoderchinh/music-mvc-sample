<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label for="check-stock" class="cursor-pointer text-14px text-labelAndTitle">
          Quản lý kho
        </label>
        <CheckType
          main-class="absolute top-0 right-0 sm:ml-0 rounded-checkbox no-mr"
          id="check-stock"
          checked>
          <template slot="text"><h3 class="ml-2">Quản lý kho hàng</h3></template>
        </CheckType>
      </div>

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label for="msp-sku" class="inline-flex items-center cursor-pointer text-menuItem">
              Mã sản phẩm - SKU
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="msp-sku"
              name="msp-sku"
              placeholder="SKU0001"
              button="reset"
              input-class="cms-input__default"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label for="mavach" class="inline-flex items-center cursor-pointer text-menuItem">
              Mã vạch, QR Code ...
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
            </label>
          </div>

          <div class="w-full">
            <InputType
              id="mavach"
              name="mavach"
              placeholder="0000000000"
              button="reset"
              input-class="cms-input__with-icon"
              button-class="absolute px-5 no-mr h-10 bg-gray-200 border right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none">
              <template slot="button-text">
                <SquareSVG class="w-4 fill-buttonAndURL mr-2 inline"/>
                <span class="cms-typo text-14px text-buttonAndURL">Quét mã</span>
              </template>
            </InputType>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label for="slsp" class="inline-flex items-center cursor-pointer text-menuItem">
              Tổng số lượng sản phẩm
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
            </label>
          </div>

          <div class="w-full">
            <InputType
              inputType="number"
              id="slsp"
              name="slsp"
              placeholder="0"
              button="reset"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label for="khoiluong" class="inline-flex items-center cursor-pointer text-menuItem">
              Khối lượng sau khi đóng gói (g) <span class="text-cmsRed">*</span>
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
            </label>
          </div>

          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="khoiluong"
              name="khoiluong"
              placeholder="0"
              input-class="cms-input__with-icon"
              button-class="absolute no-mr w-16 h-10 right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none"
              button="button">
              <template slot="button-text">
                <SelectOption :option-data="this.optionDataSelect" selectClass="bg-white pl-2 pr-6 rounded h-10 no-rounded-l"/>
              </template>
            </InputType>
          </div>
        </div>

        <div class="col-span-2 sm:col-span-6">
          <div class="cms-label text-14px mb-4">
            <label for="khoiluong" class="inline-flex items-center cursor-pointer text-menuItem">
              Kích thước sau khi đóng gói (cm) <span class="text-cmsRed">*</span>
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
            </label>
          </div>

          <div class="w-full">
            <InputGroup>
              <div class="cms-input" slot="group">
                <InputType
                  main-class="search-bar"
                  id="khoiluong"
                  name="khoiluong"
                  placeholder="Dài (cm)"
                  input-class="cms-input__default"/>
                <InputType
                  main-class="search-bar"
                  id="khoiluong"
                  name="khoiluong"
                  placeholder="Rộng (cm)"
                  input-class="cms-input__default"/>
                <InputType
                  main-class="search-bar"
                  id="khoiluong"
                  name="khoiluong"
                  placeholder="Cao (cm)"
                  input-class="cms-input__default"/>
              </div>
            </InputGroup>
          </div>
        </div>

        <div class="col-span-4">
          <ul class="list-none">
            <li class="inline-flex mr-5">
              <CheckType
                main-class="ml-0 no-mr"
                id="check-stock1"
                checked>
                <template slot="text"><h3 class="ml-2">Cho phép tiếp tục đặt hàng khi hết hàng</h3></template>
              </CheckType>
            </li>
            <li class="inline-flex">
              <CheckType
                main-class="ml-0 no-mr"
                id="check-stock2"
                checked>
                <template slot="text"><h3 class="ml-2">Sản phẩm yêu cầu vận chuyển</h3></template>
              </CheckType>
            </li>
          </ul>
        </div>

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import CheckType from '@/components/client/CheckType.vue';
import InputType from '@/components/client/InputType.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import InputGroup from '@/components/client/InputGroup.vue';

import {
  InformationSVG,
  SquareSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Box,
    CheckType,
    InputType,
    InformationSVG,
    SelectOption,
    SquareSVG,
    InputGroup,
  },
  data() {
    return {
      optionDataSelect: [
        { name: 'g' },
        { name: 'oz' },
        { name: 'lb' },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
