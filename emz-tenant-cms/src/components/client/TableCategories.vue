<template>
  <!-- eslint-disable max-len -->
  <Table class="table-categories">
    <thead class="box-table-header table-categories__header" slot="header">
      <tr v-if="allCheckStatus.length !== 0">
        <TableActions @closeAction="action()" :optionData="tableActionsData" :isFull="allCheckStatus.length === optionDataTable.length">
          <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
        </TableActions>
      </tr>
      <tr class="pl-3" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-categories__header-content cursor-pointer" @click="selectAll = !selectAll">
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
<!--    <Loader/>-->
      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-categories__body-content">
              <div class="cms-checkbox">
                <input
                    :id="data.id"
                    type="checkbox"
                    :value="data.id"
                    v-model="allCheckStatus"
                />
                <label :for="data.id" class="text-standardCMS text-menuItem text-14px">
                  <span class="square"><span class="square-inner"></span></span>
                  <slot name="text"></slot>
                </label>
              </div>
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
              <a href="#" @click.self.prevent="openModal(data.modal, data.modalW)">{{ data.source }}</a>
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
<!--    <p class="cms-typo text-13px text-labelAndTitle mt-5" slot="outside">Hiển thị 100 kết quả của 385</p>-->
    <Pagination slot="outside" class="mt-5">
      <span slot="counter">
        Hiển thị 100 kết quả của 385
      </span>
    </Pagination>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
// import CheckType from '@/components/client/CheckType.vue';
import Pagination from "@/components/client/Pagination";

import {
  FilterSVG,
} from '../SVGs.vue';
import ModalDanhMucSp from "@/components/client/ModalDanhMucSp";
import ModalDanhMucSpAuto from "@/components/client/ModalDanhMucSpAuto";
import TableActions from "@/components/client/TableActions";
// import ModalUpdatePrice from "@/components/client/ModalUpdatePrice";
// import ModalCancelOrder from "@/components/client/ModalCancelOrder";
// import ModalConfirmOrderContent from "@/components/client/ModalConfirmOrderContent";
// import ModalReturnOrderContent from "@/components/client/ModalReturnOrderContent";
// import Loader from "@/components/Loader";

export default {
  components: {
    TableActions,
    // Loader,
    FilterSVG,
    // CheckType,
    Table,
    Pagination
  },
  data() {
    return {
      showAction: false,
      showMenu: true,
      allCheckStatus: [],
      // tableActionsData: [
      //   {
      //     label: 'Đã gói hàng',
      //   },
      //   {
      //     label: 'Giao hàng',
      //   },
      //   {
      //     label: 'Xác nhận thanh toán',
      //     modal: ModalConfirmOrderContent,
      //     width: 500,
      //   },
      //   {
      //     label: 'Hủy đơn hàng',
      //     modal: ModalCancelOrder,
      //     width: 720,
      //   },
      //   {
      //     label: 'Hoàn đơn hàng',
      //     modal: ModalReturnOrderContent,
      //     width: 720,
      //   },
      //   {
      //     label: 'In đơn hàng',
      //     modal: ModalUpdatePrice,
      //     width: 500,
      //   },
      //   {
      //     label: 'Lưu trữ',
      //     reduceAttention: true,
      //   },
      //   {
      //     label: 'Hủy lưu trữ',
      //   },
      //   {
      //     label: 'Xóa đơn hàng',
      //   },
      // ],
      tableActionsData: [
        {
          label: 'Ẩn danh mục',
        },
        {
          label: 'Hiển thị danh mục',
        },
        {
          label: 'Gắn vào danh mục khác',
        },
        {
          label: 'Xóa danh mục',
        }
      ],
      optionDataTable: [
        {
          id: "row1",
          img: 'https://picsum.photos/60',
          source: 'Modal danh mục sản phẩm',
          status: 'Hiển thị web',
          condition: 'Chứa từ tóc',
          modal: ModalDanhMucSp,
          modalW: 1200,
        },
        {
          id: "row2",
          img: 'https://picsum.photos/60',
          source: 'Modal danh mục sản phẩm - Tự động',
          status: 'Ẩn',
          condition: 'Không chứa từ máy',
          modal: ModalDanhMucSpAuto,
          modalW: 1200,
        },
      ],
    };
  },
  methods: {
    openModal(m, w = 1200) {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: w, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(m, options, style, events);
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
