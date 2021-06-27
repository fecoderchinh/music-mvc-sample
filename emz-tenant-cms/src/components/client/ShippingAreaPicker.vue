<template>
  <!-- eslint-disable max-len -->
  <Table class="table-SAP">
    <thead class="box-table-header table-SAP__header" slot="header">
    <tr v-if="allCheckStatus.length !== 0">
      <TableActions
          @closeAction="action()"
          :optionData="tableActionsData"
          :isFull="allCheckStatus.length === optionDataTable.length"
          first-item-css="ml-0">
        <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
      </TableActions>
    </tr>
      <tr class="border-b" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-SAP__header-content text-left" @click="selectAll = !selectAll">
            <ActionCheckbox class="pl-1">
              <h3 class="ml-2 cms-typo text-14px text-labelAndTitle">Chọn khu vực và kho lấy hàng cho các khu vực đó</h3>
            </ActionCheckbox>
          </div>
        </th>
        <th>
          <div class="w-full text-right">
            <h3 class="cms-typo text-14px text-buttonAndURL">
              <a href="#" @click.prevent="openModal(buttonAddNewModal, buttonAddNewWidth)">Thêm khu vực vận chuyển</a>
            </h3>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-SAP__body" slot="body">
      <tr v-for="(data, index) in optionDataTable" :key="index">
        <td class="pl-1">
          <div class="table-SAP_body-content">
            <div class="cms-checkbox">
              <input
                  :id="data.id"
                  type="checkbox"
                  :value="data.id"
                  v-model="allCheckStatus"
              />
              <label :for="data.id" class="text-standardCMS text-menuItem text-14px">
                <span class="square"><span class="square-inner"></span></span>
                <h3 class="ml-2 cms-typo text-14px text-labelAndTitle">{{ data.name }}</h3>
              </label>
            </div>
          </div>
        </td>
        <td>
          <div class="table-SAP_body-content">
            <SelectOption :option-data="data.optionDataSelect"/>
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import SelectOption from '@/components/client/SelectOption.vue';
import TableActions from "@/components/client/TableActions";
import ActionCheckbox from "@/components/client/ActionCheckbox";
import ModalAddShippingArea from "@/components/client/ModalAddShippingArea";

export default {
  components: {
    ActionCheckbox,
    TableActions,
    Table,
    SelectOption,
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
          name: 'Hà Nội',
          optionDataSelect: [
            { name: 'Cửa hàng chính' },
            { name: 'Chọn2' },
            { name: 'Chọn3' },
          ],
        },
        {
          id: '2',
          name: 'Sài Gòn',
          optionDataSelect: [
            { name: 'Kho Hà Nội' },
            { name: 'Chọn2' },
            { name: 'Chọn3' },
          ],
        },
        {
          id: '3',
          name: 'Các tỉnh khác',
          optionDataSelect: [
            { name: 'Kho Sài Gòn' },
            { name: 'Chọn2' },
            { name: 'Chọn3' },
          ],
        }
      ],
      buttonAddNewModal: ModalAddShippingArea,
      buttonAddNewWidth: 500
    };
  },
  methods: {
    openModal(m, w = 1200) {
      const options = {
        class: 'cms-modal',
      };
      const style = {
        width: w, height: 'auto', shiftX: 0.5, adaptive: true,
      };
      const events = {
        // opened: () => console.log('Opened'),
        closed: () => this.$emit('close'),
      };

      this.$modal.show(m, options, style, events);
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
    &-SAP {
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply py-15px border-b;
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
          @apply py-5px;
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
