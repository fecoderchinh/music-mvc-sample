<template>
  <!-- eslint-disable max-len -->
  <Table class="table-package">
    <thead class="box-table-header table-package__header" slot="header">
    <tr>
      <th>
        <div class="table-package__header-content text-left">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Dịch vụ
          </h3>
        </div>
      </th>
      <th>
        <div class="table-package__header-content text-left">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Ngày bắt đầu
          </h3>
        </div>
      </th>
      <th>
        <div class="table-package__header-content text-left">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Ngày kết thúc
          </h3>
        </div>
      </th>
      <th>
        <div class="table-package__header-content text-left">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Thông tin thêm
          </h3>
        </div>
      </th>
      <th>
        <div class="w-full text-right">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Hành động
          </h3>
        </div>
      </th>
    </tr>
    </thead>
    <tbody class="box-table-body table-package__body" slot="body">

    <tr v-for="(data, index) in optionDataTable" :key="index">
      <td>
        <div class="table-package__body-content">
          <h3 class="cms-typo text-13px text-menuItem truncate">
            {{ data.col1 }}
          </h3>
        </div>
      </td>
      <td>
        <div class="table-package__body-content">
          <h3 class="cms-typo text-13px text-menuItem truncate">
            {{ data.col2 }}
          </h3>
        </div>
      </td>
      <td>
        <div class="table-package__body-content">
          <h3 class="cms-typo text-13px text-menuItem truncate">
            {{ data.col3 }}
          </h3>
        </div>
      </td>
      <td>
        <div class="w-full">
          <h3 class="cms-typo text-13px text-menuItem truncate" v-for="(dataC, indexC) in data.col4" :key="indexC">
            <span>{{ dataC.col4text }}</span>
            <span :class="'text-'+dataC.col4color">
              <EllipseSVG class="w-1 h-1 mx-10px inline" :class="'fill-'+dataC.col4color"/>
              {{ dataC.col4data }}
            </span>
          </h3>
        </div>
      </td>
      <td>
        <div class="w-full text-right">
          <h3 class="cms-typo text-13px truncate" :class="data.col5disabled ? 'text-placeholderStyle cursor-not-allowed' : 'text-buttonAndURL'">
            <a href="#" :class="data.col5disabled ? 'cursor-not-allowed' : null">{{ data.col5 }}</a>
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
  EllipseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Table,
    EllipseSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          col1: 'EMZ Best (Gói chính)',
          col2: '26/12/2020',
          col3: '26/12/2021',
          col4: [
            {
              col4text: '1 năm',
              col4data: 'Còn 99 ngày',
              col4color: 'menuItem',
            },
          ],
          col5: 'Nâng cấp',
        },
        {
          col1: 'Gói 3 theme (Giao diện)',
          col2: '28/12/2020',
          col3: '28/12/2021',
          col4: [
            {
              col4text: '2 năm',
              col4data: 'Còn 2 lượt mua',
              col4color: 'menuItem',
            },
          ],
          col5: 'Nâng cấp',
        },
        {
          col1: 'Theme Big Shop - Phong cách Blue',
          col2: '28/12/2020',
          col3: '28/12/2021',
          col4: [
            {
              col4text: '2 năm',
              col4data: 'Đã hết hạn',
              col4color: 'cmsRed',
            },
          ],
          col5: 'Nâng cấp',
        },
        {
          col1: 'Theme Ryo - Tất cả phong cách',
          col2: '28/12/2020',
          col3: '28/12/2021',
          col4: [
            {
              col4text: '2 năm',
              col4data: 'Sắp hết hạn',
              col4color: 'cmsOrange',
            },
          ],
          col5: 'Nâng cấp',
        },
        {
          col1: 'Tất cả theme',
          col2: '28/12/2020',
          col3: '28/12/2021',
          col5: 'Đã tối đa',
          col5disabled: true,
        },
        {
          col1: 'Bán hàng qua Facebook',
          col2: '28/12/2020',
          col3: '28/12/2021',
          col5: 'Mua ngay',
          col5disabled: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.table {
  &-package {
    &__header {
      &-content {
        width: calc( 100% - 1.25rem );
      }
      tr {
        @apply pb-15px border-b;
        th {
          &:nth-child(1) {
            min-width: 530px;
            max-width: 530px;
          }
          &:nth-child(2), &:nth-child(3) {
            min-width: 150px;
            max-width: 150px;
          }
          &:nth-child(4) {
            min-width: 250px;
            max-width: 250px;
          }
          &:nth-child(5) {
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
        @apply py-10px border-b;
        td {
          &:nth-child(1) {
            min-width: 530px;
            max-width: 530px;
          }
          &:nth-child(2), &:nth-child(3) {
            min-width: 150px;
            max-width: 150px;
          }
          &:nth-child(4) {
            min-width: 250px;
            max-width: 250px;
          }
          &:nth-child(5) {
            min-width: 100px;
            max-width: 100px;
          }
        }
      }
    }
  }
}
</style>
