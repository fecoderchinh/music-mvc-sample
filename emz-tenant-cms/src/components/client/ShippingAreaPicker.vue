<template>
  <!-- eslint-disable max-len -->
  <Table class="table-SAP">
    <thead class="box-table-header table-SAP__header" slot="header">
      <tr class="border-b">
        <th>
          <div class="table-SAP__header-content text-left">
            <h3 class="ml-2 cms-typo text-14px text-labelAndTitle">Chọn khu vực và kho lấy hàng cho các khu vực đó</h3>
          </div>
        </th>
        <th>
          <div class="w-full text-right">
            <h3 class="cms-typo text-14px text-buttonAndURL">
              <a href="#">Thêm khu vực vận chuyển</a>
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-SAP__body" slot="body">
      <tr>
        <td>
          <div class="table-SAP_body-content">
            <h3 class="ml-2 cms-typo text-14px text-labelAndTitle">Hà Nội</h3>
          </div>
        </td>
        <td>
          <div class="table-SAP_body-content">
            <SelectOption :option-data="this.optionDataSelect1"/>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="table-SAP_body-content">
            <h3 class="ml-2 cms-typo text-14px text-labelAndTitle">Sài Gòn</h3>
          </div>
        </td>
        <td>
          <div class="table-SAP_body-content">
            <SelectOption :option-data="this.optionDataSelect2"/>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="table-SAP_body-content">
            <h3 class="ml-2 cms-typo text-14px text-labelAndTitle">Các tỉnh thành khác</h3>
          </div>
        </td>
        <td>
          <div class="table-SAP_body-content">
            <SelectOption :option-data="this.optionDataSelect3"/>
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import SelectOption from '@/components/client/SelectOption.vue';

export default {
  components: {
    Table,
    SelectOption,
  },
  data() {
    return {
      optionDataSelect1: [
        { name: 'Cửa hàng chính' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
      optionDataSelect2: [
        { name: 'Kho Hà Nội' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
      optionDataSelect3: [
        { name: 'Kho Sài Gòn' },
        { name: 'Chọn2' },
        { name: 'Chọn3' },
      ],
    };
  },
};
</script>

<style lang="scss">
  .table {
    &-SAP {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply pb-15px border-b;
          th {
            &:nth-child(1) {
              min-width: 480px;
              max-width: 480px;
            }
            &:nth-child(2) {
              min-width: 200px;
              max-width: 200px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply pt-10px;
          &:last-child {
            @apply pb-0;
          }
          td {
            &:nth-child(1) {
              min-width: 380px;
              max-width: 380px;
            }
            &:nth-child(2) {
              min-width: 300px;
              max-width: 300px;
            }
          }
        }
      }
    }
  }
</style>
