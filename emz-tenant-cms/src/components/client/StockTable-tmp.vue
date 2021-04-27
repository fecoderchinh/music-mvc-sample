<template>
  <!-- eslint-disable max-len -->
  <div class="pt-3 tab-responsive flex-col">
    <div class="w-full cms-table-stock-filter">
      <table class="w-full">
        <thead>
          <tr>
            <th class="col">
              <FilterSVG class="w-8 sm:w-6 fill-menuIcon"/>
            </th>
            <th class="col">
              <div class="inner-col">
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Sản phẩm
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                SKU
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Giá bán
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Khi hết hàng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Trạng thái
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Số lượng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Cập nhật số lượng
              </div>
            </th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(data, index) in optionDataTable" :key="index">
            <td class="col">
              <CheckType
                :id="data.source"
                main-class="sm:ml-0"/>
            </td>
            <td class="col">
              <div class="inner-col">
                <img :src="data.img" alt="">
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <h3 class="text-buttonAndURL">{{ data.source }}</h3>
                <ul class="cms-table-props list-none space-x-1 w-full truncate flex items-center">
                  <li class="inline-flex items-center" v-for="(prop, propIndex) in data.type" :key="propIndex">
                    <span class="font-lato font-medium text-13px" :class="'text-'+prop.typeColor">{{ prop.typeName }}</span>
                    <EllipseSVG class="w-1 h-1 ml-1 fill-menuIcon" v-if="propIndex + 1 !== data.type.length"/>
                  </li>
                </ul>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.sku }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ formatNumber(data.price) }}đ
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.stockStatus }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <span class="px-3 py-1 rounded-full" :class="data.status ? 'bg-cmsGreenNotify' : ''">{{ formatStatus(data.status) }}</span>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ formatNumber(data.quantity) }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <span class="px-3 py-1" :class="data.quantityUpdated > 0 ? 'bg-cmsOrangeNotify' : 'bg-cmsRedNotify'"> {{ data.quantityUpdated > 0 ? '+' : '' }}{{ formatNumber(data.quantityUpdated) }}</span>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <InputType
                  main-class="search-bar"
                  id="voucher"
                  name="voucher"
                  placeholder="0"
                  button-class="absolute px-5 no-mr h-10 bg-gray-200 border right-0 top-50 transform -translate-y-1/2 mr-4 focus:outline-none rounded rounded-l-none hover:bg-buttonAndURL hover:text-white"
                  button="button">
                  <template slot="button-text"><span class="text-standardCMS">Lưu</span></template>
                </InputType>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <p class="text-standardCMS text-13px text-labelAndTitle mt-5 text-left w-full px-6">Hiển thị 1 - 100 kết quả của 385</p>
  </div>
</template>

<script>
import CheckType from '@/components/client/CheckType.vue';
import InputType from '@/components/client/InputType.vue';

import {
  FilterSVG,
  EllipseSVG,
} from '../SVGs.vue';

export default {
  components: {
    FilterSVG,
    CheckType,
    InputType,
    EllipseSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          type: [
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
          sku: 'skuskusku-5',
          price: 23456000,
          stockStatus: 'Tiếp tục bán',
          status: true,
          quantity: 1000,
          quantityUpdated: -4566,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          type: [
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
          sku: 'skuskusku-5',
          price: 23456000,
          stockStatus: 'Dừng bán',
          status: false,
          quantity: 1000,
          quantityUpdated: 1234,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          type: [
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
          sku: 'skuskusku-5',
          price: 23456000,
          stockStatus: 'Tiếp tục bán',
          status: true,
          quantity: 1000,
          quantityUpdated: -4566,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          type: [
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
          sku: 'skuskusku-5',
          price: 23456000,
          stockStatus: 'Dừng bán',
          status: false,
          quantity: 1000,
          quantityUpdated: 1234,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          type: [
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
          sku: 'skuskusku-5',
          price: 23456000,
          stockStatus: 'Tiếp tục bán',
          status: true,
          quantity: 1000,
          quantityUpdated: -4566,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          type: [
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
          sku: 'skuskusku-5',
          price: 23456000,
          stockStatus: 'Dừng bán',
          status: false,
          quantity: 1000,
          quantityUpdated: 1234,
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
  .tab-responsive {
    @media (max-width: 1024px) {
      overflow-x: scroll;
    }
    > .cms-table-stock-filter {
      @media (max-width: 1024px) {
        width: 150vw;
      }
      @media (max-width: 768px) {
        width: 200vw;
      }
      @media (max-width: 425px) {
        width: 300vw;
      }
    }
  }
  .cms-table-stock-filter {
    @apply w-full flex items-center;
    table {
      @apply w-full;
    }
    thead {
      @apply flex;
      tr {
        @apply flex px-3 w-full mb-5;
        th {
          @apply flex-auto truncate px-3 text-left text-labelAndTitle;
          &:nth-child(1) {
            width: 4%;
          }
          &:nth-child(2) {
            width: 6%;
          }
          &:nth-child(3) {
            width: 15%;
          }
          &:nth-child(4) {
            width: 10%;
          }
          &:nth-child(5) {
            width: 10%;
          }
          &:nth-child(6) {
            width: 10%;
          }
          &:nth-child(7) {
            width: 10%;
          }
          &:nth-child(8) {
            width: 10%;
          }
          &:nth-child(9) {
            width: 10%;
          }
          &:nth-child(10) {
            width: 15%;
          }
        }
      }
    }
    tbody {
      @apply flex flex-col;
      tr {
        @apply flex px-3 w-full;
        td {
          @apply flex-auto px-3 py-3 border-t border-b text-left text-menuItem;
          @screen sm {
            @apply truncate;
          }
          &:nth-child(1) {
            width: 4%;
          }
          &:nth-child(2) {
            width: 6%;
            @screen sm {
              @apply p-0;
            }
          }
          &:nth-child(3) {
            width: 15%;
            @screen sm {
              @apply py-0;
            }
          }
          &:nth-child(4) {
            width: 10%;
          }
          &:nth-child(5) {
            width: 10%;
          }
          &:nth-child(6) {
            width: 10%;
          }
          &:nth-child(7) {
            width: 10%;
          }
          &:nth-child(8) {
            width: 10%;
          }
          &:nth-child(9) {
            width: 10%;
          }
          &:nth-child(10) {
            width: 15%;
            @screen sm {
              @apply py-0;
            }
          }
        }
        &:hover {
          @apply bg-gray-200;
        }
      }
    }
    [class^=col-], .col {
      @apply relative font-lato font-medium text-13px;
      @media (min-width: 768px) {
        @apply flex items-center;
      }
      @screen sm {
        @apply flex items-center;
      }
      .inner-col {
        @apply font-lato font-medium text-13px;
        @screen sm {
          @apply flex flex-col items-center w-11/12 truncate;
        }
      }
    }
  }
</style>
