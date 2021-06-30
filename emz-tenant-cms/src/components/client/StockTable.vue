<template>
  <!-- eslint-disable max-len -->
  <Table class="table-stock">
    <thead class="box-table-header table-stock__header" slot="header">
      <tr class="pl-3">
        <th>
          <div class="table-stock__header-content">
            <FilterSVG class="w-8 sm:w-6 fill-menuIcon"/>
          </div>
        </th>
        <th>
          <div class="table-stock__header-content"/>
        </th>
        <th>
          <div class="table-stock__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Sản phẩm
            </h3>
          </div>
        </th>
        <th>
          <div class="table-stock__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              SKU
            </h3>
          </div>
        </th>
        <th>
          <div class="table-stock__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Giá bán
            </h3>
          </div>
        </th>
        <th>
          <div class="table-stock__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Khi hết hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-stock__header-content text-left">
            <h3 class="cms-typo text-14px text-buttonAndURL">
              Tổng SL
            </h3>
          </div>
        </th>
        <th colspan="3">
          <div class="table-stock__header-content text-center">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              QLSL : Cửa hàng chính
            </h3>
          </div>
        </th>
        <th colspan="3">
          <div class="table-stock__header-content text-center">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              QL SL : CN Sài Gòn
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-stock__body" slot="body">
      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3 group">
        <td>
          <div class="table-stock__body-content">
            <CheckType
              :id="data.row3"
              main-class="sm:ml-0"/>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content">
            <img :src="data.row2" alt="" v-if="data.row2">
            <SquareSVG class="w-60px fill-menuIcon" v-else/>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL">{{ data.row3 }}</h3>
            <div class="w-full truncate">
              <span class="inline items-center" v-for="(prop, propIndex) in data.row3attr" :key="propIndex">
                <span class="cms-typo inline text-13px" :class="'text-'+prop.typeColor">{{ prop.typeName }}</span>
                <EllipseSVG class="w-1 h-1 inline mx-1 fill-menuIcon" v-if="propIndex + 1 < data.row3attr.length"/>
              </span>
            </div>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.row4 }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ formatNumber(data.row5) }}đ
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content">
            <h3 :class="[ 'cms-typo text-13px', data.row6 ? 'text-menuItem' : 'text-gray-400' ]">
              {{ data.row6 ? 'Bán tiếp' : 'Dừng bán' }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content text-right">
            <h3 :class="[ 'cms-typo text-13px truncate', data.row7 < 0 ? 'text-cmsRed' : 'text-buttonAndURL' ]">
              {{ formatNumber(data.row7) }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content text-right">
            <h3 :class="[ 'cms-typo text-13px truncate', data.row8clr ? 'text-'+data.row8clr : 'text-menuItem' ]">
              {{ formatNumber(data.row8) }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content text-center">
            <h3 :class="[ 'cms-typo text-13px truncate text-menuItem', data.row9clr ? 'bg-opacity-50 bg-'+data.row9clr : 'bg-transparent' ]">
              {{ formatNumber(data.row9) }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content">
            <InputType
              main-class="search-bar"
              id="voucher"
              name="voucher"
              :placeholder="data.row10"
              input-class="cms-input__with-icon inline"
              button-class="absolute px-2 no-mr h-10 bg-gray-200 group-hover:bg-buttonAndURL border right-0 top-50 transform -translate-y-1/2 mr-4 pb-1 focus:outline-none rounded rounded-l-none hover:bg-buttonAndURL hover:text-white hover:border-buttonAndURL"
              button="button">
              <template slot="button-text"><span class="cms-typo text-13px text-menuItem group-hover:text-white">Lưu</span></template>
            </InputType>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content text-right">
            <h3 :class="[ 'cms-typo text-13px truncate', data.row11clr ? 'text-'+data.row11clr : 'text-menuItem' ]">
              {{ formatNumber(data.row11) }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content text-center">
            <h3 :class="[ 'cms-typo text-13px truncate text-menuItem', data.row12clr ? 'bg-opacity-50 bg-'+data.row12clr : 'bg-transparent' ]">
              {{ formatNumber(data.row12) }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-stock__body-content">
            <InputType
              main-class="search-bar"
              id="voucher"
              name="voucher"
              :placeholder="data.row13"
              input-class="cms-input__with-icon inline"
              button-class="absolute px-2 no-mr h-10 bg-gray-200 group-hover:bg-buttonAndURL border right-0 top-50 transform -translate-y-1/2 mr-4 pb-1 focus:outline-none rounded rounded-l-none hover:bg-buttonAndURL hover:text-white hover:border-buttonAndURL"
              button="button">
              <template slot="button-text"><span class="cms-typo text-13px text-menuItem group-hover:text-white">Lưu</span></template>
            </InputType>
          </div>
        </td>
      </tr>
    </tbody>
    <p class="cms-typo text-13px text-labelAndTitle mt-5" slot="outside">Hiển thị 100 kết quả của 385</p>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import CheckType from '@/components/client/CheckType.vue';
import InputType from '@/components/client/InputType.vue';

import {
  FilterSVG,
  EllipseSVG,
  SquareSVG,
} from '../SVGs.vue';

export default {
  components: {
    Table,
    FilterSVG,
    CheckType,
    InputType,
    EllipseSVG,
    SquareSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          row2: 'https://picsum.photos/60',
          row3: 'Combo cần câu cá',
          row3attr: [
            {
              typeName: 'Ngắn',
              typeColor: 'cmsRed',
            },
            {
              typeName: 'Xanh',
              typeColor: 'cmsGreen',
            },
            {
              typeName: 'Uốn',
              typeColor: 'cmsOrange',
            },
          ],
          row4: 'skuskusku-5',
          row5: 23456000,
          row6: false,
          row7: 5,
          row8: 5,
          row8clr: 'cmsGreen',
          row9: -15,
          row9clr: 'transparent',
          row10: 12,
          row10clr: 'cmsGray',
          row11: 5,
          row11clr: 'cmsGreen',
          row12: -15,
          row12clr: 'cmsRed',
          row13: 12,
          row13clr: 'cmsGray',
        },
        {
          row2: 'https://picsum.photos/60',
          row3: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          row4: 'sku-2',
          row5: 95362000,
          row6: true,
          row7: -68,
          row8: -68,
          row8clr: 'cmsRed',
          row9: -15,
          row9clr: 'Orange',
          row10: 12,
          row10clr: 'cmsGray',
          row11: 5,
          row11clr: 'cmsGreen',
          row12: -15,
          row12clr: 'Orange',
          row13: 12,
          row13clr: 'cmsGray',
        },
        {
          row3: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          row4: 'sku-2',
          row5: 95362000,
          row6: true,
          row7: -68,
          row8: -68,
          row8clr: 'cmsRed',
          row9: -15,
          row9clr: 'Orange',
          row10: 12,
          row10clr: 'cmsGray',
          row11: 5,
          row11clr: 'cmsGreen',
          row12: -15,
          row12clr: 'Orange',
          row13: 12,
          row13clr: 'cmsGray',
        },
      ],
    };
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    formatStatus(num) {
      let str = '';

      if (num) str += 'Hiển thị';
      else str += 'Đang ẩn';

      return str;
    },
  },
};
</script>

<style lang="scss">
  .table {
    &-stock {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          th {
            @apply py-3 border-b;
            &:nth-child(1) {
              width: 70px;
              min-width: 70px;
              max-width: 70px;
            }
            &:nth-child(2) {
              width: 80px;
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              width: 190px;
              min-width: 190px;
              max-width: 190px;
            }
            &:nth-child(4) {
              width: 95px;
              min-width: 95px;
              max-width: 95px;
            }
            &:nth-child(5) {
              width: 95px;
              min-width: 95px;
              max-width: 95px;
            }
            &:nth-child(6) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(7) {
              width: 70px;
              min-width: 70px;
              max-width: 70px;
            }
            &:nth-child(8), &:nth-child(9) {
              @apply relative;
              > div {
                @apply z-10 relative;
              }
              &:after {
                content: '';
                width: calc( 100% );
                @apply bg-cmsLightBlue bg-opacity-10 h-full absolute top-0 left-0;
                @apply border-t border-l border-r border-cmsLightBlue border-opacity-25;
              }
            }
            &:nth-child(8) {
              width: 230px;
              min-width: 230px;
              max-width: 230px;
            }
            &:nth-child(9) {
              width: 230px;
              min-width: 230px;
              max-width: 230px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          &:hover, .active {
            @apply bg-gray-200;
          }
          td {
            @apply py-15px border-b;
            &:nth-child(1) {
              width: 70px;
              min-width: 70px;
              max-width: 70px;
            }
            &:nth-child(2) {
              width: 80px;
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              width: 190px;
              min-width: 190px;
              max-width: 190px;
            }
            &:nth-child(4) {
              width: 95px;
              min-width: 95px;
              max-width: 95px;
            }
            &:nth-child(5) {
              width: 95px;
              min-width: 95px;
              max-width: 95px;
            }
            &:nth-child(6) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(7) {
              width: 70px;
              min-width: 70px;
              max-width: 70px;
            }
            &:nth-child(8), &:nth-child(9), &:nth-child(10),
            &:nth-child(11), &:nth-child(12), &:nth-child(13){
              @apply relative;
              > div {
                @apply z-10 relative;
              }
              &:after {
                content: '';
                width: calc( 100% );
                @apply bg-cmsLightBlue bg-opacity-10 h-full absolute top-0 left-0;
                @apply border-cmsLightBlue border-opacity-25;
              }
            }
            &:nth-child(8), &:nth-child(11) {
              @apply pl-2;
              &:after {
                @apply border-l;
              }
            }
            &:nth-child(10), &:nth-child(13) {
              &:after {
                @apply border-r;
              }
            }
            &:nth-child(10), &:nth-child(13) {
              &:after {
                width: calc( 100% );
              }
            }
            &:nth-child(8), &:nth-child(9), &:nth-child(11), &:nth-child(12) {
              width: 60px;
              min-width: 60px;
              max-width: 60px;
            }
            &:nth-child(10), &:nth-child(13) {
              width: 110px;
              min-width: 110px;
              max-width: 110px;
            }
          }
        }
      }
    }
  }
</style>
