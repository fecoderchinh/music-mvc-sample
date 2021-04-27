<template>
  <!-- eslint-disable max-len -->
  <Table class="table-UR">
    <thead class="box-table-header table-UR__header" slot="header">
      <tr>
        <th>
          <div class="table-UR__header-content text-left text-left">
            <h3 class="cms-typo text-lg text-labelAndTitle">
              Tài khoản nhân viên
            </h3>
          </div>
        </th>
        <th>
          <div class="table-UR__header-content text-center">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Số điện thoại
            </h3>
          </div>
        </th>
        <th>
          <div class="table-UR__header-content text-left text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Email
            </h3>
          </div>
        </th>
        <th>
          <div class="table-UR__header-content text-center">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày tạo
            </h3>
          </div>
        </th>
        <th>
          <div class="table-UR__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Địa chỉ
            </h3>
          </div>
        </th>
        <th>
          <div class="table-UR__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Mạng xã hội
            </h3>
          </div>
        </th>
        <th>
          <div class="w-full text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Phân quyền
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-UR__body" slot="body">
      <tr v-for="(data, index) in optionDataTable" :key="index">
        <td>
          <div class="table-UR__body-content flex items-center">
            <template v-if="data.img">
              <img :src="data.img" alt="" class="rounded-full inline-flex">
            </template>
            <template v-else>
              <AvatarSVG class="w-10 h-10 fill-placeholderStyle hover:fill-placeholderStyle hover:filter-none inline-flex"/>
            </template>
            <h3 class="cms-typo text-13px text-buttonAndURL cursor-pointer inline-flex ml-5 truncate">
              {{ data.name }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-UR__body-content text-center">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.phone }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-UR__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.email }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-UR__body-content text-center">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.date }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-UR__body-content text-left">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.address }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-UR__body-content text-left">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.social }}
            </h3>
          </div>
        </td>
        <td>
          <div class="w-full text-right">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.role }}
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

import {
  AvatarSVG,
} from '../SVGs.vue';

export default {
  components: {
    Table,
    AvatarSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          img: 'https://picsum.photos/40',
          name: 'Vô Ảnh',
          phone: '0978 254 123',
          email: 'Email@gmail.com',
          date: '1/3/2020',
          address: '36, Hàng Bồ, Hoàn Kiếm, Hà Nội',
          social: 'https://f.com/lythamhoa',
          role: 'Chủ tài khoản',
        },
        {
          name: 'Thành Đẹp Trai',
          phone: '0921 365 478',
          email: 'VoAnh@gmail.com',
          date: '1/3/2020',
          address: '36, Hàng Bồ, Hoàn Kiếm, Hà Nội',
          social: 'https://f.com/lythamhoa',
          role: 'Full quyền',
        },
        {
          img: 'https://picsum.photos/40',
          name: 'Chỉnh Chỉn Chu',
          phone: '0978 254 123',
          email: 'Nhienpro@gmail.com',
          date: '1/3/2020',
          address: '36, Hàng Bồ, Hoàn Kiếm, Hà Nội',
          social: 'https://f.com/lythamhoa',
          role: 'Giới hạn',
        },
        {
          name: 'Thành Đẹp Trai',
          phone: '0921 365 478',
          email: 'VoAnh@gmail.com',
          date: '1/3/2020',
          address: '36, Hàng Bồ, Hoàn Kiếm, Hà Nội',
          social: 'https://f.com/lythamhoa',
          role: 'Giới hạn',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  .table {
    &-UR {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply pb-15px border-b;
          th {
            &:nth-child(1) {
              min-width: 205px;
              max-width: 205px;
            }
            &:nth-child(2) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(3) {
              min-width: 195px;
              max-width: 195px;
            }
            &:nth-child(4) {
              min-width: 115px;
              max-width: 115px;
            }
            &:nth-child(5) {
              min-width: 235px;
              max-width: 235px;
            }
            &:nth-child(6) {
              min-width: 185px;
              max-width: 185px;
            }
            &:nth-child(7) {
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
          td {
            &:nth-child(1) {
              min-width: 205px;
              max-width: 205px;
            }
            &:nth-child(2) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(3) {
              min-width: 195px;
              max-width: 195px;
            }
            &:nth-child(4) {
              min-width: 115px;
              max-width: 115px;
            }
            &:nth-child(5) {
              min-width: 235px;
              max-width: 235px;
            }
            &:nth-child(6) {
              min-width: 185px;
              max-width: 185px;
            }
            &:nth-child(7) {
              min-width: 120px;
              max-width: 120px;
            }
          }
        }
      }
    }
  }
</style>
