<template>
  <!-- eslint-disable max-len -->
  <div class="pt-3 tab-responsive flex-col">
    <div class="w-full cms-table-cod-filter">
      <table class="w-full">
        <thead>
          <tr>
            <th class="col">
              <FilterSVG class="w-8 sm:w-6 fill-menuIcon"/>
            </th>
            <th class="col">
              <div class="inner-col">
                Mã phiếu
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Đơn hàng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Nguồn đơn hàng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Ngày đặt hàng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Khách hàng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                <span class="px-3">Thu hộ COD</span>
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                <span class="px-3">Giao hàng</span>
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Tổng tiền
              </div>
            </th>
            <th class="col"></th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(data, index) in optionDataTable" :key="data.id">
            <td class="col">
              <CheckType
                :id="data.id"
                main-class="sm:ml-0"/>
            </td>
            <td class="col">
              <a href="#" :class="hasNotify( index ) + 'hover:text-buttonAndURL'">
                {{ data.ticket }}
              </a>
            </td>
            <td class="col">
              <a href="#" :class="hasNotify( index ) + 'hover:text-buttonAndURL'">
                #{{ data.id }}
              </a>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.orderSource }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.orderDate }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <a href="#" class="relative flex group hover:text-buttonAndURL items-center">
                  {{ data.customerName }}
                  <span class="hidden group-hover:block ml-2 relative w-3 h-3 rounded-full bg-buttonAndURL transform -rotate-90 items-center"><ArrowSVG class="hidden group-hover:block w-1 fill-white absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2"/></span>
                </a>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <a href="#" :class="formatPaidStatusClass( data.paidStatus ) + ' px-3 py-1 text-menuItem font-lato font-medium text-13px rounded-full'">{{ formatPaidStatusName(data.paidStatus) }}</a>
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                <a href="#" :class="formatShippingStatusClass(data.shippingStatus) + ' px-3 py-1 text-menuItem font-lato font-medium text-13px rounded-full'">{{ formatShippingStatusName(data.shippingStatus) }}</a>
              </div>
            </td>
            <td class="col">
              <div :class="hasLineThrough( index ) +'inner-col'">
                {{ formatNumber( data.price ) }}đ
              </div>
            </td>
            <td class="col">
              <ArrowSVG class="w-3 transform -rotate-90 fill-buttonAndURL"/>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <p class="text-standardCMS text-13px text-labelAndTitle mt-5 text-left w-full px-6">Hiển thị 100 kết quả của 385</p>
  </div>
</template>

<script>
import CheckType from '@/components/client/CheckType.vue';
import {
  FilterSVG,
  ArrowSVG,
} from '../SVGs.vue';

export default {
  components: {
    FilterSVG,
    ArrowSVG,
    CheckType,
  },
  data() {
    return {
      optionDataTable: [
        {
          ticket: 'P1001',
          id: '1001',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Tầm Hoan',
          price: 23456000,
          paidStatus: 2,
          shippingStatus: 1,
          lineThrough: false,
          notify: false,
        },
        {
          ticket: 'P1002',
          id: '1002',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Tiểu Long',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 2,
          lineThrough: false,
          notify: false,
        },
        {
          ticket: 'P1003',
          id: '1003',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Liên Kiệt',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 2,
          lineThrough: false,
          notify: false,
        },
        {
          ticket: 'P1004',
          id: '1004',
          orderSource: 'Lazada Đồ Câu Pzoom',
          orderDate: '15/12/2019 14:25',
          customerName: 'Lý Liên Kiệt',
          price: 23456000,
          paidStatus: 1,
          shippingStatus: 1,
          lineThrough: false,
          notify: false,
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
  },
};
</script>

<style lang="scss">
  .tab-responsive {
    @media (max-width: 1024px) {
      overflow-x: scroll;
    }
    > .cms-table-cod-filter {
      @media (max-width: 1024px) {
        width: 150vw;
      }
      @media (max-width: 425px) {
        width: 300vw;
      }
    }
  }
  .cms-table-cod-filter {
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
            width: 7%;
          }
          &:nth-child(3) {
            width: 7%;
          }
          &:nth-child(4) {
            width: 15%;
          }
          &:nth-child(5) {
            width: 12%;
          }
          &:nth-child(6) {
            width: 11%;
          }
          &:nth-child(7) {
            width: 14%;
          }
          &:nth-child(8) {
            width: 14%;
          }
          &:nth-child(9) {
            width: 12%;
          }
          &:nth-child(10) {
            width: 4%;
          }
        }
      }
    }
    tbody {
      @apply flex flex-col;
      tr {
        @apply flex px-3 w-full;
        td {
          @apply flex-auto truncate px-3 py-3 border-t border-b text-left text-menuItem;
          &:nth-child(1) {
            width: 4%;
          }
          &:nth-child(2) {
            width: 7%;
          }
          &:nth-child(3) {
            width: 7%;
          }
          &:nth-child(4) {
            width: 15%;
          }
          &:nth-child(5) {
            width: 12%;
          }
          &:nth-child(6) {
            width: 11%;
          }
          &:nth-child(7) {
            width: 14%;
          }
          &:nth-child(8) {
            width: 14%;
          }
          &:nth-child(9) {
            width: 12%;
          }
          &:nth-child(10) {
            width: 4%;
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
        @apply absolute w-11/12 truncate font-lato font-medium text-13px;
      }
    }
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
</style>
