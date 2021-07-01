<template>
  <!-- eslint-disable max-len -->
  <Table class="table-version-saved">
    <thead class="box-table-header table-version-saved__header" slot="header">
      <tr v-if="allCheckStatus.length !== 0">
        <TableActions @closeAction="action()" :optionData="tableActionsData" :isFull="allCheckStatus.length === optionDataTable.length">
          <span slot="content">{{ allCheckStatus.length }} phiên bản được chọn</span>
        </TableActions>
      </tr>
      <tr class="pl-3" v-if="allCheckStatus.length === 0">
        <th>
          <div class="table-version-saved__header-content" @click="selectAll = !selectAll">
            <ActionCheckbox/>
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content"/>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Màu sắc
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Kích thước
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Chất liệu
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Giá bán
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Giá ảo
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Giá nhập
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Tổng SL
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            SKU
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content truncate">
            QR code, Barcode ...
          </div>
        </th>
        <th>
          <div class="table-version-saved__header-content">
            Thao tác
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="box-table-body table-version-saved__body" slot="body">
      <template v-for="(data, index) in optionDataTable">
        <tr
            class="pl-3"
          :class="[
            !data.disabled ? 'table-version-saved__disabled' : null
          ]"
          :key="index">
          <td>
            <div class="table-version-saved__body-content">
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
            <div class="table-version-saved__body-content">
              <SquareSVG class="w-10 fill-menuIcon" v-if="!data.img"/>
              <img :src="data.img" class="mx-auto w-10 h-10" v-else>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.color"
                :name="data.color"
                :value="data.color"
                input-class="cms-input__default cms-input__text-13px cms-input__text-red text-center">
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.size"
                :name="data.size"
                :value="data.size"
                input-class="cms-input__default cms-input__text-13px cms-input__text-green text-center">
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.material"
                :name="data.material"
                :value="data.material"
                input-class="cms-input__default cms-input__text-13px cms-input__text-orange text-center">
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.price"
                :name="data.price"
                :value="data.price"
                input-class="cms-input__with-letter cms-input__text-13px"
                button-class="absolute right-0 top-0 h-full mr-3 focus:outline-none no-effect">
                <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.vprice"
                :name="data.vprice"
                :value="data.vprice"
                input-class="cms-input__with-letter cms-input__text-13px"
                button-class="absolute right-0 top-0 h-full mr-3 focus:outline-none no-effect">
                <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.iprice"
                :name="data.iprice"
                :value="data.iprice"
                input-class="cms-input__with-letter cms-input__text-13px"
                button-class="absolute right-0 top-0 h-full mr-3 focus:outline-none no-effect">
                <template slot="button-text"><span class="cms-typo text-14px text-placeholderStyle">đ</span></template>
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.qty"
                :name="data.qty"
                :value="data.qty"
                input-class="cms-input__default cms-input__text-13px text-center">
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.sku"
                :name="data.sku"
                :value="data.sku"
                input-class="cms-input__default cms-input__text-13px text-center">
              </InputType>
            </div>
          </td>
          <td>
            <div class="table-version-saved__body-content">
              <InputType
                :id="data.barcode"
                :name="data.barcode"
                :value="data.barcode"
                input-class="cms-input__default cms-input__text-13px text-center">
              </InputType>
            </div>
          </td>
          <td>
            <div class="w-full text-center">
              <ul class="list-none">
                <li class="inline">
                  <a href="#" class="text-menuIcon hover:text-buttonAndURL cursor-pointer">
                    <EyeSVG class="w-icon inline mr-3"/>
                  </a>
                </li>
                <li class="inline">
                  <a href="#" class="text-menuIcon hover:text-buttonAndURL cursor-pointer">
                    <DeleteSVG class="w-icon inline mr-3"/>
                  </a>
                </li>
                <li class="inline">
                  <a href="#" class="text-menuItem hover:text-buttonAndURL">Lưu</a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
    <p class="cms-typo text-14px text-buttonAndURL mt-5" slot="outside">
      <a href="#">+ Thêm phiên bản mới</a>
    </p>
  </Table>
</template>

<script>
import Table from '@/components/client/Table.vue';
import InputType from '@/components/client/InputType.vue';

import TableActions from '@/components/client/TableActions.vue';

import ModalUpdatePrice from '@/components/client/ModalUpdatePrice.vue';

import {
  SquareSVG,
  EyeSVG,
  DeleteSVG,
} from '@/components/SVGs.vue';
import ActionCheckbox from "@/components/client/ActionCheckbox";

