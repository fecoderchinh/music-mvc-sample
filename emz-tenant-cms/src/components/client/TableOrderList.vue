<template>
  <!-- eslint-disable max-len -->
  <Table class="table-orderlist">
    <thead class="box-table-header table-orderlist__header" slot="header">
      <tr class="pl-3">
        <th>
          <div class="table-orderlist__header-content">
            <FilterSVG class="w-6 fill-menuIcon"/>
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

      <tr v-for="(data, index) in optionDataTable" :key="data.id" class="pl-3">
        <td>
          <div class="table-orderlist__body-content">
            <CheckType :id="data.id" main-class="sm:ml-0"/>
          </div>
        </td>
        <td>
          <div class="table-orderlist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
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
              <a href="#" :class="formatPaidStatusClass( data.paidStatus ) + ' px-3 py-1 text-menuItem font-lato font-medium text-13px rounded-full'">{{ formatPaidStatusName(data.paidStatus) }}</a>
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
    <p class="cms-typo text-13px text-labelAndTitle mt-5" slot="outside">Hiển thị 100 kết quả của 385</p>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import CheckType from '@/components/client/CheckType.vue';

import ModalOrderDetail from './ModalOrderDetail.vue';

import {
  FilterSVG,
  ArrowSVG,
} from '../SVGs.vue';

export default {
  components: {
    Table,
    FilterSVG,
    ArrowSVG,
    CheckType,
  },
  data() {
    return {
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
          customerName: 'Lý Liên Kiệt',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 2,
          lineThrough: true,
          notify: true,
        },
        {
          id: '1004',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Liên Kiệt',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 1,
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
          str = ''; break; // paid
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
        default: break;
      }

      return str;
    },
    formatShippingStatusClass(num) {
      let str;
      switch (num) {
        case 1:
          str = ''; break; // shipped
        case 2:
          str = 'bg-cmsRedNotify'; break; // wait-transfer
        default: break;
      }

      return str;
    },
    formatShippingStatusName(num) {
      let str;
      switch (num) {
        case 1:
          str = 'Đã giao hàng'; break; // shipped
        case 2:
          str = 'Chờ chuyển hoàn'; break; // wait-transfer
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
