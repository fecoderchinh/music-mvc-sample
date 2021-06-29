<template>
  <!-- eslint-disable max-len -->
  <Table class="table-customer">
    <thead class="box-table-header table-customer__header" slot="header">
      <tr v-if="allCheckStatus.length !== 0">
        <TableActions @closeAction="action()" :optionData="tableActionsData" :isFull="allCheckStatus.length === optionDataTable.length">
          <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
        </TableActions>
      </tr>
      <tr class="pl-3" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-customer__header-content" @click="selectAll = !selectAll">
            <ActionCheckbox/>
          </div>
        </th>
        <th>
          <div class="table-customer__header-content"/>
        </th>
        <th>
          <div class="table-customer__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Khách hàng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-customer__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Số điện thoại
            </h3>
          </div>
        </th>
        <th>
          <div class="table-customer__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Email
            </h3>
          </div>
        </th>
        <th>
          <div class="table-customer__header-content">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Đơn gần nhất
            </h3>
          </div>
        </th>
        <th>
          <div class="table-customer__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày tạo
            </h3>
          </div>
        </th>
        <th>
          <div class="table-customer__header-content">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tổng đơn
            </h3>
          </div>
        </th>
        <th>
          <div class="table-customer__header-content text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tổng đã mua
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-customer__body" slot="body">
      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-customer__body-content">
            <div class="cms-checkbox">
              <input
                  :id="data.id"
                  type="checkbox"
                  :value="data.id"
                  v-model="allCheckStatus"
              />
              <label :for="data.id" class="text-standardCMS text-menuItem text-14px">
                <span class="square"><span class="square-inner"></span></span>
              </label>
            </div>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content text-menuIcon">
            <template v-if="data.img">
              <img :src="data.img" alt="" class="rounded-full">
            </template>
            <template v-else>
              <AvatarSVG class="w-10 h-10"/>
            </template>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content truncate">
            <h3 class="cms-typo text-13px text-buttonAndURL cursor-pointer" @click="openModal">
              {{ data.name }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content text-center truncate">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.phone }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content truncate">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.email }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content text-center truncate">
            <h3 class="cms-typo text-13px text-buttonAndURL">
              {{ data.latestOrder }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content truncate">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ data.date }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content text-center truncate">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ formatNumber(data.totalOrder) }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-customer__body-content text-right truncate">
            <h3 class="cms-typo text-13px text-menuItem">
              {{ formatNumber(data.total) }}đ
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
import Pagination from "@/components/client/Pagination";

import ModalCustomerDetail from '@/components/client/ModalCustomerDetail.vue';

import {
  AvatarSVG,
} from '../SVGs.vue';
import TableActions from "@/components/client/TableActions";
import ActionCheckbox from "@/components/client/ActionCheckbox";

export default {
  components: {
    ActionCheckbox,
    TableActions,
    Table,
    AvatarSVG,
    Pagination
  },
  data() {
    return {
      allCheckStatus: [],
      tableActionsData: [
        {
          label: 'Action 1',
        },
        {
          label: 'Action 2',
        },
      ],
      optionDataTable: [
        {
          id: '1',
          img: 'https://picsum.photos/40',
          name: 'NameLongLong@gmail.com',
          phone: '0978 254 123',
          email: 'Chinhchinchu@gmail.com',
          latestOrder: 'D6948',
          date: '12/9/2018',
          totalOrder: 267,
          total: 965362000,
        },
        {
          id: '2',
          name: 'Nhiên Pro',
          phone: '—',
          email: 'Nhienpro@gmail.com',
          latestOrder: '—',
          date: '12/9/2018',
          totalOrder: '—',
          total: 965362000,
        },
        {
          id: '3',
          img: 'https://picsum.photos/40',
          name: 'NameLongLong@gmail.com',
          phone: '0978 254 123',
          email: 'Chinhchinchu@gmail.com',
          latestOrder: 'D6948',
          date: '12/9/2018',
          totalOrder: 267,
          total: 965362000,
        },
        {
          id: '4',
          name: 'Nhiên Pro',
          phone: '—',
          email: 'Nhienpro@gmail.com',
          latestOrder: '—',
          date: '12/9/2018',
          totalOrder: '—',
          total: 965362000,
        },
        {
          id: '5',
          img: 'https://picsum.photos/40',
          name: 'NameLongLong@gmail.com',
          phone: '0978 254 123',
          email: 'Chinhchinchu@gmail.com',
          latestOrder: 'D6948',
          date: '12/9/2018',
          totalOrder: 267,
          total: 965362000,
        },
        {
          id: '6',
          name: 'Nhiên Pro',
          phone: '—',
          email: 'Nhienpro@gmail.com',
          latestOrder: '—',
          date: '12/9/2018',
          totalOrder: '—',
          total: 965362000,
        },
        {
          id: '7',
          img: 'https://picsum.photos/40',
          name: 'NameLongLong@gmail.com',
          phone: '0978 254 123',
          email: 'Chinhchinchu@gmail.com',
          latestOrder: 'D6948',
          date: '12/9/2018',
          totalOrder: 267,
          total: 965362000,
        },
        {
          id: '8',
          name: 'Nhiên Pro',
          phone: '—',
          email: 'Nhienpro@gmail.com',
          latestOrder: '—',
          date: '12/9/2018',
          totalOrder: '—',
          total: 965362000,
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
        width: 880, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalCustomerDetail, options, style, events);
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
    &-customer {
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
              width: 60px;
              min-width: 60px;
              max-width: 60px;
            }
            &:nth-child(3) {
              width: 245px;
              min-width: 245px;
              max-width: 245px;
            }
            &:nth-child(4) {
              width: 120px;
              min-width: 120px;
              max-width: 120px;
            }
            &:nth-child(5) {
              width: 245px;
              min-width: 245px;
              max-width: 245px;
            }
            &:nth-child(6) {
              width: 120px;
              min-width: 120px;
              max-width: 120px;
            }
            &:nth-child(7) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(8) {
              width: 80px;
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(9) {
              width: 120px;
              min-width: 120px;
              max-width: 120px;
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
              width: 60px;
              min-width: 60px;
              max-width: 60px;
            }
            &:nth-child(3) {
              width: 245px;
              min-width: 245px;
              max-width: 245px;
            }
            &:nth-child(4) {
              width: 120px;
              min-width: 120px;
              max-width: 120px;
            }
            &:nth-child(5) {
              width: 245px;
              min-width: 245px;
              max-width: 245px;
            }
            &:nth-child(6) {
              width: 120px;
              min-width: 120px;
              max-width: 120px;
            }
            &:nth-child(7) {
              width: 100px;
              min-width: 100px;
              max-width: 100px;
            }
            &:nth-child(8) {
              width: 80px;
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(9) {
              width: 120px;
              min-width: 120px;
              max-width: 120px;
            }
          }
        }
      }
    }
  }
</style>