export default {
  components: {
    ActionCheckbox,
    Table,
    SquareSVG,
    InputType,
    EyeSVG,
    DeleteSVG,
    TableActions,
  },
  data() {
    return {
      allCheckStatus: [],
      tableActionsData: [
        {
          label: 'Xóa phiên bản',
        },
        {
          label: 'Dừng phiên bản',
        },
        {
          label: 'Cập nhật giá',
          modal: ModalUpdatePrice,
          width: 500,
        },
      ],
      optionDataTable: [
        {
          disabled: true,
          img: 'https://picsum.photos/40',
          color: 'Xanh Ngọc',
          size: 'S',
          material: 'Kim loại',
          price: '21,200,000',
          vprice: '21,200,000',
          iprice: '21,200,000',
          qty: '1200',
          sku: 'Tocdep-12',
          barcode: '893 3481 00106 3',
        },
        {
          disabled: true,
          img: 'https://picsum.photos/40',
          color: 'Xanh Ngọc',
          size: 'S',
          material: 'Kim loại',
          price: '21,200,000',
          vprice: '21,200,000',
          iprice: '21,200,000',
          qty: '1200',
          sku: 'Tocdep-12',
          barcode: '893 3481 00106 3',
        },
        {
          disabled: false,
          img: '',
          color: 'Xanh Ngọc',
          size: 'S',
          material: 'Kim loại',
          price: '21,200,000',
          vprice: '21,200,000',
          iprice: '21,200,000',
          qty: '1200',
          sku: 'Tocdep-12',
          barcode: '893 3481 00106 3',
        },
        {
          disabled: true,
          img: 'https://picsum.photos/40',
          color: 'Xanh Ngọc',
          size: 'S',
          material: 'Kim loại',
          price: '21,200,000',
          vprice: '21,200,000',
          iprice: '21,200,000',
          qty: '1200',
          sku: 'Tocdep-12',
          barcode: '893 3481 00106 3',
        },
      ],
    };
  },
  methods: {
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
    &-version-saved {
      &__disabled {
        > td {
          @apply text-placeholderStyle fill-placeholderStyle;
          &:hover, &:focus {
            @media (min-width: 992px) {
              //@apply bg-cmsLightBlue bg-opacity-10 #{!important};
              background: #eff8fd !important;
            }
          }
          > div {
            input, a {
              @apply text-opacity-50 #{!important};
            }
          }
        }
      }
      &__header {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          > th {
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5) {
              @media (min-width: 992px) {
                @apply sticky bg-white z-10;
              }
            }
            &:nth-child(1) {
              min-width: 50px;
              max-width: 50px;
              left: 0;
            }
            &:nth-child(2) {
              min-width: 62px;
              max-width: 62px;
              left: 50px;
            }
            &:nth-child(3) {
              min-width: 130px;
              max-width: 130px;
              left: 112px;
            }
            &:nth-child(4) {
              min-width: 100px;
              max-width: 100px;
              left: 242px;
            }
            &:nth-child(5) {
              min-width: 130px;
              max-width: 130px;
              left: 342px;
            }
            &:nth-child(6) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(7) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(8) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(9) {
              min-width: 105px;
              max-width: 105px;
            }
            &:nth-child(10) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(11) {
              min-width: 155px;
              max-width: 155px;
            }
            &:nth-child(12) {
              min-width: 105px;
              max-width: 105px;
            }
          }
        }
      }
      &__body {
        &-content {
          width: calc( 100% - 1.25rem );
        }
        tr {
          @apply py-10px;
          &:hover, &:focus {
            > td {
              &:nth-child(1),
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4),
              &:nth-child(5) {
                @media (min-width: 992px) {
                  //@apply bg-opacity-0 #{!important};
                  background: #eff8fd;
                }
              }
            }
          }
          > td {
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5) {
              @media (min-width: 992px) {
                @apply sticky bg-white z-10;
              }
            }
            &:nth-child(1) {
              min-width: 50px;
              max-width: 50px;
              left: 0;
            }
            &:nth-child(2) {
              min-width: 62px;
              max-width: 62px;
              left: 50px;
            }
            &:nth-child(3) {
              min-width: 130px;
              max-width: 130px;
              left: 112px;
            }
            &:nth-child(4) {
              min-width: 100px;
              max-width: 100px;
              left: 242px;
            }
            &:nth-child(5) {
              min-width: 130px;
              max-width: 130px;
              left: 342px;
            }
            &:nth-child(6) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(7) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(8) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(9) {
              min-width: 105px;
              max-width: 105px;
              input {
                @apply text-buttonAndURL;
              }
            }
            &:nth-child(10) {
              min-width: 125px;
              max-width: 125px;
            }
            &:nth-child(11) {
              min-width: 155px;
              max-width: 155px;
            }
            &:nth-child(12) {
              min-width: 105px;
              max-width: 105px;
            }
          }
        }
      }
    }
  }
</style>
