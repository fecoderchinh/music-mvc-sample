<template>
  <!-- eslint-disable max-len -->
  <Table class="table-blogcategories">
    <thead class="box-table-header table-blogcategories__header" slot="header">
      <tr class="pl-3">
        <th>
          <div class="table-blogcategories__header-content">
            <FilterSVG class="w-6 fill-menuIcon"/>
          </div>
        </th>
        <th>
          <div class="table-blogcategories__header-content text-left"/>
        </th>
        <th>
          <div class="table-blogcategories__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tên danh mục
            </h3>
          </div>
        </th>
        <th>
          <div class="table-blogcategories__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Bình luận
            </h3>
          </div>
        </th>
        <th>
          <div class="table-blogcategories__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Người tạo
            </h3>
          </div>
        </th>
        <th>
          <div class="table-blogcategories__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày đăng
            </h3>
          </div>
        </th>
        <th>
          <div class="table-blogcategories__header-content text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày cập nhật
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-blogcategories__body" slot="body">

      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-blogcategories__body-content">
            <CheckType :id="'blogcategories-'+index" main-class="sm:ml-0"/>
          </div>
        </td>
        <td>
          <div class="table-blogcategories__body-content">
            <template v-if="data.img">
              <img :src="data.img" alt="">
            </template>
            <template v-else>
              <SquareSVG class="w-60px h-60px fill-placeholderStyle hover:fill-placeholderStyle"/>
            </template>
          </div>
        </td>
        <td>
          <div class="table-blogcategories__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL truncate">
              <a href="#">{{ data.title }}</a>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-blogcategories__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.cmtStatus }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-blogcategories__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.author }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-blogcategories__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.date }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-blogcategories__body-content text-right">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.update }}
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
import CheckType from '@/components/client/CheckType.vue';

import {
  FilterSVG,
  SquareSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Table,
    FilterSVG,
    CheckType,
    SquareSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          img: 'https://picsum.photos/60',
          title: 'Kinh nghiệm',
          cmtStatus: 'Tự động đăng',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          img: 'https://picsum.photos/60',
          title: 'Tuyển dụng',
          cmtStatus: 'Kiểm duyệt',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          img: 'https://picsum.photos/60',
          title: 'Tuyển dụng',
          cmtStatus: 'Tắt bình luận',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .table {
    &-blogcategories {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply pb-15px border-b;
          th {
            &:nth-child(1) {
              min-width: 50px;
              max-width: 50px;
            }
            &:nth-child(2) {
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              min-width: 505px;
              max-width: 505px;
            }
            &:nth-child(4) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(5) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(6) {
              min-width: 135px;
              max-width: 135px;
            }
            &:nth-child(7) {
              min-width: 135px;
              max-width: 135px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply py-5px border-b;
          &:hover, .active {
            @apply bg-gray-200;
          }
          td {
            &:nth-child(1) {
              min-width: 50px;
              max-width: 50px;
            }
            &:nth-child(2) {
              min-width: 80px;
              max-width: 80px;
            }
            &:nth-child(3) {
              min-width: 505px;
              max-width: 505px;
            }
            &:nth-child(4) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(5) {
              min-width: 130px;
              max-width: 130px;
            }
            &:nth-child(6) {
              min-width: 135px;
              max-width: 135px;
            }
            &:nth-child(7) {
              min-width: 135px;
              max-width: 135px;
            }
          }
        }
      }
    }
  }
</style>
