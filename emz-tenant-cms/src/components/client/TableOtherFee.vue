<template>
  <!-- eslint-disable max-len -->
  <Table class="table-otherfee">
    <thead class="box-table-header table-otherfee__header" slot="header">
    <tr class="border-b">
      <th>
        <div class="table-otherfee__header-content text-left">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Tên phương thức
          </h3>
        </div>
      </th>
      <th>
        <div class="table-otherfee__header-content text-right">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Điều kiện
          </h3>
        </div>
      </th>
      <th>
        <div class="table-otherfee__header-content text-right">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Phí vận chuyển
          </h3>
        </div>
      </th>
      <th>
        <div class="table-otherfee__header-content text-right">
          <h3 class="cms-typo text-14px text-labelAndTitle">
            Gồm Quận/Huyện
          </h3>
        </div>
      </th>
      <th>
        <div class="table-otherfee__header-content">
        </div>
      </th>
    </tr>
    </thead>
    <tbody class="box-table-body table-otherfee__body" slot="body">
    <tr v-for="(data, index) in optionDataTable" :key="index">
      <td>
        <div class="table-otherfee__body-content">
          <h3 class="cms-typo text-13px text-buttonAndURL cursor-pointer" @click.self.prevent="openModal">
            {{  data.col1  }}
          </h3>
        </div>
      </td>
      <td>
        <div class="table-otherfee__body-content text-right">
          <h3 class="cms-typo text-13px text-menuItem">
            {{  data.col2  }}
          </h3>
        </div>
      </td>
      <td>
        <div class="table-otherfee__body-content text-right">
          <h3 class="cms-typo text-13px text-menuItem">
            {{  data.col3  }}
          </h3>
        </div>
      </td>
      <td>
        <div class="table-otherfee__body-content text-right">
          <h3 class="cms-typo text-13px text-menuItem">
            {{  data.col4  }}
          </h3>
        </div>
      </td>
      <td>
        <div class="flex justify-between">
          <a href="#" class="text-buttonAndURL cms-typo text-14px">Sửa</a>
          <a href="#" class="flex items-center"><DeleteSVG class="w-3 fill-menuIcon"/></a>
        </div>
      </td>
    </tr>
    </tbody>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';

import ModalTableShippingFee from '@/components/client/ModalTableShippingFee.vue';

import {
  DeleteSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Table,
    DeleteSVG,
  },
  data() {
    return {
      optionDataTable: [
        {
          col1: 'Giao hàng tận nơi',
          col2: '0đ trở lên',
          col3: '40,000đ',
          col4: '0/0',
        },
        {
          col1: 'Giao hàng nặng',
          col2: '10kg - 50kg',
          col3: '40,000đ',
          col4: '0/0',
        },
        {
          col1: 'Giao hàng cồng kềnh',
          col2: 'Khổ quá 1m',
          col3: '40,000đ',
          col4: '0/0',
        },
      ],
    };
  },
  methods: {
    openModal() {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: 600, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(ModalTableShippingFee, options, style, events);
    },
  },
};
</script>

<style lang="scss">
.table {
  &-otherfee {
    &__header {
      &-content {
        width: calc( 100% - 1.25rem );
      }
      tr {
        @apply pb-10px border-b;
        th {
          &:nth-child(1) {
            min-width: 220px;
            max-width: 220px;
          }
          &:nth-child(2) {
            min-width: 100px;
            max-width: 100px;
          }
          &:nth-child(3) {
            min-width: 115px;
            max-width: 115px;
          }
          &:nth-child(4) {
            min-width: 145px;
            max-width: 145px;
          }
          &:nth-child(5) {
            min-width: 70px;
            max-width: 70px;
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
        &:last-child {
          @apply pb-0 border-b-0;
        }
        td {
          &:nth-child(1) {
            min-width: 220px;
            max-width: 220px;
          }
          &:nth-child(2) {
            min-width: 100px;
            max-width: 100px;
          }
          &:nth-child(3) {
            min-width: 115px;
            max-width: 115px;
          }
          &:nth-child(4) {
            min-width: 145px;
            max-width: 145px;
          }
          &:nth-child(5) {
            min-width: 70px;
            max-width: 70px;
          }
        }
      }
    }
  }
}
</style>
