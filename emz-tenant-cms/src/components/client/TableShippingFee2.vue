<template>
  <!-- eslint-disable max-len -->
  <Table class="table-shippingfee">
    <thead class="box-table-header table-shippingfee__header" slot="header">
      <tr class="border-b">
        <th>
          <div class="table-shippingfee__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Tên phương thức
            </h3>
          </div>
        </th>
        <th>
          <div class="table-shippingfee__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Khoảng giá đơn
            </h3>
          </div>
        </th>
        <th>
          <div class="table-shippingfee__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Phí vận chuyển
            </h3>
          </div>
        </th>
        <th>
          <div class="table-shippingfee__header-content text-left">
            <h3 class="cms-typo text-14px text-labelAndTitle">
              Theo Quận/Huyện
            </h3>
          </div>
        </th>
        <th>
          <div class="table-shippingfee__header-content">
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body noHover table-shippingfee__body" slot="body">
      <tr v-for="(data, index) in optionDataTable" :key="index">
        <td>
          <div class="table-shippingfee__body-content">
            <h3 class="cms-typo text-13px text-buttonAndURL cursor-pointer" @click.self.prevent="openModal">
              Giao hàng NẶNG tân nơi
            </h3>
          </div>
        </td>
        <td>
          <div class="table-shippingfee__body-content text-center">
            <h3 class="cms-typo text-13px text-menuItem">
              0đ trở lên
            </h3>
          </div>
        </td>
        <td>
          <div class="table-shippingfee__body-content text-center">
            <h3 class="cms-typo text-13px text-menuItem">
              40,000đ
            </h3>
          </div>
        </td>
        <td>
          <div class="table-shippingfee__body-content text-right">
            <h3 class="cms-typo text-13px text-menuItem">
              0/0
            </h3>
          </div>
        </td>
        <td>
          <div class="flex justify-end">
            <CloseSVG class="w-4 fill-menuIcon"/>
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
  CloseSVG,
} from '@/components/SVGs.vue';

export default {
  components: {
    Table,
    CloseSVG,
  },
  data() {
    return {
      optionDataTable: [
        {},
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
    &-shippingfee {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply pb-15px border-b;
          th {
            &:nth-child(1) {
              min-width: 200px;
              max-width: 200px;
            }
            &:nth-child(2) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(3) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(4) {
              min-width: 145px;
              max-width: 145px;
            }
            &:nth-child(5) {
              width: 40px;
              min-width: 40px;
              max-width: 40px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply py-15px;
          &:last-child {
            @apply pb-0;
          }
          td {
            &:nth-child(1) {
              min-width: 200px;
              max-width: 200px;
            }
            &:nth-child(2) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(3) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(4) {
              min-width: 145px;
              max-width: 145px;
            }
            &:nth-child(5) {
              width: 40px;
              min-width: 40px;
              max-width: 40px;
            }
          }
        }
      }
    }
  }
</style>
