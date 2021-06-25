<template>
  <!-- eslint-disable max-len -->
  <Box>
    <template slot="content">

      <div class="cms-label text-14px mb-4">
        <label for="manageStock" class="cursor-pointer text-14px text-labelAndTitle">
          Quản lý kho
        </label>
        <ul class="list-none mt-3 mb-3 sm:grid sm:gap-2">
          <li class="inline-flex sm:flex mr-3">
            <Radio id="manageStock-1" name="radio" label-class="text-14px text-labelAndTitle">
              <template slot="radio-text">Không quản lý kho hàng</template>
            </Radio>
          </li>
          <li class="inline-flex sm:flex md:ml-5">
            <Radio id="manageStock-2" name="radio" label-class="text-14px text-labelAndTitle" checked>
              <template slot="radio-text">Quản lý kho hàng</template>
            </Radio>
          </li>
        </ul>
      </div>

      <div class="grid grid-cols-6 gap-5">

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-2">
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
          <div class="cms-label text-14px mb-2">
            <label for="mavach" class="inline-flex items-center cursor-pointer text-menuItem">
              Mã vạch, QR Code ...
              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />
            </label>
          </div>

          <div class="w-full">
<!--            <InputType-->
<!--              id="mavach"-->
<!--              name="mavach"-->
<!--              placeholder="0000000000"-->
<!--              button="reset"-->
<!--              input-class="cms-input__with-icon"-->
<!--              button-class="absolute px-5 no-mr h-10 bg-gray-200 border right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none">-->
<!--              <template slot="button-text">-->
<!--                <SquareSVG class="w-4 fill-buttonAndURL mr-2 inline"/>-->
<!--                <span class="cms-typo text-14px text-buttonAndURL">Quét mã</span>-->
<!--              </template>-->
<!--            </InputType>-->
            <InputType
                id="mavach"
                name="mavach"
                placeholder="1234567890123"
                button="reset"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-2">
            <label for="main-stock" class="inline-flex items-center cursor-pointer text-menuItem">
              Kho hàng chính
            </label>
          </div>

          <div class="w-full">
            <InputType
                id="main-stock"
                name="main-stock"
                placeholder="0"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label text-14px mb-2">
            <label for="stock-address" class="inline-flex items-center cursor-pointer text-menuItem">
              Chi nhánh kho hàng
            </label>
          </div>

          <div class="w-full">
            <InputType
                id="stock-address"
                name="stock-address"
                placeholder="0"
                input-class="cms-input__default"
                button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
            </InputType>
          </div>
        </div>

        <div class="col-span-6">
          <div class="w-full">
            <CheckType
                main-class="ml-0 no-mr"
                id="check-stock1"
                checked>
              <template slot="text"><h3 class="ml-2">Cho phép tiếp tục đặt hàng khi hết hàng</h3></template>
            </CheckType>
          </div>
        </div>

        <div class="col-span-3 sm:col-span-6">
          <div class="cms-label">
            <label class="cursor-pointer text-14px text-labelAndTitle">
              Vận chuyển
            </label>
          </div>
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

<!--        <div class="col-span-2 sm:col-span-6">-->
<!--          <div class="cms-label text-14px mb-4">-->
<!--            <label for="slsp" class="inline-flex items-center cursor-pointer text-menuItem">-->
<!--              Tổng số lượng sản phẩm-->
<!--              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />-->
<!--            </label>-->
<!--          </div>-->

<!--          <div class="w-full">-->
<!--            <InputType-->
<!--              inputType="number"-->
<!--              id="slsp"-->
<!--              name="slsp"-->
<!--              placeholder="0"-->
<!--              button="reset"-->
<!--              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">-->
<!--            </InputType>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-span-2 sm:col-span-6">-->
<!--          <div class="cms-label text-14px mb-4">-->
<!--            <label for="khoiluong" class="inline-flex items-center cursor-pointer text-menuItem">-->
<!--              Khối lượng sau khi đóng gói (g) <span class="text-cmsRed">*</span>-->
<!--              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />-->
<!--            </label>-->
<!--          </div>-->

<!--          <div class="w-full">-->
<!--            <InputType-->
<!--              main-class="search-bar"-->
<!--              id="khoiluong"-->
<!--              name="khoiluong"-->
<!--              placeholder="0"-->
<!--              input-class="cms-input__with-icon"-->
<!--              button-class="absolute no-mr w-16 h-10 right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none"-->
<!--              button="button">-->
<!--              <template slot="button-text">-->
<!--                <SelectOption :option-data="this.optionDataSelect" selectClass="bg-white pl-2 pr-6 rounded h-10 no-rounded-l"/>-->
<!--              </template>-->
<!--            </InputType>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-span-2 sm:col-span-6">-->
<!--          <div class="cms-label text-14px mb-4">-->
<!--            <label for="khoiluong" class="inline-flex items-center cursor-pointer text-menuItem">-->
<!--              Kích thước sau khi đóng gói (cm) <span class="text-cmsRed">*</span>-->
<!--              <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline -mt-px" />-->
<!--            </label>-->
<!--          </div>-->

<!--          <div class="w-full">-->
<!--            <InputGroup>-->
<!--              <div class="cms-input" slot="group">-->
<!--                <InputType-->
<!--                  main-class="search-bar"-->
<!--                  id="khoiluong"-->
<!--                  name="khoiluong"-->
<!--                  placeholder="Dài (cm)"-->
<!--                  input-class="cms-input__default"/>-->
<!--                <InputType-->
<!--                  main-class="search-bar"-->
<!--                  id="khoiluong"-->
<!--                  name="khoiluong"-->
<!--                  placeholder="Rộng (cm)"-->
<!--                  input-class="cms-input__default"/>-->
<!--                <InputType-->
<!--                  main-class="search-bar"-->
<!--                  id="khoiluong"-->
<!--                  name="khoiluong"-->
<!--                  placeholder="Cao (cm)"-->
<!--                  input-class="cms-input__default"/>-->
<!--              </div>-->
<!--            </InputGroup>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-span-4">-->
<!--          <ul class="list-none">-->
<!--            <li class="inline-flex mr-5">-->
<!--              <CheckType-->
<!--                main-class="ml-0 no-mr"-->
<!--                id="check-stock1"-->
<!--                checked>-->
<!--                <template slot="text"><h3 class="ml-2">Cho phép tiếp tục đặt hàng khi hết hàng</h3></template>-->
<!--              </CheckType>-->
<!--            </li>-->
<!--            <li class="inline-flex">-->
<!--              <CheckType-->
<!--                main-class="ml-0 no-mr"-->
<!--                id="check-stock2"-->
<!--                checked>-->
<!--                <template slot="text"><h3 class="ml-2">Sản phẩm yêu cầu vận chuyển</h3></template>-->
<!--              </CheckType>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

      </div>

    </template>
  </Box>
</template>

<script>
import Box from '@/components/client/Box.vue';
import CheckType from '@/components/client/CheckType.vue';
import InputType from '@/components/client/InputType.vue';
import SelectOption from '@/components/client/SelectOption.vue';
// import InputGroup from '@/components/client/InputGroup.vue';

import {
  InformationSVG,
} from '@/components/SVGs.vue';
import Radio from "@/components/client/Radio";

export default {
  components: {
    Radio,
    Box,
    CheckType,
    InputType,
    InformationSVG,
    SelectOption,
    // InputGroup,
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
