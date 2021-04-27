<template>
  <!-- eslint-disable max-len -->
  <div class="pt-3 tab-responsive flex-col">
    <div class="w-full cms-table-category-filter">
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
                Tên danh mục
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Trạng thái
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Điều kiện
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
              <div class="inner-col text-buttonAndURL">
                {{ data.source }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.status }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.condition }}
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
} from '../SVGs.vue';

export default {
  components: {
    FilterSVG,
    CheckType,
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
  .tab-responsive {
    @media (max-width: 1024px) {
      overflow-x: scroll;
    }
    > .cms-table-category-filter {
      @media (max-width: 1024px) {
        width: 150vw;
      }
      @media (max-width: 425px) {
        width: 200vw;
      }
    }
  }
  .cms-table-category-filter {
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
            width: 5%;
          }
          &:nth-child(2) {
            width: 10%;
          }
          &:nth-child(3) {
            width: 35%;
          }
          &:nth-child(4) {
            width: 20%;
          }
          &:nth-child(5) {
            width: 30%;
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
            width: 5%;
          }
          &:nth-child(2) {
            width: 10%;
            @screen sm {
              @apply p-0;
            }
          }
          &:nth-child(3) {
            width: 35%;
          }
          &:nth-child(4) {
            width: 20%;
          }
          &:nth-child(5) {
            width: 30%;
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
        @apply font-lato font-medium text-13px;
        @screen sm {
          @apply absolute w-11/12 truncate;
        }
      }
    }
  }
</style>
