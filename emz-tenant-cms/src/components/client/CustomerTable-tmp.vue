<template>
  <!-- eslint-disable max-len -->
  <div class="pt-3 tab-responsive flex-col">
    <div class="w-full cms-table-customer-filter">
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
                Khách hàng
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Số điện thoại
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Email
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Đơn gần nhất
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Ngày tạo
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Tổng đơn
              </div>
            </th>
            <th class="col">
              <div class="inner-col">
                Tổng đã mua
              </div>
            </th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(data, index) in optionDataTable" :key="index">
            <td class="col">
              <CheckType
                :id="data.name"
                main-class="sm:ml-0"/>
            </td>
            <td class="col">
              <div class="inner-col">
                <template v-if="data.img">
                  <img :src="data.img" alt="" class="rounded-full">
                </template>
                <template v-else>
                  <AvatarSVG class="w-10 h-10 fill-placeholderStyle hover:fill-placeholderStyle"/>
                </template>
              </div>
            </td>
            <td class="col">
              <div class="inner-col text-buttonAndURL">
                {{ data.name }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.phone }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.email }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col text-buttonAndURL">
                {{ data.latestOrder }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ data.date }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ formatNumber(data.totalOrder) }}
              </div>
            </td>
            <td class="col">
              <div class="inner-col">
                {{ formatNumber(data.total) }}đ
              </div>
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
  AvatarSVG,
} from '../SVGs.vue';

export default {
  components: {
    FilterSVG,
    CheckType,
    AvatarSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
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
          name: 'Nhiên Pro',
          phone: '—',
          email: 'Nhienpro@gmail.com',
          latestOrder: '—',
          date: '12/9/2018',
          totalOrder: '—',
          total: 965362000,
        },
        {
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
          name: 'Nhiên Pro',
          phone: '—',
          email: 'Nhienpro@gmail.com',
          latestOrder: '—',
          date: '12/9/2018',
          totalOrder: '—',
          total: 965362000,
        },
        {
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
          name: 'Nhiên Pro',
          phone: '—',
          email: 'Nhienpro@gmail.com',
          latestOrder: '—',
          date: '12/9/2018',
          totalOrder: '—',
          total: 965362000,
        },
        {
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
  },
};
</script>

<style lang="scss">
  .tab-responsive {
    @media (max-width: 1024px) {
      overflow-x: scroll;
    }
    > .cms-table-customer-filter {
      @media (max-width: 1024px) {
        width: 150vw;
      }
      @media (max-width: 425px) {
        width: 300vw;
      }
    }
  }
  .cms-table-customer-filter {
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
          @apply flex-auto truncate px-3 py-1 border-t border-b text-left text-menuItem;
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
        @apply w-11/12 truncate font-lato font-medium text-13px;
      }
    }
  }
</style>
