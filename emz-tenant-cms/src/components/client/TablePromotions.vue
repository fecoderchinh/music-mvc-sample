<template>
  <!-- eslint-disable max-len -->
  <Table class="table-promotions">
    <thead class="box-table-header table-promotions__header" slot="header">
      <tr class="pl-3">
        <th>
          <div class="table-promotions__header-content">
            <FilterSVG class="w-8 sm:w-6 fill-menuIcon"/>
          </div>
        </th>
        <th>
          <div class="table-promotions__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Mã giảm giá
            </h3>
          </div>
        </th>
        <th>
          <div class="table-promotions__header-content">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Trạng thái
            </h3>
          </div>
        </th>
        <th>
          <div class="table-promotions__header-content">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Đã dùng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-promotions__header-content text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Bắt đầu
            </h3>
          </div>
        </th>
        <th>
          <div class="table-promotions__header-content text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Kết thúc
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-promotions__body" slot="body">
        <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
          <td>
            <div class="table-promotions__body-content">
              <CheckType
                :id="data.name"
                main-class="sm:ml-0"/>
            </div>
          </td>
          <td>
            <div class="table-promotions__body-content">
              <h3 class="cms-typo text-buttonAndURL mb-2 text-14px">
                <span class="mr-5">{{ data.category }}:</span>
                <span class="uppercase">{{ data.name }}</span>
              </h3>
              <span class="cms-typo text-13px text-labelAndTitle" v-for="(prop, propIndex) in data.list" :key="propIndex">
                  {{ prop }}
                <EllipseSVG class="w-1 h-1 mx-1 fill-current inline" v-if="propIndex + 1 !== data.list.length"/>
              </span>
            </div>
          </td>
          <td>
            <div class="table-promotions__body-content text-center">
              <h3 class="cms-typo text-13px text-menuItem">
                <span class="px-3 py-1 rounded-full" :class="data.status ? 'bg-cmsGreenNotify' : ''">{{ formatStatus(data.status) }}</span>
              </h3>
            </div>
          </td>
          <td>
            <div class="table-promotions__body-content text-center">
              <h3 class="cms-typo text-13px text-menuItem">
                {{ data.used }}
              </h3>
            </div>
          </td>
          <td>
            <div class="table-promotions__body-content text-right">
              <h3 class="cms-typo text-13px text-menuItem">
                {{ data.start }}
              </h3>
            </div>
          </td>
          <td>
            <div class="table-promotions__body-content text-right">
              <h3 class="cms-typo text-13px text-menuItem">
                {{ data.end }}
              </h3>
            </div>
          </td>
        </tr>
      </tbody>
<!--    <p class="cms-typo text-13px text-labelAndTitle mt-5" slot="outside">Hiển thị 100 kết quả của 385</p>-->
    <Pagination slot="outside" class="mt-5"/>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import CheckType from '@/components/client/CheckType.vue';
import Pagination from "@/components/client/Pagination";

import {
  FilterSVG,
  EllipseSVG,
} from '../SVGs.vue';

export default {
  components: {
    Table,
    FilterSVG,
    CheckType,
    EllipseSVG,
    Pagination
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
  .table {
    &-promotions {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply pb-15px border-b;
          th {
            &:nth-child(1) {
              width: 70px;
              min-width: 70px;
              max-width: 70px;
            }
            &:nth-child(2) {
              width: 555px;
              min-width: 555px;
              max-width: 555px;
            }
            &:nth-child(3) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
            &:nth-child(4) {
              width: 90px;
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(5) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
            &:nth-child(6) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply py-15px border-b;
          &:hover, .active {
            @apply bg-gray-200;
          }
          td {
            &:nth-child(1) {
              width: 70px;
              min-width: 70px;
              max-width: 70px;
            }
            &:nth-child(2) {
              width: 555px;
              min-width: 555px;
              max-width: 555px;
            }
            &:nth-child(3) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
            &:nth-child(4) {
              width: 90px;
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(5) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
            &:nth-child(6) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
          }
        }
      }
    }
  }
</style>
