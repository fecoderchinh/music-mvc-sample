<template>
  <!-- eslint-disable max-len -->
  <div class="pt-3 tab-responsive flex-col">
    <div class="w-full cms-table-product-filter">
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
                Kho hàng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Loại
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Danh mục
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Trạng thái
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Nhà cung cấp
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Giá bán
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
                <a href="#" @click.self.prevent="openModal">{{ data.source }}</a>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.stock }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.type }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.category }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.status }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.suplier }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ formatNumber( data.price ) }}đ
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

import ModalProductDetail from '@/components/client/ModalProductDetail.vue';

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
          source: 'Combo cần câu cá',
          stock: '987 sản phẩm của 18 loại',
          type: 'Cần câu tay',
          category: 'Cần câu',
          status: 'Hiển thị',
          suplier: 'Bitis Tổng Cty',
          price: 23456000,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          stock: '— 7 sản phẩm của 18 loại',
          type: 'Cần câu tay',
          category: 'Cần câu, máy câu, combo câu, phụ kiện câu, đồ câu',
          status: 'Ẩn',
          suplier: 'Bitis Tổng Cty',
          price: 23456000,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá',
          stock: '987 sản phẩm của 18 loại',
          type: 'Cần câu tay',
          category: 'Cần câu',
          status: 'Hiển thị',
          suplier: 'Bitis Tổng Cty',
          price: 23456000,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          stock: '— 7 sản phẩm của 18 loại',
          type: 'Cần câu tay',
          category: 'Cần câu, máy câu, combo câu, phụ kiện câu, đồ câu',
          status: 'Ẩn',
          suplier: 'Bitis Tổng Cty',
          price: 23456000,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá',
          stock: '987 sản phẩm của 18 loại',
          type: 'Cần câu tay',
          category: 'Cần câu',
          status: 'Hiển thị',
          suplier: 'Bitis Tổng Cty',
          price: 23456000,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần',
          stock: '— 7 sản phẩm của 18 loại',
          type: 'Cần câu tay',
          category: 'Cần câu, máy câu, combo câu, phụ kiện câu, đồ câu',
          status: 'Ẩn',
          suplier: 'Bitis Tổng Cty',
          price: 23456000,
        },
      ],
    };
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 1200, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalProductDetail, options, style, events);
    },
  },
};
</script>

<style lang="scss">
  .tab-responsive {
    @media (max-width: 1024px) {
      overflow-x: scroll;
    }
    > .cms-table-product-filter {
      @media (max-width: 1024px) {
        width: 150vw;
      }
      @media (max-width: 425px) {
        width: 300vw;
      }
    }
  }
  .cms-table-product-filter {
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
            width: 15%;
          }
          &:nth-child(5) {
            width: 15%;
          }
          &:nth-child(6) {
            width: 15%;
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
          }
          &:nth-child(4) {
            width: 15%;
          }
          &:nth-child(5) {
            width: 15%;
          }
          &:nth-child(6) {
            width: 15%;
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
