<template>
  <!-- eslint-disable max-len -->
  <Table class="table-categories">
    <thead class="box-table-header table-categories__header" slot="header">
      <tr class="pl-3">
        <th>
          <div class="table-categories__header-content">
            <FilterSVG class="w-8 sm:w-6 fill-menuIcon"/>
          </div>
        </th>
        <th>
          <div class="table-categories__header-content">
          </div>
        </th>
        <th>
          <div class="table-categories__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tên danh mục
            </h3>
          </div>
        </th>
        <th>
          <div class="table-categories__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Trạng thái
            </h3>
          </div>
        </th>
        <th>
          <div class="table-categories__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Điều kiện
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-categories__body" slot="body">
      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-categories__body-content">
            <CheckType
              :id="data.source"
              main-class="sm:ml-0"/>
          </div>
        </td>
        <td>
          <div class="table-categories__body-content">
            <img :src="data.img" alt="">
          </div>
        </td>
        <td>
          <div class="table-categories__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL">
              {{ data.source }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-categories__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.status }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-categories__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.condition }}
            </h3>
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

import {
  FilterSVG,
} from '../SVGs.vue';

export default {
  components: {
    FilterSVG,
    CheckType,
    Table,
  },
  data() {
    return {
      optionDataTable: [
        {
          img: 'https://picsum.photos/60',
          source: 'Tóc đẹp',
          status: 'Hiển thị web',
          condition: 'Chứa từ tóc',
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo tóc',
          status: 'Ẩn',
          condition: 'Không chứa từ máy',
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Uốn',
          status: '—',
          condition: '—',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .table {
    &-categories {
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
              width: 80px;
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              width: 397px;
              min-width: 397px;
              max-width: 397px;
            }
            &:nth-child(4) {
              width: 310px;
              min-width: 310px;
              max-width: 310px;
            }
            &:nth-child(5) {
              width: 310px;
              min-width: 310px;
              max-width: 310px;
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
              width: 80px;
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              width: 397px;
              min-width: 397px;
              max-width: 397px;
            }
            &:nth-child(4) {
              width: 310px;
              min-width: 310px;
              max-width: 310px;
            }
            &:nth-child(5) {
              width: 310px;
              min-width: 310px;
              max-width: 310px;
            }
          }
        }
      }
    }
  }
</style>
