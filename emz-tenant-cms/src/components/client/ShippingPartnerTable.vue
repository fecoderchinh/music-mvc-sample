<template>
  <!-- eslint-disable max-len -->
  <div class="grid-cols">
    <div class="no-p overflow-hidden">
      <div class="grid-cols mb-4 px-5 no-mb">

        <div class="md:w-full flex no-mb py-2">
          <div class="flex sm:flex-col md:flex-auto md:items-center relative">
            <p class="font-medium text-14px text-labelAndTitle">
              Phí dự kiến <InformationSVG class="w-14px h-14px fill-buttonAndURL ml-1 inline" />
            </p>
            <h3 class="text-standardCMS text-menuItem md:absolute md:top-50 sm:mt-2 transform md:-translate-y-1/2 md:right-0 flex items-center">
              <EllipseSVG class="w-14px h-14px fill-buttonAndURL ml-1 mb-px inline" />
              <a href="#" for="checktab" class="text-buttonAndURL ml-2">
                Kết nối thêm đối tác chuyển
              </a>
            </h3>
          </div>
        </div>
      </div> <!-- end grid-cols -->

      <TablePartner class="mb-5 px-5"/>

      <div class="grid grid-cols-2 gap-5 px-5">

        <div class="col-span-2">
          <div class="cms-label text-14px text-labelAndTitle no-mb">
            <h3>Thông tin giao hàng gửi sang Giao Hàng Nhanh</h3>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <h3>Yêu cầu</h3>
          </div>
          <div class="w-full">
            <SelectOption :option-data="this.optionDataSelect"/>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="grid grid-cols-3 gap-5">

            <div class="col-span-1 sm:col-span-3">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label for="daicm" class="cursor-pointer">Dài (cm)</label>
              </div>

              <div class="w-full">
                <InputType
                  input-type="number"
                  id="daicm"
                  name="daicm"
                  placeholder="10" />
              </div>
            </div>

            <div class="col-span-1 sm:col-span-3">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label for="rongcm" class="cursor-pointer">Rộng (cm)</label>
              </div>

              <div class="w-full">
                <InputType
                  input-type="number"
                  id="rongcm"
                  name="rongcm"
                  placeholder="10" />
              </div>
            </div>

            <div class="col-span-1 sm:col-span-3">
              <div class="cms-label text-14px mb-3 text-labelAndTitle">
                <label for="caocm" class="cursor-pointer">Cao (cm)</label>
              </div>

              <div class="w-full">
                <InputType
                  input-type="number"
                  id="caocm"
                  name="caocm"
                  placeholder="10" />
              </div>
            </div>

          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="voucher" class="cursor-pointer">Mã giảm giá</label>
          </div>
          <div class="w-full">
            <InputType
              main-class="search-bar"
              id="voucher"
              name="voucher"
              placeholder="Nhập mã giảm giá vận chuyển..."
              button-class="absolute px-5 no-mr h-10 bg-gray-200 border right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none"
              button="button">
              <template slot="button-text"><span class="cms-typo text-14px text-menuItem">Áp dụng</span></template>
            </InputType>
          </div>
        </div>

        <div class="col-span-1 sm:col-span-2">
          <div class="cms-label text-14px mb-3 text-labelAndTitle">
            <label for="phitamtinh" class="cursor-pointer">Phí vận chuyển tạm tính</label>
          </div>
          <div class="w-full">
            <InputType
              id="phitamtinh"
              name="phitamtinh"
              placeholder="123,456,000"
              button-class="absolute right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none">
              <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
            </InputType>
          </div>
        </div>

      </div>

    </div><!-- end grid-box -->
  </div> <!-- end grid-cols -->
</template>

<script>
import TablePartner from '@/components/client/TablePartner.vue';

import {
  EllipseSVG,
  InformationSVG,
} from '../SVGs.vue';

import SelectOption from './SelectOption.vue';
import InputType from './InputType.vue';

export default {
  components: {
    EllipseSVG,
    InformationSVG,
    SelectOption,
    InputType,
    TablePartner,
  },
  data() {
    return {
      optionDataSelect: [
        { name: 'Cho xem hàng, không cho thử hàng' },
        { name: 'Cho thử hàng, khỏi trả tiền' },
        { name: 'Cho free, cho thêm tiền' },
      ],
    };
  },
};
</script>

<style lang="scss">

</style>
