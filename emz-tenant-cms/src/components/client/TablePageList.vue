<template>
  <!-- eslint-disable max-len -->
  <Table class="table-pagelist">
    <thead class="box-table-header table-pagelist__header" slot="header">
      <tr class="pl-3">
        <th>
          <div class="table-pagelist__header-content">
            <FilterSVG class="w-6 fill-menuIcon"/>
          </div>
        </th>
        <th>
          <div class="table-pagelist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tiêu đề
            </h3>
          </div>
        </th>
        <th>
          <div class="table-pagelist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Người cập nhật
            </h3>
          </div>
        </th>
        <th>
          <div class="table-pagelist__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày đăng
            </h3>
          </div>
        </th>
        <th>
          <div class="w-full text-right">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Ngày cập nhật
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-pagelist__body" slot="body">

      <tr v-for="(data, index) in optionDataTable" :key="index" class="pl-3">
        <td>
          <div class="table-pagelist__body-content">
            <CheckType :id="'pagelist-'+index" main-class="sm:ml-0"/>
          </div>
        </td>
        <td>
          <div class="table-pagelist__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL">
              <a href="#">{{ data.title }}</a>
              <p class="text-menuItem">
                {{ data.content }}
              </p>
            </h3>
          </div>
        </td>
        <td>
          <div class="table-pagelist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.author }}
            </h3>
          </div>
        </td>
        <td>
          <div class="table-pagelist__body-content">
            <h3 class="cms-typo text-13px text-menuItem truncate">
              {{ data.date }}
            </h3>
          </div>
        </td>
        <td>
          <div class="w-full text-right">
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
} from '@/components/SVGs.vue';

export default {
  components: {
    Table,
    FilterSVG,
    CheckType,
  },
  data() {
    return {
      optionDataTable: [
        {
          title: 'Hướng dẫn',
          content: 'Bước 1: Truy cập website và lựa chọn sản phẩm cần mua để mua hàng Bước 2: Click và sản phẩm muốn mua, màn hình hiển thị ra po...',
          author: 'Chỉnh Chỉn Chu',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          title: 'Điều khoản',
          content: 'Khi quý khách truy cập vào trang web của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Trang web có quyền th...',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          title: 'Chính sách',
          content: 'Cám ơn quý khách đã quan tâm và truy cập vào website. Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riê...',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          title: 'Liên hệ',
          content: 'Trang liên hệ',
          author: 'Mem Lang Thang',
          date: '30/12/2019  1:33',
          update: '30/12/2019  1:33',
        },
        {
          title: 'Giới thiệu',
          content: 'Xin mời nhập nội dung tại đây',
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
    &-pagelist {
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
              min-width: 730px;
              max-width: 730px;
            }
            &:nth-child(3) {
              min-width: 120px;
              max-width: 120px;
            }
            &:nth-child(4) {
              min-width: 140px;
              max-width: 140px;
            }
            &:nth-child(5) {
              min-width: 140px;
              max-width: 140px;
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
          td {
            &:nth-child(1) {
              min-width: 50px;
              max-width: 50px;
            }
            &:nth-child(2) {
              min-width: 730px;
              max-width: 730px;
            }
            &:nth-child(3) {
              min-width: 120px;
              max-width: 120px;
            }
            &:nth-child(4) {
              min-width: 140px;
              max-width: 140px;
            }
            &:nth-child(5) {
              min-width: 140px;
              max-width: 140px;
            }
          }
        }
      }
    }
  }
</style>
