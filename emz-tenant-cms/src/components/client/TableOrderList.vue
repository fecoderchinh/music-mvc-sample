<template>
  <!-- eslint-disable max-len -->
  <Table class="table-orderlist">
    <thead class="box-table-header table-orderlist__header" slot="header">
      <tr v-if="allCheckStatus.length !== 0">
        <TableActions @closeAction="action()" :optionData="tableActionsData" :isFull="allCheckStatus.length === optionDataTable.length">
          <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
        </TableActions>
      </tr>
      <tr class="pl-3" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-categories__header-content cursor-pointer text-menuIcon" @click="selectAll = !selectAll">
            <ActionCheckbox/>
          </div>
        </th>
        <th>
          <div class="table-orderlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Đơn hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-orderlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Nguồn đơn hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-orderlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày đặt hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-orderlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Khách hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-orderlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Thanh toán
            </h3>
          </div>
        </th>
        <th>
          <div class="table-orderlist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Giao hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-orderlist__header-content text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tổng tiền
            </h3>
          </div>
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody class="box-table-body table-orderlist__body" slot="body">

      <tr v-for="(data, index) in optionDataTable" :key="data.id" class="pl-3" :class="data.isArchive ? 'opacity-50' : null">
        <td>
          <div class="table-orderlist__body-content">
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
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem">
              <a href="#" @click.self.prevent="openModal" :class="hasNotify( index ) + 'hover:text-buttonAndURL'">
                #{{ data.id }}
              </a>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.orderSource }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.orderDate }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              <a href="#" class="relative flex group hover:text-buttonAndURL items-center">
                {{ data.customerName }}
                <span class="hidden group-hover:block ml-2 relative w-3 h-3 rounded-full bg-buttonAndURL transform -rotate-90 items-center"><ArrowSVG class="hidden group-hover:block w-1 fill-white absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2"/></span>
              </a>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              <a href="#" :class="formatPaidStatusClass( data.paidStatus ) + ' px-3 block truncate text-menuItem font-lato font-medium text-13px rounded-full'">{{ formatPaidStatusName(data.paidStatus) }}</a>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              <a href="#" :class="formatShippingStatusClass(data.shippingStatus) + ' px-3 py-1 text-menuItem font-lato font-medium text-13px rounded-full'">{{ formatShippingStatusName(data.shippingStatus) }}</a>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate" :class="hasLineThrough( index )">
              {{ formatNumber( data.price ) }}đ
            </h3>
          </div>
        </td>
        <td>
          <ArrowSVG class="w-3 transform -rotate-90 fill-buttonAndURL"/>
        </td>
      </tr>
    </tbody>
<!--    <p class="cms-typo text-13px text-labelAndTitle mt-5" slot="outside">Hiển thị 100 kết quả của 385</p>-->
    <Pagination slot="outside" class="mt-5"/>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
// import CheckType from '@/components/client/CheckType.vue';
import Pagination from "@/components/client/Pagination";

import ModalOrderDetail from './ModalOrderDetail.vue';

import {
  ArrowSVG,
} from '../SVGs.vue';
import ModalConfirmOrderContent from "@/components/client/ModalConfirmOrderContent";
import ModalCancelOrder from "@/components/client/ModalCancelOrder";
import ModalReturnOrderContent from "@/components/client/ModalReturnOrderContent";
import ModalUpdatePrice from "@/components/client/ModalUpdatePrice";
import TableActions from "@/components/client/TableActions";
import ActionCheckbox from "@/components/client/ActionCheckbox";

