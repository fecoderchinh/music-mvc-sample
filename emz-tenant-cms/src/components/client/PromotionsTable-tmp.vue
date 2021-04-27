<template>
  <!-- eslint-disable max-len -->
  <div class="pt-3 tab-responsive flex-col">
    <div class="w-full cms-table-promotions-filter">
      <table class="w-full">
        <thead>
          <tr>
            <th class="col">
              <FilterSVG class="w-8 sm:w-6 fill-menuIcon"/>
            </th>
            <th class="col">
              <div class="inner-col">
                Mã giảm giá
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Trạng thái
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Đã dùng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Bắt đầu
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Kết thúc
              </div>
            </th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(data, index) in optionDataTable" :key="index">
            <td class="col">
              <CheckType
                :id="data.name"
                main-class="sm:ml-0"/>
            </td>
            <td class="col">
              <div class="inner-col">
                <h3 class="text-buttonAndURL mb-2 text-14px">
                  <span class="mr-5">{{ data.category }}:</span>
                  <span class="uppercase">{{ data.name }}</span>
                </h3>
                <span class="cms-typo text-13px" v-for="(prop, propIndex) in data.list" :key="propIndex">
                    {{ prop }}
                  <EllipseSVG class="w-1 h-1 mx-1 fill-menuIcon inline" v-if="propIndex + 1 !== data.list.length"/>
                </span>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <span class="px-3 py-1 rounded-full" :class="data.status ? 'bg-cmsGreenNotify' : ''">{{ formatStatus(data.status) }}</span>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.used }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.start }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.end }}
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

import {
  FilterSVG,
  EllipseSVG,
} from '../SVGs.vue';

export default {
  components: {
    FilterSVG,
    CheckType,
    EllipseSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          category: 'Voucher',
          name: 'trian2010',
          list: [
            'Giảm 99,000₫ cho 1 danh mục',
            'Tổng giá trị đơn hàng ≥ 119,000₫',
            'Một mã trên mỗi khách hàng',
            'Áp dụng một lần cho mỗi đơn hàng',
            'Áp dụng cùng với chương trình khuyến mãi',
          ],
          status: true,
          used: '0/99',
          start: '30/12/2019',
          end: '30/12/2019',
        },
        {
          category: 'Flash sale',
          name: '21 - 23h 20/11/2020',
          list: [
            'Giảm 18% cho 2 danh mục',
          ],
          status: false,
          used: '—',
          start: '21H 12/9/2018',
          end: '23H 29/10/2020',
        },
        {
          category: 'CTKM',
          name: 'Tháng tư về',
          list: [
            'Giảm 99,000₫ cho 4 sản phẩm',
            'Tổng giá trị sản phẩm được khuyến mãi ≥ 159,000₫',
          ],
          status: true,
          used: '0',
          start: '30/12/2019',
          end: '30/12/2019',
        },
      ],
    };
  },
  methods: {
    formatStatus(num) {
      let str = '';

      if (num) str += 'Đang áp dụng';
      else str += 'Ngưng áp dụng';

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
    > .cms-table-promotions-filter {
      @media (max-width: 1024px) {
        width: 100vw;
      }
      @media (min-width: 425px) and (max-width: 768px) {
        width: 250vw;
      }
      @media (max-width: 424px) {
        width: 300vw;
      }
    }
  }
  .cms-table-promotions-filter {
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
            width: 6%;
          }
          &:nth-child(2) {
            width: 45%;
          }
          &:nth-child(3) {
            width: 15%;
          }
          &:nth-child(4) {
            width: 11%;
          }
          &:nth-child(5) {
            width: 13%;
          }
          &:nth-child(6) {
            width: 13%;
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
          &:nth-child(1) {
            width: 6%;
          }
          &:nth-child(2) {
            width: 45%;
          }
          &:nth-child(3) {
            width: 15%;
          }
          &:nth-child(4) {
            width: 11%;
          }
          &:nth-child(5) {
            width: 13%;
          }
          &:nth-child(6) {
            width: 13%;
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
      .inner-col {
        @apply w-11/12 font-lato font-medium text-13px;
      }
    }
  }
</style>
