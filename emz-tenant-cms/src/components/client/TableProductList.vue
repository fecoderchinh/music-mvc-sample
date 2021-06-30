<template>
  <!-- eslint-disable max-len -->
  <Table class="table-productlist">
    <thead class="box-table-header table-productlist__header" slot="header">
      <tr v-if="allCheckStatus.length !== 0" class="pl-2">
        <TableActions
            @closeAction="action()"
            :optionData="tableActionsData"
            :isFull="allCheckStatus.length === optionDataTable.length"
            firstItemCss="">
          <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
        </TableActions>
      </tr>
      <tr class="pl-3" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-productlist__header-content" @click="selectAll = !selectAll">
            <ActionCheckbox/>
          </div>
        </th>
        <th>
          <div class="table-productlist__header-content" />
        </th>
        <th>
          <div class="table-productlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Sản phẩm
            </h3>
          </div>
        </th>
        <th>
          <div class="table-productlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Kho hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-productlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Loại
            </h3>
          </div>
        </th>
        <th>
          <div class="table-productlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Danh mục
            </h3>
          </div>
        </th>
        <th>
          <div class="table-productlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Trạng thái
            </h3>
          </div>
        </th>
        <th>
          <div class="table-productlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Nhà cung cấp
            </h3>
          </div>
        </th>
        <th>
          <div class="table-productlist__header-content text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Giá bán
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-productlist__body" slot="body">
      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-productlist__body-content">
            <CheckType
                main-class="ml-0"
                v-model="allCheckStatus"
                :val="data.id"/>
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <img :src="data.img" alt="">
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL">
              <a href="#" @click.self.prevent="openModal(index)">{{ data.source }}</a>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.stock }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.type }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.category }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.status }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.suplier }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-productlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ formatNumber( data.price ) }}đ
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

import ModalProductDetail from '@/components/client/ModalProductDetail.vue';
import ModalProductDetailSaved from '@/components/client/ModalProductDetailSaved.vue';

import http from '@/config/http';
import TableActions from "@/components/client/TableActions";
import ActionCheckbox from "@/components/client/ActionCheckbox";
import ModalAddTags from "@/components/client/ModalAddTags";
import ModalAddCategories from "@/components/client/ModalAddCategories";

export default {
  components: {
    ActionCheckbox,
    TableActions,
    Table,
    CheckType,
    Pagination
  },
  data() {
    return {
      allCheckStatus: [],
      tableActionsData: [
        {
          label: 'Sửa sản phẩm',
        },
        {
          label: 'Đăng bán',
        },
        {
          label: 'Ngừng bán',
        },
        {
          label: 'Xóa sản phẩm',
        },
        {
          label: 'Thêm tags',
          modal: ModalAddTags,
          width: 500
        },
        {
          label: 'Xóa tags',
        },
        {
          label: 'Thêm vào danh mục',
          modal: ModalAddCategories,
          width: 500
        },
        {
          label: 'Xóa khỏi danh mục',
        },
        {
          label: 'Ngừng bán khi hết hàng',
        },
        {
          label: 'Bán tiếp khi hết hàng',
        }
      ],
      optionDataTable: [
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá (MODAL SAVED)',
          stock: '987 sản phẩm của 18 loại',
          type: 'Cần câu tay',
          category: 'Cần câu',
          status: 'Hiển thị',
          suplier: 'Bitis Tổng Cty',
          price: 23456000,
        },
        {
          img: 'https://picsum.photos/60',
          source: 'Combo cần câu cá cho gia đình, thư giản cuối tuần (MODAL UNSAVED)',
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
  created() {
    this.getProduct()
  },
  methods: {
    getProduct(){
      http.get('product/shops').then( response => {
        console.log(response)
      }).catch(e => {
        console.log(e)
      })
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    openModal(id) {
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

      const Modal = (id % 2) ? ModalProductDetail : ModalProductDetailSaved;

      this.$modal.show(Modal, options, style, events);
    },
    action() {
      this.selectAll = !this.selectAll
    },
  },
  computed: {
    selectAll: {
      get: function () {
        return this.optionDataTable ? this.allCheckStatus.length === this.optionDataTable.length : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.optionDataTable.forEach(function (data) {
            selected.push(data.id);
          });
        }

        this.allCheckStatus = selected;
      }
    }
  },
};
</script>

<style lang="scss">
  .table {
    &-productlist {
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
              width: 275px;
              min-width: 275px;
              max-width: 275px;
            }
            &:nth-child(4) {
              width: 190px;
              min-width: 190px;
              max-width: 190px;
            }
            &:nth-child(5) {
              width: 90px;
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(6) {
              width: 130px;
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(7) {
              width: 115px;
              min-width: 115px;
              max-width: 115px;
            }
            &:nth-child(8) {
              width: 115px;
              min-width: 115px;
              max-width: 115px;
            }
            &:nth-child(9) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
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
              width: 275px;
              min-width: 275px;
              max-width: 275px;
            }
            &:nth-child(4) {
              width: 190px;
              min-width: 190px;
              max-width: 190px;
            }
            &:nth-child(5) {
              width: 90px;
              min-width: 90px;
              max-width: 90px;
            }
            &:nth-child(6) {
              width: 130px;
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(7) {
              width: 115px;
              min-width: 115px;
              max-width: 115px;
            }
            &:nth-child(8) {
              width: 115px;
              min-width: 115px;
              max-width: 115px;
            }
            &:nth-child(9) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
          }
        }
      }
    }
  }
</style>