export default {
  components: {
    ActionCheckbox,
    TableActions,
    Table,
    ArrowSVG,
    // CheckType,
    Pagination
  },
  data() {
    return {
      allCheckStatus: [],
      tableActionsData: [
        {
          label: 'Đã gói hàng',
        },
        {
          label: 'Giao hàng',
        },
        {
          label: 'Xác nhận thanh toán',
          modal: ModalConfirmOrderContent,
          width: 500,
        },
        {
          label: 'Hủy đơn hàng',
          modal: ModalCancelOrder,
          width: 720,
        },
        {
          label: 'Hoàn đơn hàng',
          modal: ModalReturnOrderContent,
          width: 720,
        },
        {
          label: 'In đơn hàng',
          modal: ModalUpdatePrice,
          width: 500,
        },
        {
          label: 'Lưu trữ',
          reduceAttention: true,
        },
        {
          label: 'Hủy lưu trữ',
        },
        {
          label: 'Xóa đơn hàng',
        },
      ],
      optionDataTable: [
        {
          id: '1001',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Tầm Hoan',
          price: 23456000,
          paidStatus: 2,
          shippingStatus: 1,
          lineThrough: false,
          notify: true,
        },
        {
          id: '1002',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Tiểu Long',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 2,
          lineThrough: false,
          notify: true,
        },
        {
          id: '1003',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Tiểu Long',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 2,
          lineThrough: false,
          notify: true,
          isArchive: true,
        },
        {
          id: '1004',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Liên Kiệt',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 2,
          lineThrough: true,
          notify: true,
        },
        {
          id: '1005',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Liên Kiệt',
          price: 23456000,
          paidStatus: 3,
          shippingStatus: 3,
          lineThrough: true,
          notify: true,
        },
      ],
    };
  },
  methods: {
    formatPaidStatusClass(num) {
      let str;
      switch (num) {
        case 1:
          str = 'bg-cmsOrangeNotify'; break; // unpaid
        case 2:
          str = 'bg-cmsGreenNotify'; break;
        case 3:
          str = 'bg-sidebarHover'; break; // paid
        default: break;
      }

      return str;
    },
    formatPaidStatusName(num) {
      let str;
      switch (num) {
        case 1:
          str = 'Chưa thanh toán'; break; // unpaid
        case 2:
          str = 'Đã thanh toán'; break; // paid
        case 3:
          str = 'Đã thanh toán'; break; // paid
        default: break;
      }

      return str;
    },
    formatShippingStatusClass(num) {
      let str;
      switch (num) {
        case 1:
          str = 'bg-cmsOrangeNotify'; break; // unpaid
        case 2:
          str = 'bg-cmsGreenNotify'; break;
        case 3:
          str = 'bg-cmsRedNotify'; break; // paid
        default: break;
      }

      return str;
    },
    formatShippingStatusName(num) {
      let str;
      switch (num) {
        case 1:
          str = 'Chưa giao hàng'; break;
        case 2:
          str = 'Đã giao hàng'; break;
        case 3:
          str = 'Chờ chuyển hoàn'; break;
        default: break;
      }

      return str;
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    hasLineThrough(num) {
      let str = '';
      const d = this.optionDataTable;

      if (d[num].lineThrough) str += 'line-through text-Orange ';

      return str;
    },
    hasNotify(num) {
      let str = '';
      const d = this.optionDataTable;

      if (d[num].lineThrough) str += this.hasLineThrough(num);
      if (d[num].notify) str += 'has-notify ';

      return str;
    },
    openModal() {
      const options = {
        class: 'cms-modal modal-lg',
      };
      const style = {
        width: 1200, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalOrderDetail, options, style, events);
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
    &-orderlist {
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
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(3) {
              width: 265px;
              min-width: 265px;
              max-width: 265px;
            }
            &:nth-child(4) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
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
            &:nth-child(7) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
            &:nth-child(8) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(9) {
              width: 30px;
              min-width: 30px;
              max-width: 30px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
          .has-notify {
            @apply relative;
            &:after {
              @apply absolute w-2 h-2 rounded-full bg-cmsRed;
              content: '';
              top: -6px;
              right: -7px;
            }
          }
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
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(3) {
              width: 265px;
              min-width: 265px;
              max-width: 265px;
            }
            &:nth-child(4) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
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
            &:nth-child(7) {
              width: 150px;
              min-width: 150px;
              max-width: 150px;
            }
            &:nth-child(8) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(9) {
              width: 30px;
              min-width: 30px;
              max-width: 30px;
            }
          }
        }
      }
    }
  }
</style>
